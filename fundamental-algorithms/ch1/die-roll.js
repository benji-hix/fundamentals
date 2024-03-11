//~ Create a function that rolls two 6-sided die until doubles are rolled.
//~ Track the number of times each number is rolled.
//~ Print the number of rolls required to hit doubles and all rolling data,
//~ along with most-rolled number, least-rolled number, and any unrolled numbers.

function diceRoll() {
    return 1 + Math.floor(Math.random() * 6);
}

function rollsAnalysis(obj) {
    let min = Object.values(obj)[0];
    let leastRolled = [];
    let max = Object.values(obj)[0];
    let mostRolled = [];
    let unrolled = [];

    for (const key in obj) {
        // Track unrolled numbers
        if (obj[key] == 0) {
            unrolled.push(key);
            continue;
        }
        //Track least rolled number
        else if (obj[key] < min) {
            min = obj[key];
            leastRolled.length = 1; // override previous tie
            leastRolled[0] = key;
        }
        // Track 'ties'
        else if (obj[key] == min) {
            leastRolled.push(key);
        }
        if (obj[key] > max) {
            max = obj[key];
            mostRolled.length = 1; // override previous tie
            mostRolled[0] = key;
        }
        // Track 'ties'
        else if (obj[key] == max) {
            mostRolled.push(key);
        }
    }

    // Don't print if it's a complete tie for 'least rolled'
    if (mostRolled.length && mostRolled.length + unrolled.length != 6)
        console.log('Most rolled: ' + mostRolled);
    if (leastRolled.length && leastRolled.length + unrolled.length != 6)
        console.log('Least rolled: ' + leastRolled);
    if (unrolled.length >= 1) console.log('Unrolled: ' + unrolled);
}

function rollDoubles() {
    const data = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    };
    let rollCount = 0;
    let match

    while (true) {
        rollCount++;
        let diceA = diceRoll();
        let diceB = diceRoll();
        data[diceA]++;
        data[diceB]++;
        if (diceA == diceB) {
            match = diceA;
            break;
        } 
    }

    console.log('Rolls required:', rollCount);
    console.log('Match:', match)
    console.log("Times each number was rolled:", data);
    rollsAnalysis(data);
}

rollDoubles();
