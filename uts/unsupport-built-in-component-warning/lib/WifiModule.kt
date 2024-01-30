package io.dcloud.feature.weex.extend.uts;

import android.content.Context
import android.net.wifi.WifiManager
import android.util.Log
import com.alibaba.fastjson.JSON
import com.alibaba.fastjson.JSONObject
import com.taobao.weex.WXSDKInstance
import com.taobao.weex.bridge.JSCallback
import io.dcloud.feature.uniapp.AbsSDKInstance
import io.dcloud.feature.uniapp.annotation.UniJSMethod
import io.dcloud.feature.uniapp.bridge.UniJSCallback
import io.dcloud.feature.weex.WeexInstanceMgr


class RegisterOptions {

    class FamilyInfo{
        var father:String = "0";
        var mother:String = "0"
    }

    lateinit var familyInfo:FamilyInfo;

    var age:Int = 0;
    lateinit var name:String;

    lateinit var success:UTSCallback;
    lateinit var fail:UTSCallback;

    lateinit var anonymousCallback:UTSCallback;


    operator fun invoke(vararg args: Any) {
        // 发送给前端对应的时间
        var ret = JSONObject();
        anonymousCallback.invoke(ret)
    }

}




open class WifiModule : UTSModuleDelegate {


    override lateinit var mUniSDKInstance: AbsSDKInstance;
    override lateinit var mWXSDKInstance: WXSDKInstance;
    override lateinit var moduleRegister:UTSModuleRegister;



    @UniJSMethod
    open fun preparePermission(options: RegisterOptions,callback:UTSCallback) {

        Log.d("dqqdo","thread:  " + Thread.currentThread().name);
        var hostWebview = WeexInstanceMgr.self().findWebview(mWXSDKInstance);
        preparePermissionImpl(hostWebview.getActivity());

        Log.d("dqqdo","options:  $options");


        var ret = object : UtsJSONObject() {
            var name = "zhangsan"
            var age = 1
        }

        ret["code"] = "1001";
        options.familyInfo.father = "AAA";
        ret["family"] = options.familyInfo
//        ret.set("code","1002");

        options.success(ret)
        ret.age = 35;
        options.fail(ret)

        callback("错误元");
    }




    override fun onActivityStart() {
        Log.d("dqqdo","onActivityStart")
    }

    override fun onActivityPause() {
        Log.d("dqqdo","onActivityPause")
    }

    override fun onActivityResume() {
        Log.d("dqqdo","onActivityResume")
    }

    override fun onActivityStop() {
        Log.d("dqqdo","onActivityStop")
    }


    @UniJSMethod
    open fun startWifi(options: JSONObject, callback: UniJSCallback?) {
        var hostWebview = WeexInstanceMgr.self().findWebview(mWXSDKInstance);
        var wifiManager: WifiManager = hostWebview.getActivity().getApplicationContext().getSystemService(Context.WIFI_SERVICE) as WifiManager;
        initWifiImpl(wifiManager, hostWebview.getActivity());
        if (callback != null) {
            val data = JSONObject();
            data["code"] = "success";
            callback.invoke(data);
        }
    }


    open fun getWifiList(options: JSONObject, callback: UniJSCallback?) {
        if (callback != null) {
            val data = JSONObject();
            data["code"] = "success";
            var hostWebview = WeexInstanceMgr.self().findWebview(mWXSDKInstance);
            var wifiManager: WifiManager = hostWebview.getActivity().getApplicationContext().getSystemService(Context.WIFI_SERVICE) as WifiManager;
            getWifiListImpl(wifiManager, hostWebview.getActivity());
            callback.invoke(data);
        }
    }


    open fun getConnectWifi(options: JSONObject, callback: UniJSCallback?) {
        if (callback != null) {
            val data = JSONObject();
            data["code"] = "success";
            var hostWebview = WeexInstanceMgr.self().findWebview(mWXSDKInstance);
            var wifiManager: WifiManager = hostWebview.getActivity().getApplicationContext().getSystemService(Context.WIFI_SERVICE) as WifiManager;
            var wifi = getConnectWifiImpl(wifiManager, hostWebview.getActivity());
            var mainJsonStr = wifi;
            data["data"] = mainJsonStr;
            callback.invoke(data);
        }
    }


    open fun onGetWifiList(callback: JSCallback) {
        onGetWifiListImpl(callback);
    }
    companion object {
        var REQUEST_CODE = 1000;
    }


}
