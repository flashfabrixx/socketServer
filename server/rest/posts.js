/**
 * CRUD methods for Posts
 */
Meteor.methods({
    readPosts: function() {
        Posts.find().fetch()
    },
    readPost: function(post) {
        Posts.find({ _id: post._id }).fetch()
    },
    addPost: function (post) {
        Posts.insert(post);
    },
    editPost: function(post) {
        Posts.update(
            { _id: post._id, updatedAt: { $lt: post.updatedAt } },
            { $set: {
                message: post.message,
                updatedAt: post.updatedAt
            }}
        )
    },
    deletePost: function(post) {
        Posts.update(
            { _id: post._id },
            { $set: {
                deletedAt: Date.now()
            }}
        )
    }
});
