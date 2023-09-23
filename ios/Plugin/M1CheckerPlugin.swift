import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(M1CheckerPlugin)
public class M1CheckerPlugin: CAPPlugin {
    private let implementation = M1Checker()

    @objc func runningOnM1(_ call: CAPPluginCall) {
        call.resolve(["result" : implementation.runningOnM1()])
    }
}
