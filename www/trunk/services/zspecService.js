/**
 * 特别的网络服务
 */
appservice
    .service('zspecService', function($resource, $rootScope,$q,$http,$log,ENV) {
        $log.debug("zspecService in");
        //列表
        var list;
		//当前的对象
        var obj;
		//页码信息
        var page = {
            where: '', //条件
            pageNo: 1, //第几页，从1开始
            pageSize:DEFPAGESIZE, //每页多少数量
            hasNextPage: true //是否还有下一页
        };
        return {

        }
    })
