'use strict'

let container = document.querySelector('#keyWord');

class SimonDice {

    constructor(container) {
        this.keyBoard = container;
        this.ArrLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        this.level = 0;
        this.maxLevel = 10;

        const play = document.getElementById('play');

        this.createAlphabet();
        
        play.addEventListener('click', (e) => {
            let button = e.target;
            button.setAttribute('disabled', 'disabled');
            this.playGame();
        })
    }

    createAlphabet() {
        let keyBoard = '';

        this.ArrLetter.forEach(letter => {
            keyBoard += `
                <div class="key" data="${letter}">
                    <p>${letter}</p>
                </div>
            `;
            
        });
        this.keyBoard.innerHTML = keyBoard;
    }

    playGame() {
        this.nextLevel()
        this.eventsKeyBoard();
        this.eventsMouse();
    }

    eventsKeyBoard() {
        document.addEventListener('keydown', (e) => {
            this.letterSelect(e.key.toUpperCase());
        })
    }

    eventsMouse() {
        const keys = document.querySelectorAll('.key');
        keys.forEach((key) => {
            key.addEventListener("click", (e) => {
                let letter = e.target.getAttribute('data');
                this.letterSelect(letter);
            })
        })
    }

    letterSelect(letter) {
        let key = document.querySelectorAll('.key');
        
        key.forEach(element => {
            let data = element.getAttribute('data');
            if(letter === data) {
                element.classList.add('active');
                setTimeout(() => {
                    element.classList.remove('active');
                }, 500)
            }
        })
    }

    nextLevel() {
        const level = document.getElementById('level');

        this.level = this.level + 1;
        level.innerHTML = `Level ${this.level} / ${this.maxLevel}`;
        
        this.randomLetter()
    }

    randomLetter() {
        let key = document.querySelectorAll('.key');
        let random = Math.floor(Math.random() * (this.ArrLetter.length - 0)) + 0;

        key.forEach((key) => {
            let data = key.getAttribute('data');
            
            if (data === this.ArrLetter[random]) {
                key.classList.add('random');
                setTimeout(() => {
                    key.classList.remove('random');
                }, 500);
            }
        })
    }


}

container = new SimonDice(container);



