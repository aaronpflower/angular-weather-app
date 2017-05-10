const routes = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {
            url: '/',
            template: '<main-container></main-container>'
        })

        .state('conditions', {
            url: '/conditions',
            template: '<conditions></conditions>'
        })

        .state('conditions.location', {
            url: '/location/:id',
            template: '<currently></currently>'
        })

}

export default routes