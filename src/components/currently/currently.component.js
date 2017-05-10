import angular from 'angular'

const currently = angular.module('currently', [])
    .directive('currently', () => {
        return {
            scope: {},
            restrict: 'E',
            template: require('./currently.component.html'),
            controller: ['$scope', '$stateParams', 'Locations', function($scope, $stateParams, Locations) {
                $scope.id = $stateParams.id;
                Locations.setCurrent($scope.id)
                $scope.location = Locations.getCurrent()
                console.log($scope.location)
            }]
        }
    })
    .name

export default currently