t = +readline()
 
while(t--) {
    nab = readline().split(' ').map(value => +value)
    print(nab[2] >= nab[1] ? Math.ceil(nab[0] / nab[1]) : 1)
    
}
