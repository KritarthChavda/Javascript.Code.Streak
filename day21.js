for (var i = 0; i < limit; i++)
 {
   var caseLength = parseInt(readline());
   var caseArray = readline().split(" ");
   var result = 1;
   for (var j = 0; j < caseLength; j++)
     {
       var current = parseInt(caseArray[j]);
       result *= current;
     }
   result += (caseLength - 1);
   result *= 2022;
   print(result);
 }