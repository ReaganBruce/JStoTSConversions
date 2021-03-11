"use strict";
document.addEventListener("DOMcontentloaded", function () {
    var generateButton = document.querySelector('#generate-button');
    var rerollButton = document.querySelector('#reroll-button');
    var sumButton = document.querySelector('#sum-button');
    var diceSection = document.querySelector('#dice-section');
    var counter = 1;
    var diceArray = [];
    var Die = /** @class */ (function () {
        function Die(value) {
            this.div = document.createElement("div");
            this.value = value;
            this.render();
            this.roll();
            this.eventListeners();
            diceArray.push(this);
        }
        Die.prototype.render = function () {
            this.div.className = "dice";
            this.div.id = counter.toString();
            diceSection.appendChild(this.div);
            this.div.textContent = this.value.toString();
        };
        Die.prototype.eventListeners = function () {
            var _this = this;
            this.div.addEventListener("click", function () { return _this.roll(); });
            this.div.addEventListener("dblclick", function () {
                diceArray.splice(diceArray.indexOf(_this), 1), _this.div.remove();
                counter--;
            });
        };
        Die.prototype.roll = function () {
            var randomNum = Math.floor(Math.random() * 6) + 1;
            this.value = randomNum;
            this.div.textContent = this.value.toString();
        };
        return Die;
    }());
    generateButton.addEventListener("click", function () {
        var randomNum = Math.floor(Math.random() * 6) + 1;
        if (counter < 5) {
            new Die(randomNum);
            counter++;
        }
        else {
            counter == 0;
        }
    });
    rerollButton.addEventListener("click", function () {
        for (var i = 0; i < diceArray.length; i++) {
            diceArray[i].roll();
        }
    });
    sumButton.addEventListener("click", function () {
        var totalSum = 0;
        for (var i = 0; i < diceArray.length; i++) {
            totalSum += diceArray[i].value;
        }
        alert("The total sum is " + totalSum + "!");
    });
});
