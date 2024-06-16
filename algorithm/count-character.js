// ::::::Count Character::::::

const countCharacter = (str, char) => {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            counter++
        }
    }
    return counter;
};

const string = "have a good day";
const characterToCount = "a";
console.log(countCharacter(string, characterToCount))
