/**
 * 配置文件，项目名称出现在这里及index.html中的<body ng-app>标签中
 * 会员版与B版共用
 *
 */
var app=angular.module('zionic', ['ionic', 'ngCordova', 'ngResource',
    'zionic.config', 'zionic.services', 'zionic.controllers','btford.socket-io'
]);
var appctrl=angular.module('zionic.controllers', []);
var appconfig=angular.module("zionic.config", []);
var appservice=angular.module('zionic.services', []);
/**
 * ENV环境变量设置
 */
appconfig.constant("ENV", {
    // "name": "production",
    "accessToken": '',
    "debug": true,
    "www": abase,
    "api": restbase,
    // "api": "http://localhost:3000/api/v1",
    "appleId": 'id981408438',
    'version':'1.0.1'
})
;
/**
 * 默认的头
 * @type {{title: boolean, view: defaultHeader, back: boolean, logout: boolean, positison: boolean, positisontext: string}}
 */
var defaultHeader={
    title: false,
    view: this,
    back: false,
    logout:false,
    positison: true,
    positisontext:''
};
/**需要重新init的Controller的Map*/
var ctrlReinitMap=new HashMap();

///////////常用固定值
var wxConfig={
    appId:'', // 必填，公众号的唯一标识
    timestamp: null, // 必填，生成签名的时间戳
    noncestr: null, // 必填，生成签名的随机串
    signature:null// 必填，签名，见附录1
};
/**项目中文名称*/
var PRJCNAME="AngulatJs";
/**默认一页数量*/
var DEFPAGESIZE=20;


//////////////存本地的变量名
/**List的查询where.hql就是XxxListQueryWhere，比如：ProductTypeLinkProductListQueryWhere，不再一一列举
 * ex.Storage.set("ProductTypeLinkProductList"+"QueryWhere","");
 * */
console.log("Config Done");



