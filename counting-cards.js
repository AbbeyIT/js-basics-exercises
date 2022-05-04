let count = 0;

function cc(card) {

    switch(card) {
        case 2:
        case 3: 
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
}
    var holdbet = 'Hold';
    if (count > 0) {
    holdbet = 'Bet'
}
    return count + " " + holdbet;
}

console.log(cc(2)); 
console.log(cc('K')); 
console.log(cc(10)); 
console.log(cc('K')); 
console.log(cc('A'));