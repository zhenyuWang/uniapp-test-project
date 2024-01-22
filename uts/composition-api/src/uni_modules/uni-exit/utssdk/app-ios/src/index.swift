import DCloudUTSFoundation;
class ExitSuccess : UTSObject {
    var errMsg: String;
    public subscript(_ key: String) -> Any? {
        get {
            return utsSubscriptGetValue(key);
        }
        set {
            switch(key){
                case "errMsg":
                    self.errMsg = try! utsSubscriptCheckValue(newValue);
                default:
                    break;
            }
        }
    }
    init(_ obj: UTSJSONObject) {
        self.errMsg = obj["errMsg"] as! String;
    }
}
typealias ExitSuccessCallback = (_ res: ExitSuccess) -> Void;
typealias ExitFailCallback = (_ res: UniError) -> Void;
typealias ExitCompleteCallback = (_ res: Any) -> Void;
class ExitOptions : UTSObject {
    var success: ExitSuccessCallback?;
    var fail: ExitFailCallback?;
    var complete: ExitCompleteCallback?;
    public subscript(_ key: String) -> Any? {
        get {
            return utsSubscriptGetValue(key);
        }
        set {
            switch(key){
                case "success":
                    self.success = try! utsSubscriptCheckValueIfPresent(newValue);
                case "fail":
                    self.fail = try! utsSubscriptCheckValueIfPresent(newValue);
                case "complete":
                    self.complete = try! utsSubscriptCheckValueIfPresent(newValue);
                default:
                    break;
            }
        }
    }
    init(_ obj: UTSJSONObject) {
        self.success = obj["success"] as! ExitSuccessCallback?;
        self.fail = obj["fail"] as! ExitFailCallback?;
        self.complete = obj["complete"] as! ExitCompleteCallback?;
    }
}
typealias Exit = (_ options: ExitOptions?) -> Void;
var exit: Exit = {
(_ options: ExitOptions?) -> Void in
var err = UniError("uni-exit", 12001, "system not support");
options?.fail?(err);
options?.complete?(err);
};
