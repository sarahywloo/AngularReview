//creating a filter 

namespace AngularReview.Filters {

    function selectedMonth() {
        return function (input: any[], expression: string) {
            if (expression) {
                return input.filter((tweet) => {
                    return expression == tweet.dateCreated.getMonth();
                });
            }
            else return input;
        };
    }

    angular.module('AngularReview').filter('selectedMonth', selectedMonth);
}