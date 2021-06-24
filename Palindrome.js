function FirstReverse(str) {
    let reverse = ''
    let i;
    for (i = str.length - 1; i >= 0; i--) {
        reverse += str[i]

    }
    return `${reverse == str ? 'palindrome' : str[0]}`

}

console.log(FirstReverse('TEST FIRST REVERSE'));


function Palindrome(string) {
    const reversString = string.split('').reverse().join('')
    const isPalindrome = reversString === string
    return `${isPalindrome && reversString.length ? 'Palindrome' : false}`
}

console.log(Palindrome('PalindromeemordnilaP'));