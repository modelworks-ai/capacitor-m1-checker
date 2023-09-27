package com.noah.ai;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "M1Checker")
public class M1CheckerPlugin extends Plugin {

    private M1Checker implementation = new M1Checker();

    @PluginMethod
    public void echo(PluginCall call) {
        JSObject result = new JSObject();
        result.put("result", false);
        call.resolve(result);
    }
}
