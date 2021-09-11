function capitalize(string) {
    return string.trim().replace(/^\w/, (c) => c.toUpperCase());
}

module.exports = capitalize;