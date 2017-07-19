module.exports = function (ngModule) {
    ngModule.config(['$stateProvider',function($stateProvider){
        $stateProvider.state({
            'app': {
                name: 'app',
                url: '/',
                template: '<mr-home></mr-home>'
            }
        })
    }])
}