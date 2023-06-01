function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }
    
    var res = [0, 1];
    for (var i = 2; i < n; i++) {
        res.push(res[i-2] + res[i-1]);
    }
    //Return an array of fibonacci numbers starting from 0.
    return res;
//Do NOT change any of the code below 👇
}

