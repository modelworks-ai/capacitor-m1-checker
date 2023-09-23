import Foundation

@objc public class M1Checker: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
