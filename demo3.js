
const btnClick = document.querySelectorAll(".topic-button");
const home = document.querySelector(".home");
const mainDiv = document.querySelector(".main-div");

const nextButton = document.querySelectorAll(".next");
const previousButton = document.querySelectorAll(".previous");

const result = document.querySelector(".result");
const scoreDisplay = document.querySelector("#score");

let quiz;
let currentQuiz = 0;
let score = 0;
let answered = [];
let currentTopic;




// =============================
// START QUIZ
// =============================
btnClick.forEach((button) => {

    button.addEventListener("click", () => {

        // Hide front page
        home.style.display = "none";
        mainDiv.style.display = "none";

        // Hide result
        result.style.display = "none";


        // Get selected topic
        currentTopic = button.dataset.topic;


        // Reset quiz
        currentQuiz = 0;
        score = 0;
        answered = [];


        // Hide both quiz sections first
        const htmlQuiz = document.querySelector(".html-quiz");
        const cssQuiz = document.querySelector(".css-quiz");
        const javascriptQuiz = document.querySelector(".javascript-quiz");
        const javaQuiz = document.querySelector(".java-quiz");
        const CppQuiz = document.querySelector(".cpp-quiz");
        const pyhtonQuiz = document.querySelector(".python-quiz");

        htmlQuiz.style.display = "none";
        cssQuiz.style.display = "none";
        javascriptQuiz.style.display = "none";
        javaQuiz.style.display = "none";
        CppQuiz.style.display = "none" ;
        pyhtonQuiz.style.display = "none";


        // =========================
        // HTML QUIZ
        // =========================

        if (currentTopic === "html") {

            htmlQuiz.style.display = "block";

            quiz = htmlQuiz.querySelectorAll(".quiz");

        }


        // =========================
        // CSS QUIZ
        // =========================

        else if (currentTopic === "css") {

            cssQuiz.style.display = "block";

            quiz = cssQuiz.querySelectorAll(".quiz");

        }

        //=================================
        //JAVASCRIPT QUIZ
        //================================

        else if(currentTopic ==="javascript"){

            javascriptQuiz.style.display = "block";

            quiz = javascriptQuiz.querySelectorAll(".quiz");

        }

        //==============================
        //JAVA
        //=============================

        else if(currentTopic ==="java"){

            javaQuiz.style.display = "block";

            quiz = javaQuiz.querySelectorAll(".quiz");

        }

        

        //============================
        //C++
        //============================

        else if(currentTopic ==="cpp"){

            CppQuiz.style.display = "block";

            quiz = CppQuiz.querySelectorAll(".quiz");

        }


        //============================
        //PYTHON
        //============================

        else if(currentTopic ==="python"){

            pyhtonQuiz.style.display = "block";

            quiz = pyhtonQuiz.querySelectorAll(".quiz");

        }



        // =========================
        // HIDE ALL QUESTIONS
        // =========================

        quiz.forEach((question) => {

            question.style.display = "none";

        });


        // =========================
        // SHOW FIRST QUESTION
        // =========================

        quiz[currentQuiz].style.display = "block";


        // =========================
        // QUESTION NUMBER
        // =========================

        const questionNumber =
            quiz[currentQuiz].querySelector(".question-number");

        questionNumber.innerText =
            "Question 1 of 10";


        // =========================
        // RESET BUTTON TEXT
        // =========================

        quiz.forEach((question) => {

            const next = question.querySelector(".next");

            if (next) {
                next.innerText = "Next →";
            }

        });

    });

});

// =============================
// NEXT BUTTON
// =============================

