const colorfy = (str, color) => {
    let code;
    switch(color) {
        case 'black':
            code = 30;
            break;
        case 'red':
            code = 31;
            break;
        case 'green':
            code = 32;
            break;
        case 'yellow':
            code = 33;
            break;
        case 'blue':
            code = 34;
            break;
        case 'magenta':
            code = 35;
            break;
        case 'cyan':
            code = 36;
            break;
        case 'white':
            code = 37;
            break;
        case 'bright black':
        case 'bblack':
            code = 90;
            break;
        case 'bright red':
        case 'bred':
            code = 91;
            break;
        case 'bright green':
        case 'bgreen':
            code = 92;
            break;
        case 'bright yellow':
        case 'byellow':
            code = 93;
            break;
        case 'bright blue':
        case 'bblue':
            code = 94;
            break;
        case 'bright magenta':
        case 'bmagenta':
            code = 95;
            break;
        case 'bright cyan':
        case 'bcyan':
            code = 96;
            break;
        case 'bright white':
        case 'bwhite':
            code = 97;
            break;
        default:
            return str;
    }
    return `\x1b[${code}m${str}\x1b[0m`
}

const formatify = (str, format, color='white') => {
    let code;
    switch(format) {
        case 'bold':
            code = 1;
            break;
        case 'faint':
            code = 2;
            break;
        case 'italic':
            code = 3;
            break;
        case 'underline':
            code = 4;
            break;
        case 'blink':
            code = 5;
            break;
        default:
            return str;
    }
    return colorfy(`\x1b[${code}m${str}\x1b[0m`, color)
}

module.exports = {
    colorfy: colorfy,
    formatify: formatify
}