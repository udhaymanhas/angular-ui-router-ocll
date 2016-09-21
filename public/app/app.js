var myApp = angular.module('helloworld', ['ui.router'],['oc.lazyLoad']);

myApp.config(function($stateProvider) {
  var uiRouter = {
    name: 'uirouter',
    url: '/uirouter',
    template: '<h3>uirouter HERE</h3>'
  }

  var ocLazyLoadState = {
    name: 'oclazyload',
    url: '/oclazyload',
    template: '<h3>LAZYLOAD HERE</h3>'
  }

  var materialState = {
    name: 'material',
    url: '/material',
    template: '<h3>material HERE</h3>'
  }

  var appState = {
    name: 'app',
    url: '/app',
    template: '<h3>app demo here</h3>'
  }

  $stateProvider.state(uiRouter);
  $stateProvider.state(ocLazyLoadState);
  $stateProvider.state(materialState);
  $stateProvider.state(appState);
});
