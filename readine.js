const readline = require("readline")
const { green } = require('kleur');

const renderSpinner = (check_spinner, message, i = 1) => {
    const spinner = '|/-\\a';
    process.stderr.write('\r');
    readline.clearLine(process.stderr, 1);
    readline.cursorTo(process.stderr, 0);
    process.stderr.write(`${green(spinner[i])} ${message}`);
    check_spinner.stop = setTimeout(() => {
        i++;
        renderSpinner(check_spinner, message, i % spinner.length);
    }, 100);
}

renderSpinner({}, "spin")
