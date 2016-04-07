var app = angular.module('siteApp', ['ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: '../templates/home.html'
	})
	.state('resume', {
		url: '/resume',
		templateUrl: '../templates/resume.html'
	})
	.state('contact', {
		url: '/contact',
		templateUrl: '../templates/contact.html'
	})
	.state('kamlim', {
		url: '/kamlim',
		templateUrl: '../templates/projects/kamlim.html'
	})
	.state('ml-text-analyzer', {
		url: '/ml-text-analyzer',
		templateUrl: '../templates/projects/ml-text-analyzer.html'
	})
	.state('space-invaders++', {
		url: '/space-invaders++',
		templateUrl: '../templates/projects/space-invaders++.html'
	})
	.state('pongNET', {
		url: '/pongNET',
		templateUrl: '../templates/projects/pongNET.html'
	})
	.state('opencv-image-tracker', {
		url: '/opencv-image-tracker',
		templateUrl: '../templates/projects/opencv-image-tracker.html'
	})
	.state('yelp-scraper', {
		url: '/yelp-scraper',
		templateUrl: '../templates/projects/yelp-scraper.html'
	})
	$urlRouterProvider.otherwise('home')
}])
