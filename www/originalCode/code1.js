/**
 * Created by Dz on 2017/1/4.
 */
var myAPPModule=angular.module('myApp', []);

myAPPModule.controller('code1Controller',function($scope){
    var message={};
    message.text='��ã�С����';
    $scope.message=message;

});