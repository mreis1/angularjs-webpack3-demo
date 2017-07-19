require('./home.component.css');

module.exports = function(ngModule) {
    ngModule.directive('mrHome', () => {
            return {
                restrict: 'E',
                template: require('./home.component.html'),
                controller: ['$scope',function ($scope) {
                    $scope.title = 'App works';
                }]
            }
        }
    )
};