import angular from 'angular'

const nav = angular.module('nav', [])
    .directive('navComponent', () => {
        return {
            scope: {},
            restrict: 'E',
            template: require('./nav.component.html')
        }
    })
    .name

export default nav