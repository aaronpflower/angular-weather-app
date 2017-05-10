import angular from 'angular'

const list = angular.module('list', [])
    .directive('listComponent', () => {
        return {
            scope: {},
            restrict: 'E',
            template: require('./list.component.html'),
            controller: ['$scope', 'Locations', ($scope, Locations) => {
                $scope.locations = Locations.get();
                $scope.deleteLocation = function(location) {
                    Locations.delete(location)
                }
            }]
        }
    })
    .name

export default list