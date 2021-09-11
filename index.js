function stringLength(string) {
    return string.length > 0 && string.length < 11 ? string.length : false;
}

function reverseString(string) {
    return (string === '') ? '' : reverseString(string.substr(1)) + string.charAt(0);
}

module.exports = stringLength, reverseString;
