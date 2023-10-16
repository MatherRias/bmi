function calculate(weight, height) {
    let height_n = (height/100)**2;
    let result_cal = weight/height_n;
    if (result < 18.5) {
        result = "Your result is " + result_cal + "\nUnderweight";
      } else if (bmi < 25) {
        result = "Your result is " + result_cal + "\nNormal weight";
      } else if (bmi < 30) {
        result = "Your result is " + result_cal + "\nOverweight (Obesity Class 1)";
      } else if (bmi < 35) {
        result = "Your result is " + result_cal + "\nOverweight (Obesity Class 2)";
      } else if (bmi < 40) {
        result = "Your result is " + result_cal + "\nOverweight (Obesity Class 3, Severe Obesity)";
      } else {
        result = "Your result is " + result_cal + "\nOverweight (Obesity Class 4, Very Severe Obesity)";
      }
    return result;
}
// I will fix this code in the future