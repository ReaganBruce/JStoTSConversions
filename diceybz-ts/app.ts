document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.querySelector('#generate-button') as HTMLButtonElement;
    const rerollButton = document.querySelector('#reroll-button') as HTMLButtonElement;
    const sumButton = document.querySelector('#sum-button') as HTMLButtonElement;
    const diceSection = document.querySelector('#dice-section') as HTMLElement;
    let counter: number = 1;
    let diceArray: Die[] = [];


    class Die {
        public value: number;
        public div: HTMLDivElement;
        public constructor(value: number) {
            this.div = document.createElement("div");
            this.value = value;
            this.render();
            this.roll();
            this.eventListeners();
            diceArray.push(this);
        }


        render() {
            this.div.className = "dice";
            this.div.id = counter.toString();
            diceSection.appendChild(this.div);
            this.div.textContent = this.value.toString();
        }

        eventListeners() {
            this.div.addEventListener("click", () => this.roll());
            this.div.addEventListener("dblclick", () => {
                diceArray.splice(diceArray.indexOf(this), 1), this.div.remove();
                counter--;
            });
        }

        roll() {
            let randomNum = Math.floor(Math.random() * 6) + 1;
            this.value = randomNum;
            this.div.textContent = this.value.toString();
        }
    }

    generateButton.addEventListener("click", () => {
        let randomNum = Math.floor(Math.random() * 6) + 1;
        if (counter < 5) {
            new Die(randomNum);
            counter++;
        } else {
            counter == 0;
        }
    });


    rerollButton.addEventListener("click", () => {
        for (let i = 0; i < diceArray.length; i++) {
            diceArray[i].roll();
        }
    });

    sumButton.addEventListener("click", () => {
        let totalSum: number = 0;
        for (let i = 0; i < diceArray.length; i++) {
            totalSum += diceArray[i].value;
        }
        alert(`The total sum is ${totalSum}!`);
    });
})















