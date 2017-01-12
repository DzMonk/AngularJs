//
//  AppDelegate+CDVGeTui.h
//  pushnotification
//
//  Created by bjquan on 16/3/8.
//
//

#import "AppDelegate.h"
#import <objc/runtime.h>

#import "CDVGeTui.h"
#import "GeTuiSdk.h"  // GetuiSdk头文件，需要使用的地方需要添加此代码

#import <AudioToolbox/AudioToolbox.h>
#import <AVFoundation/AVFoundation.h>


/// 个推开发者网站中申请App时，注册的AppId、AppKey、AppSecret  【医药一键通】
/**/
#define kGtAppId           @"bti0OEK4EI9ibdlG54FYi2"
#define kGtAppKey          @"9nmOAl7jYY7ij4VZMPMvT"
#define kGtAppSecret       @"hADyK1hIi978rXAfvffQr7"

/*
//测试版
#define kGtAppId           @"STcbHrbr3I8CLnpKoLIVb5"
#define kGtAppKey          @"IsUYtW4VH2Aal3BeMtF7HA"
#define kGtAppSecret       @"1DqrZjSQ5eAuF6I6mEMjW"
*/

@interface AppDelegate (CDVGeTui)<GeTuiSdkDelegate,AVAudioPlayerDelegate,UIAlertViewDelegate>

@end
