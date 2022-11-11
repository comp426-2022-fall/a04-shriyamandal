export function roll(diceSides, diceNumber, timesRolled) {
    var resultsArr = [];
    
    for (let i = 0; i < timesRolled; i++) {
        let result = 0;
        for (let j = 0; j < diceNumber; j++) {
            result +=  Math.floor(Math.random() * diceSides) + 1;
        } 
        resultsArr.push(result);
        
    }
    
    const outputObject = {
        "sides": diceSides,
        "dice": diceNumber,
        "rolls": timesRolled,
        "results": resultsArr
    }
    
    return JSON.stringify(outputObject);
}
