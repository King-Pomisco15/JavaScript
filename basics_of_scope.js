var a = 'first';

function scopeTest(){
    console.log(a);

    if (a != ''){
        console.log(a);
    }
    //var b = second;
}

scopeTest();
//console.log(b);