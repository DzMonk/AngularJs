/**
 * 4位数字版图验码检查
 * @param imgcode
 * @returns {boolean}
 */
function checkImgcode4n(imgcode){
        if((parseInt(imgcode)==imgcode) && imgcode.length==4){
            return true;
        }else{
            return false;
        }
}
/**
 * 手机检查
 * @param phone
 * @returns {boolean}
 */
function checkPhoneNum (phone){
    var ChinaMOBILE = /^1(3[4-9]|5[012789]|8[23478]|4[7]|7[8])\d{8}$/; //移动
    var ChinaUNICOM =/^1(3[0-2]|5[56]|8[56]|4[5]|7[6])\d{8}$/;        //联通
    var ChinaTELECOM =/^(13|15|17|18)\d{9}$/;                        //电信
    var testphone=/^(101234)\d{5}$/;                        //test
    if(ChinaMOBILE.test(phone)|| ChinaUNICOM.test(phone)|| ChinaTELECOM.test(phone) || testphone.test(phone)){
        return true;
    }else{
        return false;
    }
};
/**
 * 邮箱检查
 * @param email
 * @returns {boolean}
 */
function checkEmail (email) {

    // var EmailNum ='^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$';
    var EmailNum = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!EmailNum.test(email)) {
        return false;
    }
    return true;
}
/**
 * 邮编
 * @param zip
 * @returns {boolean}
 */
function checkZip (zip) {
    // var zipNmu ='[1-9]\d{5}(?!\d)';
    var zipNmu = /^[1-9]\d{5}(?!\d)+/;
    if (!zipNmu.test(zip)) {
        return false;
    }
    return true;
}
/**
 * 身份证检查
 * @param idnum
 * @returns {boolean}
 */
function checkIdnum(idnum) {
    var IdnumBA=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    var IdnumWU = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
    if ((!IdnumWU.test(idnum))&& (!IdnumBA.test(idnum))) {
        return false;
    }
    return true;
}

/**
 * 密码检查
 * @param pwd
 * @param repwd
 * @returns {boolean}
 */
function checkPwd (pwd,repwd){
    if(isblank(pwd))
        return false;
    //检验两次的密码是否一致
    return (pwd === repwd);
}