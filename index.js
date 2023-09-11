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
    if (string.toLowerCase() === string) {
        return "I can't hear you!"; 
    } else if (string.toUpperCase() === string) {
        return "YES INDEED!";
    } else if (string === `Let's have dinner together!`) {
        return 'I would love to!';
    }
};

//sayHiToHeadphonedRoommate(`HELLO`);

