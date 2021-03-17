function LongestAndShortestword(str) {
   const character = str.trim().match(/[a-z 0-9]/gi)
   const array = character == null ? [] : character.join('').split(' ')
   const longest = array.sort((a, b) => b.length - a.length)
   
   const result = {
      Longest: longest.length == 0 ? 'Tidak Ada Hasil' : longest[0],
      Shortest: longest.length == 0 ? 'Tidak Ada Hasil' : longest[longest.length - 1]
   }
   return result
}
console.log(LongestAndShortestword('fly in The sky   '))
console.log(LongestAndShortestword('! kao'))
console.log(LongestAndShortestword('!@#not$ fo#$231und'))
console.log(LongestAndShortestword(`Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 541 bytes | 108.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/putrasatr/CoderByte.gitdffsdffd
   0976bc7..011a96f  main -> main`))

