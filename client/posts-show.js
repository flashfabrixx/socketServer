Posts = new Mongo.Collection("posts");
Meteor.subscribe("posts");

/**
 * List *
 */

Template.postsList.helpers({
    posts: function() {
        return Posts.find({deletedAt: { $exists: false }}, {sort: {created: -1}});
    }
});

Template.post.events({
    'click #edit-post-btn': function(event) {
        event.preventDefault();
        Session.set('selectedPostId', this._id);
    },
    'click #delete-post-btn': function(event) {
        event.preventDefault();
        var selectedPost = Posts.findOne({_id: this._id});
        selectedPost.deletedAt = moment().unix();

        Meteor.call("deletePost", selectedPost);
        Session.set('selectedPostId', null);
    }
});

Template.body.events({
   'click #new-post-btn': function() {
       $('#edit-post-modal').modal('show');
   }
});

/**
 * Modal *
 */

Template.postEditModal.helpers({
   post: function() {
       var selectedPostId = Session.get('selectedPostId');
       return Posts.findOne({_id: selectedPostId});
   }
});
Template.postEditModal.events({
    'click #submit-modal-btn': function(event) {
        event.preventDefault();

        var selectedPostId = Session.get('selectedPostId');
        var message = $('#messageInput').val();
        var timestamp = moment().unix();

        if (!selectedPostId) {
            var newPost = {
                createdAt: timestamp,
                updatedAt: timestamp,
                message: message
            }
            Meteor.call("addPost", newPost);
        } else {
            var selectedPost = Posts.findOne({_id: selectedPostId});
            selectedPost.message = message;
            selectedPost.updatedAt = timestamp;

            Meteor.call("editPost", selectedPost);
            Session.set('selectedPostId', null);
        }

        $('#edit-post-modal').modal('hide');
        $('#messageInput').val('');
    }
})
