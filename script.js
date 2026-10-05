const message = `Dear Ma’am/Sir,

We just want to take a moment to say thank you for everything you’ve done for us.

We know that being a teacher is not easy. It takes patience, effort, understanding, and dedication, and we truly appreciate all the time and energy you give just to help us learn and grow.

Thank you for guiding us, inspiring us, and believing in us even when things get difficult.

Your lessons go beyond the classroom, and we will always be grateful for the memories, knowledge, and encouragement you have shared with us.

Happy Teachers’ Day! 💗

With appreciation,
John Rey Dejumo`;


let index = 0;
let started = false;


function openLetter() {

    const envelope = document.getElementById("envelope");
    const instruction = document.getElementById("instruction");
    const messageBox = document.getElementById("message");

    if (started) {
        return;
    }

    started = true;

    envelope.classList.add("open");

    instruction.textContent = "A little message just for you 💗";

    setTimeout(() => {

        typeMessage(messageBox);

    }, 900);
}


function typeMessage(element) {

    if (index < message.length) {

        if (message.charAt(index) === "\n") {
            element.innerHTML += "<br>";
        } else {
            element.innerHTML += message.charAt(index);
        }

        index++;

        setTimeout(() => {
            typeMessage(element);
        }, 45);

    }
}