/*An array a
 is good if for all pairs of adjacent elements, ai
 and ai+1
 (1≤i<n
) are of different parity. Note that an array of size 1
 is trivially good.

You are given an array of size n
.

In one operation you can select any pair of adjacent elements in which both elements are of the same parity, delete them, and insert their product in the same position.

Find the minimum number of operations to form a good array.

Input
Each test contains multiple test cases. The first line contains the number of test cases t
 (1≤t≤500
). The description of the test cases follows.

The first line of each test case contains an integer n
 (1≤n≤100
).

The second line of each test case contains n
 integers a1,a2,…,an
 (1≤ai≤109
).

Output
For each test case print an integer, the minimum number of operations required to form a good array.

Example
inputCopy
3
5
1 7 11 2 13
4
1 2 3 4
6
1 1 1 2 2 3
outputCopy
2
0
3*/
var n=parseInt(readline().split(" ")[0])
 
function solve(x){
 
    var ans=0
    for(var i=0;i<x.length-1;i++){
        if((parseInt(x[i])%2===0&&parseInt(x[i+1])%2===0)||(parseInt(x[i])%2!==0&&parseInt(x[i+1])%2!==0)){
            ans++
        }
    }
    return ans
}
for(var i=0;i<n;i++){
        var m=readline().split(" ")
 
    var a=readline().split(" ")
    print(solve(a))
}