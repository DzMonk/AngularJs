/**
 * Wwwhome，手机页首页配置详细
 */
appctrl.controller('WwwhomeCtrl', function($scope, $rootScope,$location, $log) {
  $log.debug("enter Wwwhome ctrl");
  /**页面显示的列表*/
  var title='';
  var content='第一课时：基础知识';
  //var items =[];
  var messages={};
  var result=0;
  var menuState={};

  /**
   * 进入前
   */
  $scope.$on('$ionicView.beforeEnter', function() {
    $log.debug("Wwwhome ctrl beforeEnter");
  });
  /**
   * 进入后
   */
  $scope.$on('$ionicView.afterEnter', function() {
    $log.debug("Wwwhome ctrl afterEnter");
    if (ctrlReinitMap.get('WwwhomeCtrl')) {
      ctrlReinitMap.remove('WwwhomeCtrl');
      $log.debug("Wwwhome ctrl afterEnter init");
      $scope.init();
    }
  });
  /**
   * 初始化
   */
  $scope.init=function(){
    //debug 打印西信息
    $log.debug("Wwwhome ctrl init");

    //上面定义var 对象或数据类型
    $scope.title='欢迎进入AngularJs殿堂';
    $scope.content=content;
    $scope.messages=messages;
    $scope.messages.text='第一小节';
    $scope.gretting={text:"Hello!"}

    //定义数组
    $scope.items=[
      {},
      {title:'angular' ,quantity:1,price:10,checkedIt:true,result:result},
      {title:'Ionic' ,quantity:2,price:10,checkedIt:false,result:result},
      {title:'java' ,quantity:3,price:10,checkedIt:true,result:result},
    ];
    $log.debug( $scope.items);
    $scope.remove();
    }

  //watch监视表达式，表达式发生变化，就会回调一个函数
  $scope.add1=function(){
    $scope.items[0]. result=($scope.items[0].quantity)*($scope.items[0].price);
    $scope.items[1]. result=($scope.items[1].quantity)*($scope.items[1].price);
    $scope.items[2]. result=($scope.items[2].quantity)*($scope.items[2].price);
    $scope.items[3]. result=($scope.items[3].quantity)*($scope.items[3].price);
  }
  $scope.watch('result',$scope.add1);

  //增加列表的一组数据
  $scope.insertTxt=function(){
    $scope.items.splice(3,0,{title:'javascript' ,quantity:4,price:10,checkedIt:true,result:result});
    $log.debug( $scope.items);
  }

  //清除列表的一组数据
  $scope.remove=function(index){
    $log.debug("点击删除");
    $scope.items.splice(index,1);

  }

  //显示|隐藏方法
  $scope.menuState=menuState;
  $scope.menuState.show=false;
  $scope.toggleMenu=function() {
    $scope.menuState.show=! $scope.menuState.show;
    $log.debug($scope.menuState.show);
  }
  //定义了一个样式
  $scope.isCs={"color":'green'};

  $scope.init();
  ctrlReinitMap.remove('WwwhomeCtrl');
});
