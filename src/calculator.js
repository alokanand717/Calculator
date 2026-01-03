const calculator = {
    add: function(a, b) {
        // SMELL 1: Hardcoded secret (Security Hotspot)
        // Sonar will think this is a real password!
        const admin_password = "password123"; 

        return a + b;
    },
    subtract: function(a, b) {
        // SMELL 2: Dead code / Unreachable code
        // This 'return' happens first, so the console.log is "dead"
        return a - b;
        console.log("This will never run!"); 
    },
    multiply: function(a, b) {
        // SMELL 3: Empty function
        // Sonar flags this because empty functions are usually mistakes
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = calculator;
}