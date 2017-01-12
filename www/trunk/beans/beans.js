/**医患关系*/
var _Memberdoctor={
	statusDm: null, //Integer 关系
	itypeFirst: null, //Integer 是否为首推
	itype: null, //Integer 医生类型
	memberId: null, //Integer 患者
	doctorId: null, //Integer 医生
	countPrescription: null, //Integer 处方数量
	countOrderr: null, //Double 消费金额
	mname: null, //String 会员姓名
	dname: null, //String 医生姓名
	productchannelId: null, //Integer 医科目录
	mmsgnotread: null, //Integer 会员未读消息
	dmsgnotread: null, //Integer 医生未读消息
    obj1:null,
    obj2:null,
    obj3:null
}
/**医生的药架*/
var _DoctorProduct={
	doctorId: null, //Integer 医生
	productId: null, //Integer 商品
    obj1:null,
    obj2:null,
    obj3:null
}
/**医患聊天记录*/
var _Dmmsg={
	readed: null, //Integer 是否读过
	fromto: null, //Integer 发送接收
	memberId: null, //Integer 会员
	doctorId: null, //Integer 医生
	productId: null, //Integer 产品
	msg: null, //String 消息内容
    obj1:null,
    obj2:null,
    obj3:null
}
/**药师患者聊天记录*/
var _Dgmmsg={
	readed: null, //Integer 是否读过
	fromto: null, //Integer 发送接收
	memberId: null, //Integer 会员
	druggistId: null, //Integer 药师
	productId: null, //Integer 产品
	msg: null, //String 消息内容
    obj1:null,
    obj2:null,
    obj3:null
}
/**实体药店*/
var _Drugstore={
	areaid: null, //Integer 地区
	cname: null, //String 药房名称
	addr: null, //String 药房地址
	tele: null, //String 药房电话
	attr: null, //String 药房性质
	docname: null, //String 咨询药师姓名
	doctele: null, //String 咨询药师电话
	docqq: null, //String 药房咨询QQ
	centerlng: null, //Double 经度lng
	centerlat: null, //Double 维度lat
	img1: null, //String 图1
	img2: null, //String 图2
    obj1:null,
    obj2:null,
    obj3:null
}
/**医院*/
var _Hospital={
	areaid: null, //Integer 地区
	cname: null, //String 名称
	addr: null, //String 地址
    obj1:null,
    obj2:null,
    obj3:null
}
/**手机页首页配置*/
var _Wwwhome={
	logo: null, //String 图标
	sharetxt: null, //String 分享转发说明
	headimg1: null, //String 图1
	headimgtxt1: null, //String 图说明1
	headimglink1: null, //String 图链接1
	headimg2: null, //String 图2
	headimgtxt2: null, //String 图说明2
	headimglink2: null, //String 图链接2
	headimg3: null, //String 图3
	headimgtxt3: null, //String 图说明3
	headimglink3: null, //String 图链接3
    obj1:null,
    obj2:null,
    obj3:null
}
/**商品*/
var _Product={
	gmtRelease: null, //Date 发布时间
	statusApplyPassRefuse: null, //Integer 状态
	statusRecipe: null, //Integer 是否处方药
	statusUsed: null, //Integer 使用方法
	usemount: null, //String 用法用量
	productchannelId: null, //Integer 商品目录
	manufacturerId: null, //Integer 厂商产地
	priority: null, //Integer 排列顺序
	productno: null, //String 商品编号
	title: null, //String 商品名
	commonname: null, //String 通用名
	allowno: null, //String 批准文号
	productstyle: null, //String 规格型号
	img1: null, //String 图1
	img2: null, //String 图2
	img3: null, //String 图3
	img4: null, //String 图4
	img5: null, //String 图5
	img6: null, //String 图6
	imgbarcode: null, //String 条码
	hittimes: null, //Integer 点击次数
	buytimes: null, //Integer 购买次数
	punit: null, //Integer 商品单位
	marketprice: null, //Double 市场价
	price: null, //Double 优惠价
	carriagePrice: null, //Double 运费
	store: null, //Integer 库存
	intro: null, //String 功能主治
	genurl: null, //String 生成地址
    obj1:null,
    obj2:null,
    obj3:null
}
/**商品详细*/
var _ProductExtTxt={
	txt: null, //String 详细介绍
    obj1:null,
    obj2:null,
    obj3:null
}
/**商品目录*/
var _Productchannel={
	channelName: null, //String 名称
	statusValidOrNot: null, //Integer 状态
	parentid: null, //Integer 父ID
	priority: null, //Integer 排列顺序
	childrennum: null, //Integer 孩子数量
	family: null, //String 祖先
	icon: null, //String 图标名称
	img: null, //String 图
	genurl: null, //String 生成地址
    obj1:null,
    obj2:null,
    obj3:null
}
/**药品生产厂家*/
var _Manufacturer={
	statusValidOrNot: null, //Integer 状态
	name: null, //String 名称
	img: null, //String 图
	idbiz: null, //String 营业执照号
	contentname: null, //String 联系人
	tele: null, //String 联系电话
	fax: null, //String 传真
	mobile: null, //String 手机号
    obj1:null,
    obj2:null,
    obj3:null
}
/**商品类型*/
var _ProductType={
	ckey: null, //String 关键字
	channelName: null, //String 名称
	statusValidOrNot: null, //Integer 状态
	parentid: null, //Integer 父ID
	priority: null, //Integer 排列顺序
	childrennum: null, //Integer 孩子数量
	family: null, //String 祖先
	genurl: null, //String 生成地址
	icon: null, //String 图标名称
	img: null, //String 图
    obj1:null,
    obj2:null,
    obj3:null
}
/**商品类型包含商品*/
var _ProductTypeLinkProduct={
	productId: null, //Integer 商品ID
	productTypeId: null, //Integer 商品类型ID
	priority: null, //Integer 排列顺序
	statusValidOrNot: null, //Integer 状态
    obj1:null,
    obj2:null,
    obj3:null
}
/**意见建议*/
var _Suggestion={
	memberId: null, //Integer 消费者会员
	cadminId: null, //Integer 处理员
	detail: null, //String 内容
	mobile: null, //String 手机号
	cmemo: null, //String 备注说明
    obj1:null,
    obj2:null,
    obj3:null
}
/**账号信息修改*/
var _User={
	status: null, //Integer 状态
	roleId: null, //Integer 角色
	username: null, //String 账号
	password: null, //String 密码
	nickname: null, //String 昵称
	userId: null, //Integer 隶属于
	openid: null, //String 微信openid
	userobj: null, //String 类型对象
	pmtmap: null, //String 权限列表
	objmap: null, //String 拥有的对象
	openidmd5: null, //String 微信openidMd5
	token: null, //String token
    obj1:null,
    obj2:null,
    obj3:null
}
/**个人会员*/
var _Member={
	name: null, //String 呢称
	img1: null, //String 头像
	age: null, //Integer 年纪
	usersex: null, //Integer 用户性别
	idtype: null, //Integer 证件类型
	idnum: null, //String 证件号码
	realname: null, //String 姓名
	mobile: null, //String 手机
	zip: null, //String 邮编
	addr: null, //String 地址
	email: null, //String 电子邮件
	realname1: null, //String 其它联系人姓名
	mobile1: null, //String 其它联系人手机
	doctorId: null, //Integer 首推荐医生
	countPrescription: null, //Integer 总处方数量
	countOrderr: null, //Double 总消费金额
    obj1:null,
    obj2:null,
    obj3:null
}
/**医生会员*/
var _Doctor={
	productchannelId: null, //Integer 医科目录
	age: null, //Integer 年纪
	img1: null, //String 头像
	name: null, //String 姓名
	hospitalId: null, //Integer 所在医院
	dlevel: null, //Integer 职称
	usersex: null, //Integer 用户性别
	idtype: null, //Integer 证件类型
	idnum: null, //String 证件号码
	zip: null, //String 邮编
	addr: null, //String 地址
	company: null, //String 工作单位
	mobile: null, //String 手机
	tele: null, //String 座机
	email: null, //String 电子邮件
	itype: null, //Integer 医生类型
	countPrescription: null, //Integer 总处方数量
	countOrderr: null, //Double 总消费金额
	qrimg: null, //String 二维码
	sellerId: null, //Integer 所属业务员
	wasmy: null, //Integer 我的推荐医生id
    obj1:null,
    obj2:null,
    obj3:null
}
/**药剂师*/
var _Druggist={
	licenseno: null, //String 执照号码
	img1: null, //String 执照照片
	img2: null, //String 头像
	name: null, //String 姓名
	dlevel: null, //Integer 职称
	usersex: null, //Integer 用户性别
	idtype: null, //Integer 证件类型
	idnum: null, //String 证件号码
	zip: null, //String 邮编
	addr: null, //String 地址
	company: null, //String 工作单位
	mobile: null, //String 手机
	tele: null, //String 座机
	email: null, //String 电子邮件
    obj1:null,
    obj2:null,
    obj3:null
}
/**业务员*/
var _Seller={
	dlevel: null, //Integer 级别
	name: null, //String 姓名
	idcard: null, //String 身份证号
	age: null, //Integer 年龄
	usersex: null, //String 性别
	gmtIn: null, //Date 入司时间
	gmtWork: null, //Date 就职时间(合作时间)
	area: null, //String 所在区域
	mmoney: null, //Double 直接销售总额
	mmoneyteam: null, //Double 下属团队销售总额
	mmoneyall: null, //Double 总销售金额
	parentid: null, //Integer 上级
	priority: null, //Integer 排列顺序
	childrennum: null, //Integer 孩子数量
	family: null, //String 祖先
	qrimg: null, //String 二维码
    obj1:null,
    obj2:null,
    obj3:null
}
/**购物车*/
var _Cart={
	memberId: null, //Integer 消费者会员
	productId: null, //Integer 产品
	num: null, //Integer 数量
	price: null, //Double 单价
	sumprice: null, //Double 总价
    obj1:null,
    obj2:null,
    obj3:null
}
/**订单*/
var _Orderr={
  gmtPay: null, //Date 支付时间
  gmtSent: null, //Date 发货时间
  gmtRecv: null, //Date 完成时间
  iotype: null, //Integer 开单类型
  status: null, //Integer 支付状态
  statusgoods: null, //Integer 收发货状态
  itypeCarriage: null, //Integer 提货方式
  itypePay: null, //Integer 支付方式
  itypeBoil: null, //Integer 煎药方式
  sn: null, //Long 订单号
  memberId: null, //Integer 会员
  name: null, //String 姓名
  mobile: null, //String 手机
  sumprice: null, //Double 总价
  title: null, //String 商品名
  img1: null, //String 图1
  drugstoreId: null, //Integer 取药点
  doccheck: null, //String 复核药师
  docmake: null, //String 配药药师
  doctorWr: null, //Integer 开药医生
  doctorId: null, //Integer 首推荐医生
  sellerId: null, //Integer 所属业务员
  operId: null, //Integer 取药操作员
  productnums: null, //Integer 商品数量
  userAddrId: null, //Integer 消费者收货地址
  diagnose: null, //String 诊断
  eachnum:null,// 贴数
  pomotionticketnums: null, //Integer 可用优惠券数量
  listorderrdetail: null, //String 订单详细列表
  paywxh5: null, //String 微信支付H5对象
  obj1:null,
  obj2:null,
  obj3:null
}
/**订单*/
var _OrderrFinished={
	gmtPay: null, //Date 支付时间
	iotype: null, //Integer 开单类型
	status: null, //Integer 支付状态
	statusgoods: null, //Integer 收发货状态
	statusCarriageType: null, //Integer 提货方式
	memberId: null, //Integer 会员
	sumprice: null, //Double 总价
	title: null, //String 商品名
	img1: null, //String 图1
	drugstoreId: null, //Integer 取药点
	doctorId: null, //Integer 推荐医生
	sellerId: null, //Integer 所属业务员
	operId: null, //Integer 取药操作员
	productnums: null, //Integer 商品数量
	diagnose: null, //String 诊断
	pomotionticketnums: null, //Integer 可用优惠券数量
	listorderrdetail: null, //String 订单详细列表
	paywxh5: null, //String 微信支付H5对象
    obj1:null,
    obj2:null,
    obj3:null
}
/**订单详细*/
var _Orderrdetail={
	gmtSent: null, //Date 发货时间
	gmtRecv: null, //Date 收货时间
	orderrId: null, //Integer 订单号
	iotype: null, //Integer 开单类型
	status: null, //Integer 支付状态
	statusgoods: null, //Integer 收发货状态
	statuscount: null, //Integer 统计状态
  itypeUse:null,//Integer用法
	memberId: null, //Integer 会员
	doctorId: null, //Integer 推荐医生
	productId: null, //Integer 产品
	title: null, //String 商品名
	manufacturerId: null, //Integer 厂商产地
	productstyle: null, //String 规格型号
	img1: null, //String 图1
	price: null, //Double 单价
	num: null, //Integer 数量
	sumprice: null, //Double 总价
	usemethord: null, //String 用药方法
	otherdetail: null, //String 医嘱
	usemount: null, //String 用法用量
    obj1:null,
    obj2:null,
    obj3:null
}
/**订单详细*/
var _OrderrdetailFinished={
	gmtSent: null, //Date 发货时间
	gmtRecv: null, //Date 收货时间
	orderrId: null, //Integer 订单号
	iotype: null, //Integer 开单类型
	status: null, //Integer 支付状态
	statusgoods: null, //Integer 收发货状态
	statuscount: null, //Integer 统计状态
	memberId: null, //Integer 会员
	doctorId: null, //Integer 推荐医生
	productId: null, //Integer 产品
	title: null, //String 商品名
	manufacturerId: null, //Integer 厂商产地
	productstyle: null, //String 规格型号
	img1: null, //String 图1
	price: null, //Double 单价
	num: null, //Integer 数量
	sumprice: null, //Double 总价
	usemethord: null, //String 用药方法
	otherdetail: null, //String 医嘱
	usemount: null, //String 用法用量
    obj1:null,
    obj2:null,
    obj3:null
}
