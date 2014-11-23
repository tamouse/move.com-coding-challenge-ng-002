'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'FilmStripGalleryController'
  });
}])

.controller('FilmStripGalleryController', function($scope) {
  $scope.property = {
  "property_id": 2757659984,
  "photos": [
    {"href": "images/ld32d4d44-c0s.jpg","description": "An Original!"},
    {"href": "images/ld32d4d44-c1s.jpg","description": "Picture Perfect Wrap Porch"},
    {"href": "images/ld32d4d44-c2s.jpg","description": "Stunning Entry"},
    {"href": "images/ld32d4d44-c3s.jpg","description": "Original Woodwork"},
    {"href": "images/ld32d4d44-c4s.jpg","description": "Dining Room"},
    {"href": "images/ld32d4d44-c5s.jpg","description": "Living Room"},
    {"href": "images/ld32d4d44-c6s.jpg","description": "Modern Kitchen"},
    {"href": "images/ld32d4d44-c7s.jpg","description": "Kitchen"},
    {"href": "images/ld32d4d44-c8s.jpg","description": "Family Room"},
    {"href": "images/ld32d4d44-c9s.jpg","description": "Butler's Pantry"},
    {"href": "images/ld32d4d44-c10s.jpg","description": "Master Bedroom"},
    {"href": "images/ld32d4d44-c11s.jpg","description": "Master Bedroom"},
    {"href": "images/ld32d4d44-c12s.jpg","description": "Master View"},
    {"href": "images/ld32d4d44-c13s.jpg","description": "Master Bath"},
    {"href": "images/ld32d4d44-c14s.jpg","description": "Master Bath"},
    {"href": "images/ld32d4d44-c15s.jpg","description": "Bedroom #2"},
    {"href": "images/ld32d4d44-c16s.jpg","description": "Bedroom #3"},
    {"href": "images/ld32d4d44-c17s.jpg","description": "Bath #2"},
    {"href": "images/ld32d4d44-c18s.jpg","description": "Bedroom #4"},
    {"href": "images/ld32d4d44-c19s.jpg","description": "Kid's Hang Out"},
    {"href": "images/ld32d4d44-c20s.jpg","description": "Powder Bath"},
    {"href": "images/ld32d4d44-c21s.jpg","description": "Rec Room"},
    {"href": "images/ld32d4d44-c22s.jpg","description": "Basement"},
    {"href": "images/ld32d4d44-c23s.jpg","description": "Pool and Pool House"},
    {"href": "images/ld32d4d44-c24s.jpg","description": "Master Deck"},
    {"href": "images/ld32d4d44-c25s.jpg","description": ""},
    {"href": "images/ld32d4d44-c26s.jpg","description": ""},
    {"href": "images/ld32d4d44-c27s.jpg","description": ""},
    {"href": "images/ld32d4d44-c28s.jpg","description": ""},
    {"href": "images/ld32d4d44-c29s.jpg","description": ""},
    {"href": "images/ld32d4d44-c30s.jpg","description": ""},
    {"href": "images/ld32d4d44-c31s.jpg","description": ""},
    {"href": "images/ld32d4d44-c32s.jpg","description": ""},
    {"href": "images/ld32d4d44-c33s.jpg","description": ""},
    {"href": "images/ld32d4d44-c34s.jpg","description": ""},
    {"href": "images/ld32d4d44-c35s.jpg","description": "An unusually long and complex description text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
  ]};

  $scope.current_photo = function (index) {
    var photo = $scope.property.photos[index];
    return {"href": photo.href.replace(/.\.jpg$/,'o.jpg'),"description": photo.description};
  }

});
