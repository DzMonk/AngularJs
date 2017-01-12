
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //桥接完成
////		navigator.splashscreen.hide();
//        umengAnalyticsPlugin.init();
//        umengAnalyticsPlugin.setDebugMode(true);
//        umengUpdatePlugin.umengUpdate();
	    //注意，这段代码是应用退出前保存统计数据，请在退出应用前调用
        //window.plugins.umengAnalyticsPlugin.onKillProcess();
    },

};

app.initialize();