nextButton.forEach((button) => {

    button.addEventListener("click", () => {

        // If quiz is not selected
        if (!quiz) {
            return;
        }


        // Find selected answer
        const selectedOption =
            quiz[currentQuiz].querySelector(
                'input[type="radio"]:checked'
            );


        // =============================
        // CHECK ANSWER
        // =============================

        if (selectedOption && !answered[currentQuiz]) {

            const userSelectedOption =
                selectedOption
                    .parentElement
                    .querySelector("span")
                    .innerText
                    .trim();


            let actualAnswer;


            // =============================
            // HTML ANSWERS
            // =============================

            if (currentTopic === "html") {

                if (currentQuiz === 0) {
                    actualAnswer = "Hyper Text Markup Language";
                }

                else if (currentQuiz === 1) {
                    actualAnswer = "<video>";
                }

                else if (currentQuiz === 2) {
                    actualAnswer = "CSS";
                }

                else if (currentQuiz === 3) {
                    actualAnswer = "SGML";
                }

                else if (currentQuiz === 4) {
                    actualAnswer = ".html";
                }

                else if (currentQuiz === 5) {
                    actualAnswer = "id";
                }

                else if (currentQuiz === 6) {
                    actualAnswer = "Microdata";
                }

                else if (currentQuiz === 7) {
                    actualAnswer = "<ol>";
                }

                else if (currentQuiz === 8) {
                    actualAnswer = "<select>";
                }

                else if (currentQuiz === 9) {
                    actualAnswer = "<abbr>";
                }

            }


            // =============================
            // CSS ANSWERS
            // =============================

            else if (currentTopic === "css") {

                if (currentQuiz === 0) {
                    actualAnswer = "All of the mentioned";
                }

                else if (currentQuiz === 1) {
                    actualAnswer = "class";
                }

                else if (currentQuiz === 2) {
                    actualAnswer = "CSS";
                }

                else if (currentQuiz === 3) {
                    actualAnswer = "bootstrap";
                }

                else if (currentQuiz === 4) {
                    actualAnswer = "font-weight: bold";
                }

                else if (currentQuiz === 5) {
                    actualAnswer = "nothings happen";
                }

                else if (currentQuiz === 6) {
                    actualAnswer = "font-style";
                }

                else if (currentQuiz === 7) {
                    actualAnswer = "only font-style: italic works";
                }

                else if (currentQuiz === 8) {
                    actualAnswer = "border-image-source";
                }

                else if (currentQuiz === 9) {
                    actualAnswer = "color";
                }

            }

            //============================
            //JAVASCRIPT ANSWER
            //===========================

            else if(currentTopic ==="javascript"){
                if(currentQuiz === 0){
                    actualAnswer = " JavaScript is a  scripting language used to make the website interactive ";
                }
                else if(currentQuiz === 1){
                    actualAnswer = "Sanfoundry_Javascriptmcq";
                }
                else if(currentQuiz === 2){
                    actualAnswer = " 50 ";
                }
                else if(currentQuiz === 3){
                    actualAnswer = "It is an ordered list of values ";
                }
                else if(currentQuiz === 4){
                    actualAnswer = " true";
                }
                else if(currentQuiz === 5){
                    actualAnswer = "Yes, perfectly ";
                }
                else if(currentQuiz === 6){
                    actualAnswer = "All of the mentioned ";
                }
                else if(currentQuiz === 7){
                    actualAnswer = "1 ";
                }
                else if(currentQuiz === 8){
                    actualAnswer = " Window ";
                }
                else if(currentQuiz === 9){
                    actualAnswer = "Yes";
                }
            }

            //===========================
            //java ANSWERS
            //===========================
            else if (currentTopic === "java") {

                if (currentQuiz === 0) {
                    actualAnswer = "James Gosling";
                }

                else if (currentQuiz === 1) {
                    actualAnswer = "JDK";
                }

                else if (currentQuiz === 2) {
                    actualAnswer = "Use of pointers";
                }

                else if (currentQuiz === 3) {
                    actualAnswer = "32";
                }

                else if (currentQuiz === 4) {
                    actualAnswer = "JAVA_HOME";
                }

                else if (currentQuiz === 5) {
                    actualAnswer = "Compilation error";
                }

                else if (currentQuiz === 6) {
                    actualAnswer = "* operator has converted b * 50 into int, which can not be converted to byte without casting";
                }

                else if (currentQuiz === 7) {
                    actualAnswer = " 1 2 3";
                }

                else if (currentQuiz === 8) {
                    actualAnswer = "The snippet compiles and runs but does not print anything";
                }

                else if (currentQuiz === 9) {
                    actualAnswer = "abc";
                }

            }

            //=========================
            //CPP ANSWERS
            //=========================

            else if (currentTopic === "cpp") {

                if (currentQuiz === 0) {
                    actualAnswer = "C++ supports both procedural and object oriented programming language";
                }

                else if (currentQuiz === 1) {
                    actualAnswer = "#include 'userdefined'";
                }

                else if (currentQuiz === 2) {
                    actualAnswer = " h";
                }

                else if (currentQuiz === 3) {
                    actualAnswer = "VAR_1234";
                }

                else if (currentQuiz === 4) {
                    actualAnswer = "Bottom-up";
                }

                else if (currentQuiz === 5) {
                    actualAnswer = "The program is compiled and executed successfully";
                }

                else if (currentQuiz === 6) {
                    actualAnswer = "Error";
                }

                else if (currentQuiz === 7) {
                    actualAnswer = "Error in C++ and successful execution in C";
                }

                else if (currentQuiz === 8) {
                    actualAnswer = "bool";
                }

                else if (currentQuiz === 9) {
                    actualAnswer = "Compiler error may be possible";
                }

            }

            //============================
            //PYTHON ANSWERS
            //============================

            else if (currentTopic === "python") {

                if (currentQuiz === 0) {
                    actualAnswer = "all of the mentioned";
                }

                else if (currentQuiz === 1) {
                    actualAnswer = " .py";
                }

                else if (currentQuiz === 2) {
                    actualAnswer = "2";
                }

                else if (currentQuiz === 3) {
                    actualAnswer = "SyntaxError";
                }

                else if (currentQuiz === 4) {
                    actualAnswer = "4";
                }

                else if (currentQuiz === 5) {
                    actualAnswer = "512, 64, 512";
                }

                else if (currentQuiz === 6) {
                    actualAnswer ="print()";
                }

                else if (currentQuiz === 7) {
                    actualAnswer = " any number of";
                }

                else if (currentQuiz === 8) {
                    actualAnswer = "False";
                }

                else if (currentQuiz === 9) {
                    actualAnswer = "56.24";
                }

            }

             
        



            // =============================
            // COMPARE ANSWER
            // =============================

            if (userSelectedOption === actualAnswer) {
                score++;
            }


            // Prevent counting again
            answered[currentQuiz] = true;

        }


        // =============================
        // LAST QUESTION → SUBMIT
        // =============================

        if (currentQuiz === quiz.length - 1) {

            quiz[currentQuiz].style.display = "none";

            result.style.display = "block";

            scoreDisplay.innerText = score + "/10";

            return;
        }


        // =============================
        // HIDE CURRENT QUESTION
        // =============================

        quiz[currentQuiz].style.display = "none";


        // =============================
        // NEXT QUESTION
        // =============================

        currentQuiz++;


        quiz[currentQuiz].style.display = "block";


        // =============================
        // QUESTION NUMBER
        // =============================

        quiz[currentQuiz]
            .querySelector(".question-number")
            .innerText =
            "Question " + (currentQuiz + 1) + " of 10";


        // =============================
        // LAST QUESTION → SUBMIT
        // =============================

        if (currentQuiz === quiz.length - 1) {

            quiz[currentQuiz]
                .querySelector(".next")
                .innerText = "Submit";

        }

    });

});


// =============================
// PREVIOUS BUTTON
// =============================

previousButton.forEach((button) => {

    button.addEventListener("click", () => {

        if (!quiz) {
            return;
        }


        if (currentQuiz > 0) {

            // Hide current
            quiz[currentQuiz].style.display = "none";


            // Previous question
            currentQuiz--;


            // Show previous
            quiz[currentQuiz].style.display = "block";


            // Update question number
            quiz[currentQuiz]
                .querySelector(".question-number")
                .innerText =
                "Question " + (currentQuiz + 1) + " of 10";


            // If we go back from question 10
            if (currentQuiz < quiz.length - 1) {

                quiz.forEach((question) => {

                    const next = question.querySelector(".next");

                    if (next) {
                        next.innerText = "Next";
                    }

                });

            }

        }

    });

});

