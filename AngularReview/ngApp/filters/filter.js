//creating a filter 
var AngularReview;
(function (AngularReview) {
    var Filters;
    (function (Filters) {
        function selectedMonth() {
            return function (input, expression) {
                if (expression) {
                    return input.filter(function (tweet) {
                        return expression == tweet.dateCreated.getMonth();
                    });
                }
                else
                    return input;
            };
        }
        angular.module('AngularReview').filter('selectedMonth', selectedMonth);
    })(Filters = AngularReview.Filters || (AngularReview.Filters = {}));
})(AngularReview || (AngularReview = {}));
