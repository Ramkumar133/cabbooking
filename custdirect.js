(function(){

    'use strict';
var app = angular.module('DemoApp',[]);
    app.directive('ngcustomdir',function(){

    return {
	
        template: '<h1>TRAVEL ANYWHERE ANYTIME!<br> BOOK A CAB NOWW!!</h1>
                    <p>Get daily Offers and Discounts Over a Range of Categories </p>'
    }
    });
})();