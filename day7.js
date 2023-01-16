/*A company of n
 people is planning a visit to the cinema. Every person can either go to the cinema or not. That depends on how many other people will go. Specifically, every person i
 said: "I want to go to the cinema if and only if at least ai
 other people will go, not counting myself". That means that person i
 will become sad if:

they go to the cinema, and strictly less than ai
 other people go; or
they don't go to the cinema, and at least ai
 other people go.
In how many ways can a set of people going to the cinema be chosen so that nobody becomes sad?

Input
Each test contains multiple test cases. The first line contains the number of test cases t
 (1≤t≤104
). The description of the test cases follows.

Each test case consists of two lines. The first line contains a single integer n
 (2≤n≤2⋅105
) — the number of people in the company.

The second line contains n
 integers a1,a2,…,an
 (0≤ai≤n−1
) — integers from peoples' claims.

It is guaranteed that the sum of n
 over all test cases does not exceed 2⋅105
.

Output
For each test case, print a single integer — the number of different ways to choose a set of people going to the cinema so that nobody becomes sad.

Example
inputCopy
4
2
1 1
7
0 1 2 3 4 5 6
8
6 0 3 3 6 7 2 7
5
3 0 0 3 3
outputCopy
2
1
3
2
*/

var numTestCases = parseInt(readline()); // reading num test cases
 
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
