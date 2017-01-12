/**是否在微信上运行*/
var sysjsname="bjq";
//全局配置
var global={
	//WEBSITE:"http://www.zjjnyd.com",

    //WEBSITE:"http://192.168.0.32",
	//WEBSITE:"http://bjq1.banjingquan.com",
	WEBSITE:"http://testa11.maykeys.com",
	//WEBSITE:"http://192.168.0.158",
	//WEBSITE:"http://localhost/dfyc",
	userId:''
}
/**
 * 客户端信息对象，此对象本身是个模板，实例化后会进行本地保存，不同类型客户端请修改cli
 * @type {{ver: number, cli: number, openid: string, openidmd5: string, token: string}}
 * @private
 */
var _ClientInfo=
{
    /**客户端版本号*/
    ver:1,
    /**客户端类型0/NULL为H5,1安卓,2苹果,3微信*/
    cli:0,
    /**微信openid*/
    openid:'',
    /**微信openidMd5*/
    openidmd5:'',
    /**客户token*/
    token:''
};
/**服务器base，遇到图片、资源时，会使用这个，表中图地址会包括sysname*/
var hbase=global.WEBSITE;

var hbases={
    "user":"http://user1.zjjnyd.com",
    "weix":"http://weix1.zjjnyd.com",
    "so":"http://so1.zjjnyd.com",
    "bb":"http://bb1.zjjnyd.com",
    "gxb":global.WEBSITE
};

/**网站base，相对路径，常用于后台js*/
var base="/"+sysjsname;
/**网站base，绝对路径，常用于客户端js*/
var wbase=global.WEBSITE+"/"+sysjsname;
/**ajax 访问base http://aa.bb.cc/pp */
var abase=wbase+"/www";
/**rest 访问base http://aa.bb.cc/pp */
var restbase=wbase+"/rest";
/**用户资源base*/
var ufbase=wbase+"/userfiles";
/**一些静态图的图床*/
//var imgbase="http://120.27.129.111";
var imgbase="http://testa1.maykeys.com";


var userSiteUrl=wbase;
//var userSiteUrl="http://xxx.zjca.com.cn/user";
//var base="/"+sysjsname
//是否检查浏览器是否为微信;
var isCheckBrowserWx=false;
//document.domain="banjingquan.com";
