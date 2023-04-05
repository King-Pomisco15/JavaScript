var count = 3;
if (count == 4) {
    console.log('Count is 4');
} 
/*Else If for greater than*/
else if(count > 4){
console.log('Count is greater than 4')
}
/*Else If for less than */
else if(count < 4){
    console.log('Count is lesser than 4')
}
else{ 
    console.log('Count is error');
}

var ef = 18;
if(ef < 18){
    console.log('You are not old enough to vote')
} else if (ef >= 18 ){
    console.log('Yes you can vote')
}

/* switch operator*/
var hero = 'superman';
switch (hero.toLowerCase()){
    case 'batman':
    console.log('high iq');
    console.log('an unusual amount of gear');
    console.log('always dressed in black');
    console.log('super power' + ': ' + 'super rich');
    break;
case 'superman' :
    console.log('super strength');
    console.log('heat vision');
    console.log('dressed in primary colors');
    console.log('frost breath');
    break;
default:
    console.log('member of the JL');
}

//ternary operator
/*
let a = 1, b= '1';
let result = (a == b) ? 'equal' : 'inequal';
console.log(result);
*/


var player = (0)
if (player ==  0){
    console.log('Game Over You lose')
}
if(player == 2){
    console.log('You have 2 lives left')
}
if(player == 1){
    console.log('Last life left')
}
else{
    console.log('Maximum health aquired')
}


