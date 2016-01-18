var AngularReview;
(function (AngularReview) {
    angular.module('AngularReview', ['ngRoute', 'ui.bootstrap'])
        .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/ngApp/views/twitter.html',
            controller: AngularReview.Controllers.TwitterController,
            //name the controller based on the view itself
            controllerAs: 'tweetFeed'
        });
    });
})(AngularReview || (AngularReview = {}));
//# sourceMappingURL=app.js.map