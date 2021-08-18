const readline = require("readline")
const { green, yellow } = require('kleur');

const renderSpinner = (check_spinner, message, i = 1) => {
    const spinner = '|/-\\a';
    const javascript = {
        one: "      [ ]  /======= ",
        two: "           ||       ",
        tre: "      |||  ||       ",
        for: "      |||   ======||",
        fiv: "      |||         ||",
        six: "      |||         ||",
        sev: "______|||  _______||",
    }
    process.stderr.write('\r');
    readline.clearLine(process.stderr, 1);
    readline.cursorTo(process.stderr, 0);
    if (i % 2)
        process.stderr.write(`${green(spinner[i])} ${message}`);
    else {
        for (const key in javascript) {
            //   console.log(javascript[key])
            process.stderr.write('\r');
            process.stderr.write('\n')
            process.stderr.write(yellow(javascript[key]))
            process.stderr.write('\r');
        }
    }

    check_spinner.stop = setTimeout(() => {
        i++;
        renderSpinner(check_spinner, message, i % spinner.length);
    }, 1500);
}

renderSpinner({}, "spin")

// const javascript = {
//     one: "      [ ]  /======= ",
//     two: "           ||       ",
//     tre: "      |||  ||       ",
//     for: "      |||   ======||",
//     fiv: "      |||         ||",
//     six: "      |||         ||",
//     sev: "______|||  _______||",
// }
// for (const key in javascript) {
//     //   console.log(javascript[key])
//     process.stderr.write('\n')
//     process.stderr.write(javascript[key])
// }
// process.stderr.write('\n\n')

// const nums = [1, 2, 3, 4, 5]
// for (const key in nums) {
//     const num = nums[key]
//     console.log(num % 2)
// }