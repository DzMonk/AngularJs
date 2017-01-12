appctrl.controller('tabCtrl', function($scope, $rootScope, $log, $timeout,
                                       $ionicTabsDelegate, $ionicPopover, $ionicModal, $ionicLoading,
                                       $location, $state,$ionicHistory,
                                       $cordovaNetwork, $cordovaGoogleAnalytics,
                                       CommonService) {
  $log.debug("enter tab ctrl");

  /**
   * 进入前
   */
  $scope.$on('$ionicView.beforeEnter', function() {
    $log.debug("tab ctrl beforeEnter");
  });

  /**
   * 进入后
   */
  $scope.$on('$ionicView.afterEnter', function() {
    $log.debug("tab ctrl afterEnter");
    if (ctrlReinitMap.get('tabCtrl')) {
      ctrlReinitMap.remove('tabCtrl');
      $log.debug("tab ctrl afterEnter init");
      $scope.init();
    }
  });

  /**
   * 弹个警告框
   * @param event
   * @param data 消息内容
   */
  $scope.$on('event.alertm', function(event,data) {
    $log.debug("收到通知：event.alertm,data="+data);
    CommonService.alertm(data).then(function (res) {});
  });
  /**
   * 初始化
   */
  $scope.init=function(){
    $log.debug("tabe ctrl init");

  };
  /**
   * 根据当前tab自动放置页面
   * ex. ng-click="rx('#/tab/Product/'+obj1.productId)"
   * @param src
   */
  $scope.rx=function(src){
    src="R"+pubnowtab+"_"+src.substring(6);
    $scope.jumpPage(src);
  }
  /**
   * 跳转
   * @param uri
   */
  $scope.jumpPage=function(uri) {
    $location.path("/tab/"+uri);
  };
  /**
   * 把xxxController放到ctrlReinitMap中，这样他们未来回到页面时，会重刷数据
   * @param key
   */
  $scope.ctrlMapPut = function(key) {
    ctrlReinitMap.put(key,1);
  };
  /**
   * 后退
   */
  $scope.goBack = function() {
    if ($ionicHistory.backView()) {
      $ionicHistory.goBack();
    }
  }

  $scope.init();
  ctrlReinitMap.remove('tabCtrl');
});
