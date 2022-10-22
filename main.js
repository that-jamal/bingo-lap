const numbers = []  // <--Array! 

function generateNumber() {

    const number = Math.floor(Math.random() * 75) + 1;


    if (numbers.includes(number)) {
        return generateNumber();
    } else {
        numbers.push(number)
        return number;
    }
}


function init() {

    const bingoSection = document.querySelector("#bingo");




    // create 1 divs that holds numbers
    for (let i = 1; i < 2; i++) {
        const newDiv = document.createElement("div");
        newDiv.id = i



        // crate 25 buttons inside div
        for (let i = 0; i < 26; i++) {
            const Button = document.createElement("button");

            if (i == 12) {
                Button.innerText = ("ball")

            } else {






                Button.innerText = generateNumber();

                Button.addEventListener("click", function () {
                    if (Button.classList == "hit") {
                        Button.classList.remove("hit");
                    } else {
                        Button.classList.add("hit");
                    }
                });
                // set id on button
                Button.id = newDiv.id + "-" + i;
                // set text inside button

                // set onclick on button
                /*newButton.onclick = function () {
                    toggleNumber(this);
                };*/



                // Add button inside div
                newDiv.appendChild(Button);
            }
        }






        bingoSection.appendChild(newDiv);
    }


}

init();





/*
function init() {
    for (let i = 0; i < 25; i++) {
        const Button = document.createElement("button");
        Button.innerText = i;


        document.querySelector("section").appendChild(Button);
    }


    init();
*/