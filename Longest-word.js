function Longestword(str){
const character = str.match(/[A-Z a-z 0-9]/g)
const array = character.join('').split(' ')

const result = array.sort((a,b)=>b.length - a.length)
return result[0]
}
console.log(Longestword('Birds fly in The sky'))
console.log(Longestword('!@#not$ fo#$231und'))
console.log(Longestword(`Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 541 bytes | 108.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/putrasatr/CoderByte.git
   0976bc7..011a96f  main -> main`))
