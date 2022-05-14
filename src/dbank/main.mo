import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var currentValue: Float = 300;
  currentValue := 300;
  Debug.print(debug_show(currentValue));

  // let id = 116151165; // immutable, works as const from js
  // id := 8888484; 

  // Debug.print(debug_show(id));
  stable var startTime = Time.now();
    startTime := Time.now();
  // Debug.print(debug_show(startTime));


  public func topUp(amount: Float) {  //using public to use candid UI
    currentValue += amount;
  
    // Debug.print(debug_show(currentValue));
  };
  // topUp(); // for manual terminal deploy

  public func withDraw(amount: Float) {
    let tempValue: Float = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Amount too large, current value is less than zero.")
    }
  };

  public query func checkBalance(): async Float {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
  };

}