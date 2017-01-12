/**
 * 各种定制化的服务
 */

appservice
/**
 * http ajax注入
 */
  .factory('sessionInjector', ['$rootScope','$q','Storage', function($rootScope, $q,Storage) {
    return{
      'request': function(config) {
        //console.log("request");
        //config.header.xx=111;
        if(config.params){
          config.params.ver=_ClientInfo.ver;
          var clientInfo=Storage.get(CLIENT_INFO);
          if(clientInfo){
            if(clientInfo.cli)config.params.cli=clientInfo.cli;
            if(clientInfo.openid)config.params.openid=clientInfo.openid;
            if(clientInfo.openidmd5)config.params.openidmd5=clientInfo.openidmd5;
            if(clientInfo.token)config.params.token=clientInfo.token;
          }else{
            config.params.cli=_ClientInfo.cli;
          }
        }
        if(config.headers){
          //改变HEADER会改变请求结构，要服务器支持
          //config.headers["xx"]=111;
          //config.headers.yy=222;
        }
        //console.log(config);
        return config || $q.when(config);
      },
      'requestError': function(rejection) {
        //console.log('requestError:' + rejection);
        return rejection;
      },
      //success -> don't intercept
      'response': function(response) {
        //console.log('response:' + response);
        return  response || $q.when(response);
      },
      //error -> if 401 save the request and broadcast an event
      'responseError': function(response) {
        //console.log('responseError:');
        //console.log( response);
        if (response.status === 401) {
          var deferred = $q.defer(),
            req = {
              config: response.config,
              deferred: deferred
            };
          //$rootScope.requests401.push(req);
          $rootScope.$broadcast('event.NeedLoginException','serv');
          return deferred.promise;
        }
        if (response.status === 406) { //NOT_ACCEPTABLE
          var deferred = $q.defer();
          $rootScope.$broadcast('event.alertm',response.data);
          return deferred.promise;
        }
        return $q.reject(response);
      }
    };
  }])
  //本地存储
  .factory('Storage', function() {
    "use strict";
    return {
      /**
       * 保存对象
       * @param key
       * @param data
       * @returns {*}
       */
      set: function(key, data) {
        return window.localStorage.setItem(key, window.JSON.stringify(data));
      },
      /**
       * 取出对象
       * @param key
       * @returns {*}
       */
      get: function(key) {
        try {
          return window.JSON.parse(window.localStorage.getItem(key));
        } catch(err) {
          console.log("window.JSON.parse.ERR"+ err.name+" ---> "+ err.message+" ---> ");
          console.log(key);
          console.log(window.localStorage.getItem(key));
          return null;
        }
      },
      /**
       * 删除
       * @param key
       * @returns {*}
       */
      remove: function(key) {
        return window.localStorage.removeItem(key);
      },
      /**
       * 清空
       * @returns {*}
       */
      clear: function() {
        return window.localStorage.clear();
      }
    };
  })
  .factory('CommonService', function($http, $rootScope, $ionicPopup, ENV, Storage) {
    return {
      /**
       * 弹警告信息窗口，
       * 使用方法 CommonService.alertm('消息','标题').then(function (res) {});
       * @param msg
       * @param title 可以为空
       * @returns {Object|*}
       */
      alertm: function(msg,title){
        return alertPopup = $ionicPopup.alert({
          title: title ? title : PRJCNAME,
          template: msg ,
          okText:'确定',
          okType: 'button-positive'
        });
      },
    };
  })

  //要求：路由中要有相应的RA/B/C/D_xxx
  //tab.html中，点击TAB，pubnowtab被赋值
  // 自动tab,在链接后面加上之前的ABCD <a href="#/tab/Product/{{11+22}}" auto-tab ></a>
  .directive('autoTab', function($compile) {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        var href=attrs.href;
        href="#/tab/R"+pubnowtab+"_"+href.substring(6);;
        var newele = ele.clone(true);
        newele.attr('href', href);
        newele.attr('ng-href', href);
        ele.replaceWith(newele);
        ele = newele;
        $compile(ele.contents())(scope);
      }
    };
  })
  //埋点，用法
  //<a href="#/tab/my" put-point="key2" ppid="3">{{111+222}}</a>
  //<button put-point="key1" ppid="{{ppp.id}}" ng-click ="nowtabs('D')">按钮{{33+44}}</button>
  .directive('putPoint', function($compile,$timeout,$http,ENV) {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        ele.bind('click', function() {
          $timeout(function() {
            //console.log("putPoint:"+attrs.putPoint+","+attrs.ppid);
            var url =ENV.api+"/putpoint";
            $http({
              method: 'GET',
              url: url,
              params: {key:attrs.putPoint,ppid:attrs.ppid}
            });

          }, 0);
        });
      }
    };
  })
/**
 * 动态编译，可以在html中放置ng-click等
 * see http://stackoverflow.com/questions/18157305/angularjs-compiling-dynamic-html-strings-from-database
 * 使用方法 <div dynamic="obj.msg"></div>
 */
  .directive('dynamic', function ($compile) {
    return {
      restrict: 'A',
      replace: true,
      link: function (scope, ele, attrs) {
        scope.$watch(attrs.dynamic, function(html) {
          ele.html(html);
          $compile(ele.contents())(scope);
        });
      }
    };
  })
  .directive( 'videoView', function ($rootScope, $timeout) {
    return {
      restrict: 'E',
      template: '<div class="video-container"></div>',
      replace: true,
      link: function (scope, element, attrs) {
        function updatePosition() {
          cordova.plugins.phonertc.setVideoView({
            container: element[0],
            local: {
              position: [240, 240],
              size: [50, 50]
            }
          });
        }

        $timeout(updatePosition, 500);
        $rootScope.$on('videoView.updatePosition', updatePosition);
      }
    }
  })

  /*   */
  //使用,1.tabs页面<ion-tabs class="tabs-icon-top tabs-positie {{hideTabs}}> ...</ion-tabs>
  //2.跳转后页面:<ion-view hide-tabs>..</ion-view>
  .directive('hideTabs', function($rootScope) {
    return {
      restrict: 'AE',
      link: function($scope) {
        $rootScope.hideTabs = 'tabs-item-hide';
        $scope.$on('$destroy', function() {
          $rootScope.hideTabs = ' ';
        });
      }
    };
   })
;
appservice
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('sessionInjector');
  }]);

Array.prototype.remove=function(dx) {
  if(isNaN(dx)||dx>this.length) {
    return false;
  }
  for(var i=0,n=0;i<this.length;i++) {
    if(this[i]!=this[dx]) {
      this[n++]=this[i]
    }
  }
  this.length-=1
}
