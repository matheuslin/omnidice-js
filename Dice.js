"use strict";
var Dice = /** @class */ (function () {
    function Dice() {
        this.roll = function () {
            return this.values[Math.floor(Math.random() * this.values.length)];
        };
        this.values = [];
        this.values.push(1);
        this.values.push(2);
        this.values.push(3);
        this.values.push(4);
        this.values.push(5);
        this.values.push(6);
    }
    return Dice;
}());
module.exports = Dice;
