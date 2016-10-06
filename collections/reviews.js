Reviews = new Mongo.Collection('reviews');

Meteor.methods({
        'reviews.insert': (body) => {
        check(body, String);

if (!Meteor.user()) {
    throw new Meteor.Error(401, 'You need to be signed in to continue');
}
if (!body) {
    throw new Meteor.Error(422, 'Body should not be blank');
}

let review = {
    body: body,
    authorId: Meteor.userId(),
    createdAt: new Date(),
    updatedAt: new Date()
};

return Reviews.insert(review);
},

'reviews.remove': (_id) => {
    check(_id, String);

    if (!Meteor.user()) {
        throw new Meteor.Error(401, 'You need to be signed in to continue');
    }
    if (!_id) {
        throw new Meteor.Error(422, '_id should not be blank');
    }
    if (Meteor.userId() !== Reviews.findOne({ _id: _id }).authorId) {
        throw new Meteor.Error(422, 'You can only remove your own reviews');
    }

    Reviews.remove({ _id: _id });
}
});
