Posts = new Meteor.Collection("posts");

// Delete posts after 30 days when deletedAt is set
Posts._ensureIndex( { "deletedAt": 1 }, { expireAfterSeconds: 2592000 } );

Posts.allow({
    insert: function(){
        return true;
    },
    update: function () {
        return true;
    },
    remove: function(){
        return true;
    }
});