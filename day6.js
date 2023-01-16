/*Vika's house has a room in a shape of a rectangular parallelepiped (also known as a rectangular cuboid). Its floor is a rectangle of size w×d
, and the ceiling is right above at the constant height of h
. Let's introduce a coordinate system on the floor so that its corners are at points (0,0)
, (w,0)
, (w,d)
, and (0,d)
.

A laptop is standing on the floor at point (a,b)
. A projector is hanging on the ceiling right above point (f,g)
. Vika wants to connect the laptop and the projector with a cable in such a way that the cable always goes along the walls, ceiling, or floor (i. e. does not go inside the cuboid). Additionally, the cable should always run parallel to one of the cuboid's edges (i. e. it can not go diagonally).

What is the minimum length of a cable that can connect the laptop to the projector?

Illustration for the first test case. One of the optimal ways to put the cable is shown in green.
Input
Each test contains multiple test cases. The first line contains the number of test cases t
 (1≤t≤104
). The description of the test cases follows.

The first line of each test case contains three integers w
, d
, and h
 (2≤w,d,h≤1000
) — the size of the room.

The second line contains four integers a
, b
, f
, g
 (0<a,f<w
; 0<b,g<d
): the laptop is located on the floor at point (a,b)
, while the projector is hanging on the ceiling right above point (f,g)
.

Output
For each test case, print a single integer — the minimum length of the cable connecting the laptop and the projector that runs only along the walls, floor, and ceiling parallel to cuboid's edges.

Example
inputCopy
5
55 20 29
23 10 18 3
20 10 5
1 5 2 5
15 15 4
7 13 10 10
2 1000 2
1 1 1 999
10 4 10
7 1 2 1
outputCopy
47
8
14
1002
17
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
