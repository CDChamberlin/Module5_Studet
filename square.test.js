const { square, squareRoot } = require("./square");
test("square 5 to get 25", () => {
    expect(square(5)).toBe(25);
});

test("Square root of 25 to get 5", () => {
    expect(squareRoot(25)).toBe(5);
});

test("throws error for negative inputs into the squareRoot function", () => {
    expect(() => squareRoot(-25)).toThrow(
        "Negative square Roots are imaginary"
    );
});
