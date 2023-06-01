function bmiCalculator (weight, height) {
    var bmiValue = Math.round(weight / Math.pow(height, 2));
    var conclusion = `Your BMI is ${bmiValue}`;
    if (bmiValue < 18.5) {
        conclusion += ", so you are underweight."
    } else if (bmiValue < 25) {
        conclusion += ", so you have a normal weight."
    } else {
        conclusion += ", so you are overweight."
    }
    return conclusion;
}
