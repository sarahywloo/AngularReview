var AngularReview;
(function (AngularReview) {
    var Controllers;
    (function (Controllers) {
        var TwitterController = (function () {
            function TwitterController() {
                this.tweets = [
                    {
                        profilePicture: 'http://orig06.deviantart.net/a600/f/2015/014/a/4/profile_picture_by_tamialynnette_stock-d8dyn54.jpg',
                        username: 'Sarah',
                        dateCreated: new Date(2015, 11, 25),
                        message: 'Adding another tweet in december to test the filter function!',
                        likes: 0
                    },
                    {
                        profilePicture: 'http://orig06.deviantart.net/a600/f/2015/014/a/4/profile_picture_by_tamialynnette_stock-d8dyn54.jpg',
                        username: 'Sarah',
                        dateCreated: new Date(2015, 11, 22),
                        message: 'Back dating for practice!',
                        likes: 0
                    }
                ];
            }
            TwitterController.prototype.incrementLikes = function (tweet) {
                tweet.likes++;
            };
            TwitterController.prototype.retweet = function (tweet) {
                this.tweets.unshift({
                    profilePicture: tweet.profilePicture,
                    username: tweet.username,
                    dateCreated: new Date(),
                    message: "RE: " + tweet.message,
                    likes: 0
                });
            };
            TwitterController.prototype.addTweet = function (message) {
                //to add new tweets at the bottom, use .push
                this.tweets.unshift({
                    profilePicture: 'http://orig06.deviantart.net/a600/f/2015/014/a/4/profile_picture_by_tamialynnette_stock-d8dyn54.jpg',
                    username: 'Sarah',
                    dateCreated: new Date(),
                    message: message,
                    likes: 0
                });
            };
            return TwitterController;
        })();
        Controllers.TwitterController = TwitterController;
    })(Controllers = AngularReview.Controllers || (AngularReview.Controllers = {}));
})(AngularReview || (AngularReview = {}));
