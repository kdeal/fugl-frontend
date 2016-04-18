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
  this.route('create-page', {path: '/:username/:project/page/create'});
  this.route('create-post', {path: '/:username/:project/post/create'});
  this.route('edit-category', {path: '/:username/:project/category/:category'});
});

export default Router;
