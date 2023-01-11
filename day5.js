numTestCases = parseInt(readline()); // reading num test cases
 
for (var testCaseCount = 0; testCaseCount < numTestCases; testCaseCount++) {
    var inputStr = readline();
    var inputStrLength = inputStr.length;
    var aStr = inputStr[0];
    var secondInd = 2;
    var bStr = inputStr.substring(1, secondInd);
    var cStr = inputStr.substring(secondInd);
    if(aStr == "a" && bStr == "b"){
        secondInd += (cStr.indexOf("a") != -1? cStr.indexOf("a"): Math.max(0, cStr.length - 1));
        bStr = inputStr.substring(1, secondInd);
        cStr = inputStr.substring(secondInd);
    }
    var resultStr = aStr + " " + bStr + " " + cStr;
    // console.log(resultStr);
    print(resultStr);
}