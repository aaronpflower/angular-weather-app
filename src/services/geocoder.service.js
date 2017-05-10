import angular from 'angular'

const geocoder = angular.module('geocoder', [])
    .factory('Geocoder', ['$http', ($http) => {
        return {
            getCords: (address) => {
                console.log(address)
                var URL = 'https://maps.googleapis.com/maps/api/geocode/json';
  
                var request = {
                    method: 'GET',
                    url: URL,
                    params: {
                        address: address,
                        key: 'AIzaSyBzaYojdccFaRHkouxZK8cYOijBMcYsi1E'
                    }
                };
                return $http(request)
            }
        }
    }])
    .name

export default geocoder