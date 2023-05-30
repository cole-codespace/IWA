const firstName = 'John';
const age = 35;
const hobby = 'Coding';

function concatHobby () {
    let hobbyString = `Hello, ${firstName} (${age}). I love ${hobby}!`
    logTwice(hobbyString)
}

function logTwice(hobbyString) {
    console.log(hobbyString)
    console.log(hobbyString)
}

concatHobby()