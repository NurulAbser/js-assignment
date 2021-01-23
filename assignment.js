// kilometerToMeter function start here
function kilometerToMeter(km){
    var m = km * 1000
    return m;
}


// budgetCalculator function start here
function budgetCalculator(watch, phone, laptop){
    var result = watch*2 + phone*7 + laptop*5;
    return result;

}


// hotelCost function start here
function hotelCost(duration){
    var Rent = 0;
    if (duration <= 10){
        Rent = duration * 100;
    } else if (duration <= 20){
        var first10Days = 10 * 100;
        var remaining = duration - 20;
        var sceond10Days = ramaining * 80;
        Rent = first10Days + sceond10Days;
    } else{
        var first10Days = 10 * 100;
        var sceond10Days = 10 * 80;
        var remaining = duration - 30;
        var after20Days = ramaining * 50;
        Rent = first10Days + sceond10Days + after20Days;
    }
    return Rent;
    }


// megaFriend function start here
function megaFriend(nameBiggest){
    var sum = 0;
    for(var i = 0; i<nameBiggest.length; i++){
    var element = nameBiggest[i];
    sum = sum + element;
    }
    return sum;
}
