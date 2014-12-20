if (Meteor.isServer) {
    Meteor.startup(function () {
        /*
        // Publish non deleted posts filtered by userId
        Meteor.publish("posts", function() {
            if (this.userId) {
                check(this.userId, String);
                return Posts.find({ userId: this.userId }, { deletedAt: { $exists: false }}, {sort: {created: -1}});
            }
        })
        */

        // Publish non deleted posts without filtering by userId
        Meteor.publish("posts", function() {
          return Posts.find({deletedAt: { $exists: false }}, {sort: {created: -1}});
        });
    });
}

