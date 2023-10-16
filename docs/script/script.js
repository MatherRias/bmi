function calculate(weight, height) {
    let height_n = (height/100)**2;
    let result = weight/height_n;
    if (result < 18.5) {
        result_text = "Underweight";
        } else if (bmi < 25) {
        result_text = "Normal weight";
        } else if (bmi < 30) {
        result_text = "Overweight (Obesity Class 1)";
        } else if (bmi < 35) {
        result_text = "Overweight (Obesity Class 2)";
        } else if (bmi < 40) {
        result_text = "Overweight (Obesity Class 3, Severe Obesity)";
        } else {
        result_text = "Overweight (Obesity Class 4, Very Severe Obesity)";
        }
    return [result, result_text];
}