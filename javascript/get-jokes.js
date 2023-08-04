import { displayErrorMessage } from "./error-message.js";

function getJokes(e) {
    e.preventDefault();
    let numberOfJokesUI = document.querySelector(".number-of-jokes-input");
    const numberOfJokes = Number((numberOfJokesUI).value),
    generatedJokes = document.querySelector(".generated-jokes");

    if (numberOfJokes < 1) {
        numberOfJokesUI.value = "";
        displayErrorMessage("Enter a number greater than 0 and lesser than 31.");
    } else if (numberOfJokes > 30) {
        numberOfJokesUI.value = "";
        displayErrorMessage("The number of jokes you requested for is greater than 30.");
    } else {
        numberOfJokesUI.value = "";
        const xhr = new XMLHttpRequest();

        xhr.open("GET", `https://api.api-ninjas.com/v1/jokes?limit=${numberOfJokes}`, true);
        xhr.setRequestHeader('X-Api-Key', 'FhM1OUJFNwJkYWgJcbKDcg==ZHXxLPJLQuBk9aTp');

        
        xhr.onload = function() {
            if(this.status === 200) {
                const response = JSON.parse(this.responseText);
                let ouput = "";

                if(typeof response === "object") {
                    response.forEach(function(current){
                        ouput += `<li>${current.joke}</li>`;
                    });
                } else {
                    ouput += `<li>Your internet connection might be unavailable, do check and try again.</li>`;
                }
                generatedJokes.innerHTML = ouput;
            } 
        }

        xhr.onerror = function() {
            displayErrorMessage("Your internet connection might be unavailable, do check and try again.");
        }

        xhr.send();
    }
}

export { getJokes };