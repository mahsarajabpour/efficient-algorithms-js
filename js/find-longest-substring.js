//::::::Find Longest Substring::::::

const findLongestSubstring = (string) => {
    let start = 0;
    let maxLength = 0;
    let charIndexMap = {};
    let longestSubstr = '';

    for (let i = 0; i < string.length; i++) {
        const currentChar = string[i];
        if (charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = i;
        if (i - start + 1 > maxLength) {
            maxLength = i - start + 1;
            longestSubstr = string.substring(start, i + 1);
        }
    }
    return longestSubstr;
};

const inputString = "learningislove";
console.log("find longest substring:", findLongestSubstring(inputString));
// output: 'gisfornu'
