const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    // SMELL: This is exactly the same as 'add' above!
    // Sonar will flag this as "Duplicated Code"
    addition: function(a, b) {
        return a + b;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = calculator;
}