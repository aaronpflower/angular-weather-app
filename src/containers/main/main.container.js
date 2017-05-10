import angular from 'angular'

const main = angular.module('main', [])
    .directive('mainContainer', () => {
        return {
            scope: {},
            restrict: 'E',
            template: require('./main.container.html')
        }
    })
    .name

export default main