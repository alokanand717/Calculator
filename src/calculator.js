const calculator = {
    add: function (a, b) {
        return a + b;
    },

    subtract: function (a, b) {
        return a - b;
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = calculator;
}
