/**
 * Created by taox on 15-4-28.
 */
"use strict";
describe('ajsDemo controllers', function () {

  describe('View2Ctrl', function () {
    var scope,cookieStore,ctrl;
    beforeEach(module('demoApp'));
    beforeEach(module('ngCookies'));
    beforeEach(inject(function($rootScope, $controller,$cookieStore){
      scope = $rootScope.$new();
      cookieStore = $cookieStore;
      ctrl = $controller('HomeCtrl',{$scope:scope,$cookieStore:$cookieStore});
    }));
    it('karamValue equal true',function(){
      expect(scope.karamValue).toEqual(true);
    })
  });
});


