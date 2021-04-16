function FirstReverse(str) {

    // code goes here  
    let arr = ''
    let i;
    for (i = str.length - 1; i >= 0; i--) {
        arr += str[i]

    }
    return `${arr == str ? 'palindrome' : str[0]}`

}

// keep this function call here 
console.log(FirstReverse('TEST FIRST REVERSE'));


function Palindrome(string) {
    const isPalindrome = string.split('').reverse().join('')
    return `${isPalindrome == string && isPalindrome.length ? 'Palindrome' : false}`
}

// console.log(Palindrome('PalindromeemordnilaP'));