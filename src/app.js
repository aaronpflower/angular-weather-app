import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './config/app.config';

// Components
import add from './components/add/add.component'
import currently from './components/currently/currently.component'
import list from './components/list/list.component'
import nav from './components/nav/nav.component'

// Containers
import main from './containers/main/main.container'
import conditions from './containers/conditions/conditions.container'

// Services
import locationService from './services/locations.service'
import geocoder from './services/geocoder.service'
import forecast from './services/forecast.service'

const app = angular.module('app', [uirouter, main, nav, conditions, add, list, currently, locationService, geocoder, forecast])
	.config(['$stateProvider', '$urlRouterProvider', routes]);

export default app;