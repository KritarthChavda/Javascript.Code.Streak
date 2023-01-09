There are n participants in a competition, participant i having a strength of si.

Every participant wonders how much of an advantage they have over the other best participant. In other words, each participant i wants to know the difference between si and sj, where j is the strongest participant in the competition, not counting i (a difference can be negative).

So, they ask you for your help! For each i (1≤i≤n) output the difference between si and the maximum strength of any participant other than participant i.

Input
The input consists of multiple test cases. The first line contains an integer t (1≤t≤1000) — the number of test cases. The descriptions of the test cases follow.

The first line of each test case contains an integer n (2≤n≤2⋅105) — the length of the array.

The following line contains n space-separated positive integers s1, s2, ..., sn (1≤si≤109) — the strengths of the participants.

It is guaranteed that the sum of n over all test cases does not exceed 2⋅105.

Output
For each test case, output n space-separated integers. For each i (1≤i≤n) output the difference between si and the maximum strength of any other participant.

Example
input
5
4
4 7 3 5
2
1 2
5
1 2 3 4 5
3
4 9 4
4
4 4 4 4
output
-3 2 -4 -2 
-1 1 
-4 -3 -2 -1 1 
-5 5 -5 
0 0 0 0 


var t = readline();
for (var i = 0 ; i < t ; ++i ){
    var n = readline(),
        s = readline().split(' '),
        sortedParticipants = [...s].sort((a,b) => {return b - a}),
        strongestParticipant = sortedParticipants[0],
        strongParticipant = sortedParticipants[1];
        output = s.map( e => {
            return (e == strongestParticipant ?  e - strongParticipant : e - strongestParticipant);
        }).join(' ');
        print(output);
        
    }
