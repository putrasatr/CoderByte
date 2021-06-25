
const isLoggedIn =  () => {
    return Math.random() < 0.5
}

setInterval(() => {
(function (v, validator, callback) {
    console.log(v)
    if (!validator()) return console.table('WARN: Your session is up.')
    callback('Number')
}('string', isLoggedIn, (res) => {
    console.log(res)
}))
}, 1000);