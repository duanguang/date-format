/**
 * Created by duanguang on 2017/2/22.
 */
var hash=require('object-hash');

var RouteStateStorageKey = "@@route_state";
var MaxRouteStateStorageCount = 2;

exports.ROUTE_STATE_CHANGE = "@routeState/ROUTE_STATE_CHANGE";

var RouteStateInitAction = 'INIT';
var RouteStatePushAction = 'PUSH';
var RouteStatePopAction = 'POP';
var RouteStateReplaceAction = 'REPLACE';

var topPath=function (state) {
    return state.topPath;
};

var RouteStateManage=(function () {
    function RouteStateManage(storage) {
        this.storage = storage;
        this.routeStates = [];
        this.locationKeys = [];
    }
    RouteStateManage.prototype.init=function (history,store) {
        var _this=this;
        history.listenBefore(function (location,callback) {
            if(location.state&&topPath(location.state)){
                
            }
        })
    }
})
