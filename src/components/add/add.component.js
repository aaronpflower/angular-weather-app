import angular from 'angular'

const add = angular.module('add', [])
    .directive('addLocation', () => {
        return {
            scope: {},
            restrict: 'E',
            template: require('./add.component.html'),
            controller: ['$scope', 'Locations', 'Geocoder', 'Forecast', ($scope, Locations, Geocoder, Forecast) => {
                $scope.addLocation = (location) => {
                    console.log(location)
                    Geocoder.getCords(location)
                    .then(res => {
                        return Forecast.getConditions(res.data.results[0].geometry.location)
                    })
                    .then(conditions => {
                        return Locations.add(conditions.data)
                    })
                    .catch(err => {
                        throw err
                    });
                }
            }]
        }
    })
    .name

export default add