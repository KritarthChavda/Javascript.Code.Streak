
/*var numTestCases = parseInt(readline()); // reading num test cases
 
for (var testCaseCount = 0; testCaseCount < numTestCases; testCaseCount++) {
    var numEmployees = parseInt(readline());
    var employeeClaimArray = readline().split(" ").map(value => parseInt(value));
 
    employeeClaimArray.sort((a,b) => (parseInt(a) - parseInt(b)));
 
    var setCount = 0;
    for(var index = 0 ; index < (employeeClaimArray.length - 1); index++){
        if(employeeClaimArray[index] <= index && employeeClaimArray[index + 1] > (index + 1)){
            setCount++;
        }
    }
 
    // adding 1 for no one
    if(employeeClaimArray[0] != 0){
        setCount++;
    }
 
    // adding 1 for everyone
    setCount++;
    print(setCount);
}*/var numTestCases = parseInt(readline()); // reading num test cases
 
for (var testCaseCount = 0; testCaseCount < numTestCases; testCaseCount++) {
    var numEmployees = parseInt(readline());
    var employeeClaimArray = readline().split(" ").map(value => parseInt(value));
 
    employeeClaimArray.sort((a,b) => (parseInt(a) - parseInt(b)));
 
    var setCount = 0;
    for(var index = 0 ; index < (employeeClaimArray.length - 1); index++){
        if(employeeClaimArray[index] <= index && employeeClaimArray[index + 1] > (index + 1)){
            setCount++;
        }
    }
 
    // adding 1 for no one
    if(employeeClaimArray[0] != 0){
        setCount++;
    }
 
    // adding 1 for everyone
    setCount++;
    print(setCount);
}
