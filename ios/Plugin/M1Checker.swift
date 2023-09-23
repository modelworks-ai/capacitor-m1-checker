import Foundation

@objc public class M1Checker: NSObject {
    @objc public func runningOnM1() -> Bool {
        var isiOSAppOnMac = false
        if #available(iOS 14.0, *) {
            isiOSAppOnMac = ProcessInfo.processInfo.isiOSAppOnMac
        }
        return isiOSAppOnMac
    }
}
