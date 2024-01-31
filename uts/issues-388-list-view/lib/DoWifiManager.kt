package io.dcloud.feature.weex.extend.uts;
import android.Manifest;
import android.content.pm.PackageManager;
import android.net.wifi.WifiManager;
import android.net.wifi.ScanResult;
import android.content.BroadcastReceiver;
import androidx.core.app.ActivityCompat;
import android.app.Activity;
import android.widget.Toast;
import com.alibaba.fastjson.JSONObject;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiConfiguration;
import android.util.Log
import com.taobao.weex.bridge.JSCallback;


open class Global {
    companion object {
        var mReceiver: CustomBroadcastReceiver? = null;
        var scanList: MutableList<DoWifiInfo> = mutableListOf();
        var WIFI_AUTH_OPEN: String = "";
        var WIFI_AUTH_ROAM: String = "[ESS]";
        var getWifiListCallbackList: MutableList<JSCallback> = mutableListOf();
    }
}
fun preparePermissionImpl(activity: Activity) {
    var requestCode = 1001;
    var permissionWifi = arrayOf("android.permission.ACCESS_FINE_LOCATION");
    Log.d("dqqdo","preparePermissionImpl   ===");
    if (ActivityCompat.checkSelfPermission(activity, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
        if (ActivityCompat.shouldShowRequestPermissionRationale(activity, Manifest.permission.ACCESS_FINE_LOCATION)) {
            Toast.makeText(activity, "请开通相关权限，否则无法正常使用本应用！", Toast.LENGTH_SHORT).show();
        }
        ActivityCompat.requestPermissions(activity, permissionWifi, requestCode);
    }
     else {}
}
open class CustomBroadcastReceiver : BroadcastReceiver {
    open var mWifiManager: WifiManager? = null;
    constructor(wifiManager: WifiManager){
        this.mWifiManager = wifiManager;
    }
    override fun onReceive(context: Context, intent: Intent): Unit {
        if (intent.action == WifiManager.SCAN_RESULTS_AVAILABLE_ACTION) {
            var results: List<ScanResult> = mWifiManager!!.scanResults;
            if (results != null) {
                Global.scanList.clear();
                for(scanResult in results){
                    if (scanResult.SSID == null) {
                        continue;
                    }
                    Global.scanList.add(DoWifiInfo(scanResult));
                }
                for(perCallback in Global.getWifiListCallbackList){
                    val data = JSONObject();
                    data["code"] = "success";
                    var mainJsonStr = Global.scanList;
                    data["data"] = mainJsonStr;
                    perCallback.invokeAndKeepAlive(data);
                }
            }
        }
    }
}
fun onGetWifiListImpl(callback: JSCallback) {
    Global.getWifiListCallbackList.add(callback);
}
fun initWifiImpl(wifiManager: WifiManager, activity: Activity) {
    if (Global.mReceiver == null) {
        Global.mReceiver = CustomBroadcastReceiver(wifiManager);
        var filter = IntentFilter(WifiManager.SCAN_RESULTS_AVAILABLE_ACTION);
        activity.registerReceiver(Global.mReceiver, filter);
    }
    Global.getWifiListCallbackList = mutableListOf();
    var scanResult = wifiManager.startScan();
}
fun getWifiListImpl(wifiManager: WifiManager, activity: Activity) {
    if (Global.mReceiver == null) {
        Global.mReceiver = CustomBroadcastReceiver(wifiManager);
        var filter = IntentFilter(WifiManager.SCAN_RESULTS_AVAILABLE_ACTION);
        activity.registerReceiver(Global.mReceiver, filter);
    }
    wifiManager.startScan();
}
fun getConnectWifiImpl(wifiManager: WifiManager, activity: Activity): ConnectInfo {
    var wifiInfo: WifiInfo = wifiManager!!.connectionInfo;
    var connectInfo = ConnectInfo(wifiInfo);
    return connectInfo;
}
fun connectWifiImpl(wifiManager: WifiManager, ssid: String, password: String): Boolean {
    var config = WifiConfiguration();
    config.SSID = "\"" + ssid + "\"";
    config.preSharedKey = "\"" + password + "\"";
    config.hiddenSSID = true;
    config.status = WifiConfiguration.Status.ENABLED;
    config.allowedGroupCiphers.set(WifiConfiguration.GroupCipher.TKIP);
    config.allowedGroupCiphers.set(WifiConfiguration.GroupCipher.CCMP);
    config.allowedPairwiseCiphers.set(WifiConfiguration.PairwiseCipher.TKIP);
    config.allowedPairwiseCiphers.set(WifiConfiguration.PairwiseCipher.CCMP);
    config.allowedKeyManagement.set(WifiConfiguration.KeyMgmt.NONE);
    config.allowedProtocols.set(WifiConfiguration.Protocol.WPA);
    var netId: Int = wifiManager!!.addNetwork(config);
    var ret: Boolean = wifiManager!!.enableNetwork(netId, true);
    return ret;
}
open class ConnectInfo {
    open var SSID: String = "";
    open var BSSID: String = "";
    open var signalStrength: Int = 0;
    open var frequency: Int = 0;
    constructor(connectInfo: WifiInfo){
        this.BSSID = connectInfo.bssid;
        this.SSID = connectInfo.ssid;
        this.signalStrength = connectInfo.linkSpeed;
        this.frequency = connectInfo.frequency;
    }
}
open class DoWifiInfo {
    open var SSID: String = "";
    open var BSSID: String = "";
    open var secure: Boolean = false;
    open var signalStrength: Int = 0;
    open var frequency: Int = 0;
    constructor(scanResult: ScanResult){
        this.BSSID = scanResult.BSSID;
        this.SSID = scanResult.SSID;
        this.signalStrength = scanResult.level;
        this.frequency = scanResult.frequency;
        this.secure = false;
        var capabilities = scanResult.capabilities.trim();
        if (capabilities != null && (capabilities.equals(Global.WIFI_AUTH_OPEN) || capabilities.equals(Global.WIFI_AUTH_ROAM))) {
            this.secure = false;
        }
         else {
            this.secure = true;
        }
    }
}
