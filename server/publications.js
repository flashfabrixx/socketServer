if (Meteor.isServer) {
    Meteor.startup(function () {
        Meteor.publish("posts", function() {
            return Posts.find({deletedAt: { $exists: false }}, {sort: {created: -1}});
        });
    });
}