exports.factorial = function(num) {
    if (num === 0) {
        return 1;
    }
    if (num === 1) {
       return num;
    }
    return num * this.factorial(num - 1);
};