/* ========================================
   TEACHERS' DAY MESSAGE
======================================== */

const message = `
We just want to take a moment to thank you for everything you have done for us.

We know that being a teacher is not easy. It takes patience, effort, understanding, and dedication, and we truly appreciate all the time and energy you give just to help us learn and grow.

Thank you for guiding us, inspiring us, and believing in us even when things get difficult.

Your lessons go beyond the classroom. The knowledge you share, the encouragement you give, and the memories you create are things we will carry with us beyond our time as students.

We may not always say it, but we truly appreciate you and all the effort you put into helping us become better.

Thank you for being part of our journey.

Happy Teachers' Day!
from Dejumo
`;


/* ========================================
   VARIABLES
======================================== */

let index = 0;

let opened = false;

let typingComplete = false;


/* ========================================
   OPEN LETTER
======================================== */

function openLetter() {

    if (opened) {
        return;
    }

    opened = true;


    const envelope =
        document.getElementById(
            "envelopeWrapper"
        );


    const openingScreen =
        document.getElementById(
            "openingScreen"
        );


    const letterScreen =
        document.getElementById(
            "letterScreen"
        );


    /*
        STEP 1
        Open the envelope.
    */

    envelope.classList.add("open");


    /*
        STEP 2
        Give the flap time to open.
    */

    setTimeout(() => {

        openingScreen.classList.add("hide");

    }, 650);


    /*
        STEP 3
        Reveal the actual message page.
    */

    setTimeout(() => {

        letterScreen.classList.add("show");

        startTyping();

    }, 1250);
}


/* ========================================
   TYPING EFFECT
======================================== */

function startTyping() {

    const messageBox =
        document.getElementById(
            "message"
        );


    if (index >= message.length) {

        finishTyping();

        return;
    }


    const character =
        message.charAt(index);


    /*
        Paragraph spacing
    */

    if (character === "\n") {

        messageBox.innerHTML += "<br><br>";

    } else {

        messageBox.innerHTML += character;

    }


    index++;


    /*
        NORMAL HUMAN-LIKE SPEED
    */

    let speed = 35;


    /*
        Small pause after commas
    */

    if (character === ",") {

        speed = 95;

    }


    /*
        Longer pause after sentences
    */

    if (
        character === "." ||
        character === "!" ||
        character === "?"
    ) {

        speed = 170;

    }


    /*
        Longer pause between paragraphs
    */

    if (character === "\n") {

        speed = 350;

    }


    setTimeout(
        startTyping,
        speed
    );
}


/* ========================================
   FINISH TYPING
======================================== */

function finishTyping() {

    if (typingComplete) {
        return;
    }

    typingComplete = true;


    const cursor =
        document.getElementById(
            "cursor"
        );


    const signature =
        document.getElementById(
            "signature"
        );


    const finalGreeting =
        document.getElementById(
            "finalGreeting"
        );


    /*
        Hide cursor
    */

    setTimeout(() => {

        cursor.style.display = "none";

    }, 700);


    /*
        Show signature
    */

    setTimeout(() => {

        signature.classList.add(
            "show"
        );

    }, 900);


    /*
        Show final greeting
    */

    setTimeout(() => {

        finalGreeting.classList.add(
            "show"
        );

        createFloatingHearts();

    }, 1700);
}


/* ========================================
   FLOATING HEARTS
======================================== */

function createFloatingHearts() {

    const container =
        document.getElementById(
            "floatingHearts"
        );


    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧"
    ];


    for (let i = 0; i < 22; i++) {

        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "heart-particle";


        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        /*
            Random position
        */

        heart.style.left =
            Math.random() * 100 + "%";


        /*
            Random size
        */

        heart.style.fontSize =
            12 +
            Math.random() * 18 +
            "px";


        /*
            Random duration
        */

        heart.style.animationDuration =
            3.5 +
            Math.random() * 2 +
            "s";


        /*
            Random delay
        */

        heart.style.animationDelay =
            Math.random() * 1.5 +
            "s";


        container.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 6500);
    }
}