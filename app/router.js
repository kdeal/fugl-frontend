import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('create-project', {path: '/create'});
  this.route('create-category', {path: '/:username/:project/category/create'});
  this.route('create-page-plugin', {path: '/:username/:project/page_plugin/create'});
});

export default Router;
