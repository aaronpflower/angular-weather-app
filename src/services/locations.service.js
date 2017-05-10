import angular from 'angular'

const locationService = angular.module('locationService', [])
    .factory('Locations', () => {
        let locations = [
            { name: 'Boulder', id: 0 },
            { name: 'Denver', id: 1 }
        ]

        let current

        return {
            add: function(location) {
                locations.push(location);
            },
            get: function() {
                return locations;
            },
            edit: function(location) {
                return locations[location.id] = location
            },
            delete: function(location) {
                return locations.splice(location.id, 1)
            },
            getCurrent: function() {
                return current[0];
            },
            setCurrent: function(id) {
                current = locations.filter(item => {
                    return item.id === parseInt(id);
                })
            }
        }
    })
    .name

export default locationService