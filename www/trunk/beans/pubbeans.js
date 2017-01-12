/**微信H5支付请求*/
var _WaJsapiPaymentParam={appid:"",timestamp1:0,noncestr:"",package1:"",signtype:"MD5",paysign:""}
//页码信息
var _Page = {
    where: '', //条件
    pageNo: 1, //第几页，从1开始
    pageSize:DEFPAGESIZE, //每页多少数量
    hasNextPage: true, //是否还有下一页
    cmd: '' //命令
};

/**首页顶上用户选择的地址*/
var selectAddr={
    memberId: null, //Integer 消费者会员
    watersiteId: null, //Integer 水站
    itype: null, //Integer 类型
    lng: null, //Double 经度
    lat: null, //Double 纬度
    poi: null, //String 兴趣点
    address: null, //String 收货地址
    manname: null, //String 联系人
    mobile: null, //String 手机号
    township:null,//街道
    type:null,//选择类型：map,address
    obj3:null
}