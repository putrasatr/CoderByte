function starPyramid(n) {
    let a = "* ".repeat(n)
    for (let i = n; i >= 1; i--) {
        a.trim()
        console.log(a)
        a = (i == n - 1 ? "" : " ") + a.slice(0, i + 2)
    }
    a = ''
    m = (n - 1)
    for (let i = 1; i <= n; i++) {
        a = a.trim()
        a = " ".repeat(m) + a + (i > 1 ? " " : "") + "*"
        console.log(a)
        m--
    }
}
starPyramid(3)