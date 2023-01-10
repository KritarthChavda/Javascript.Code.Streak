var n = parseInt(readline());
var e_count=0, o_count=0;
var odd, even, ans;
var arr = readline().split(" ").map(x => parseInt(x));
 
for (var i=0; i<n; i++){
    if(arr[i]%2 == 0 ){
        e_count = e_count + 1;
        var even = i; 
    }
    else{
        o_count = o_count + 1;
        var odd = i;
    }
    if(e_count >1 && odd>=0){
        ans = odd+1;
        break;
    }
    if(o_count >1 && even>=0){
        ans = even+1;
        break;
    }
    
}
 
print(ans);