import angular from 'angular'

const conditions = angular.module('conditions', [])
    .directive('conditions', () => {
        return {
            scope: {},
            restrict: 'E',
            template: require('./conditions.container.html')
        }
    })
    .name

export default conditions