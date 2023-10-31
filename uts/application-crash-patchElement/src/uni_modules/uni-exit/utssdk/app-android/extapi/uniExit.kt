package io.dcloud.uniapp.extapi

import uts.sdk.modules.DCloudUniExit.ExitSuccess as UniExitSuccess
import uts.sdk.modules.DCloudUniExit.ExitOptions as UniExitOptions
import uts.sdk.modules.DCloudUniExit.exit as uni_exit

typealias ExitSuccess = UniExitSuccess
typealias ExitOptions = UniExitOptions
val exit = uni_exit
