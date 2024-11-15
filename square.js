function square(a) {
    return a * a;
}
function squareRoot(a) {
    if (a < 0) return new error("Negative square Roots are imaginary");
    return Math.sqrt(a);
}

module.exports = {
    square,
    squareRoot,
};
