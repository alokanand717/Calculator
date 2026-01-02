const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

// Export for Node.js (Jest), but keep it compatible with the Browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = calculator;
}