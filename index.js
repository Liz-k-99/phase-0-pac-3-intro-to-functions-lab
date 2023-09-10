const shout = () => {
    return 'hello'.toUpperCase();
};
console.log(shout());

const whisper = (string) => {
    return string.toLowerCase();
};
console.log(whisper('hello'));

function logShout (string) {
    console.log(string.toUpperCase());
};
logShout('hello');

const logWhisper = (string) => {
    console.log(string.toLowerCase());
};
logWhisper('hello');

const sayHiToHeadphonedRoommate = (string) => {
    if (string.toLowerCase() === 'hello') {
        console.log("I can't hear you!"); 
    } else if (string.toUpperCase() === "HELLO") {
        console.log("YES INDEED!");
    } else if (string === `let's have dinner together!`) {
        console.log('I would love to!');
    }
};

sayHiToHeadphonedRoommate(`HELLO`);

