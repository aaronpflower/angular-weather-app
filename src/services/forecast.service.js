import angular from 'angular'

const forecast = angular.module('forecast', [])
    .factory('Forecast', ['$http', ($http) => {
        return {
            getConditions: (location) => {
                var URL = 'http://api.openweathermap.org/data/2.5/weather';
  
                var request = {
                    method: 'GET',
                    url: URL,
                    params: {
                        lat: location.lat,
                        lon: location.lng,
                        units: 'imperial',
                        appid: '2c75dbc4ed03bdd067ae6d87ac33617f'
                    }
                };
                return $http(request)
            }
        }
    }])
    .name

export default forecast