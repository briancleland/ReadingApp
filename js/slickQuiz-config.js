// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Reading Skills!",
        "main":    "<p>Find out how good you are at reading.</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Top Score - well done!",
        "level2":  "Contender",
        "level3":  "Amateur",
        "level4":  "Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Here",
            "a": [
                {"option": "Here", "correct": true},
                {"option": "And",  "correct": false},
                {"option": "Like", "correct": false},
                {"option": "It",   "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Shop",
            "a": [
                {"option": "Shop", "correct": true},
                {"option": "Here", "correct": false},
                {"option": "Pan",  "correct": false},
                {"option": "Like", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<p><span>Hmmm.</span></p>" // no comma here
        },
        { // Question 3
            "q": "Is 9 more or less than 5?",
            "a": [
                {"option": "More", "correct": true},
                {"option": "Less", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span></p>",
            "incorrect": "<p><span>ERRRR!</span></p>" // no comma here
        } // no comma here
    ]
};
