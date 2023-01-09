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