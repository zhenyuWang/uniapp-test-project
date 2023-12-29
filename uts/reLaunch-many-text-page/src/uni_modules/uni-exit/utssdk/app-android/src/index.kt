package uts.sdk.modules.DCloudUniExit;
import kotlinx.coroutines.async;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Deferred;
import kotlinx.coroutines.Dispatchers;
import io.dcloud.uts.Map;
import io.dcloud.uts.Set;
import io.dcloud.uts.UTSAndroid;
import io.dcloud.uts.*;
import io.dcloud.uniapp.*;
open class ExitSuccess (
    @JsonNotNull
    open var errMsg: String,
) : UTSObject()
typealias ExitSuccessCallback = (res: ExitSuccess) -> Unit;
typealias ExitFailCallback = (res: UniError) -> Unit;
typealias ExitCompleteCallback = (res: Any) -> Unit;
open class ExitOptions (
    open var success: ExitSuccessCallback? = null,
    open var fail: ExitFailCallback? = null,
    open var complete: ExitCompleteCallback? = null,
) : UTSObject()
typealias Exit = (options: ExitOptions?) -> Unit;
val exit: Exit = fun(options: ExitOptions?) {
    var ret = ExitSuccess(errMsg = "exit:ok");
    options?.success?.invoke(ret);
    options?.complete?.invoke(ret);
    UTSAndroid.exit();
}
;
