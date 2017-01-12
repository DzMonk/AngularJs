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
