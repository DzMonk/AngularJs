/**
 * 配置路由
 */
app.config(function($stateProvider, $urlRouterProvider,$logProvider,ENV) {
  $logProvider.debugEnabled(ENV.debug);
  console.log("app.config.route");
  $stateProvider
    //菜单
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'views/pub/menu.html'
      ,controller: 'tabCtrl'
    })
    ///////////////////////a1
    //主页
    .state('tab.Wwwhome', {
      url: '/Wwwhome',
      views: {
        'first': {
          controller: 'WwwhomeCtrl',
          templateUrl: 'views/tab_a/Wwwhome.html'

        }
      }
    })
//    测试跳转页
      .state('tab.jump', {
        url: '/jump',
        views: {
          'first': {
            //controller: 'WwwhomeCtrl',
            templateUrl: 'views/tab_a/jump.html'

          }
        }
      })
  $urlRouterProvider.otherwise('/tab/Wwwhome');
});
