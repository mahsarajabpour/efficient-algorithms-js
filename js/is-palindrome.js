//::::::Is Palindrome::::::

const isPalindrome = (num) => {
    const reverseNumber = num.toString().split('').reverse().join('');
    return reverseNumber === num.toString();
}

let num = 123321
console.log("is palindrome:", isPalindrome(num))