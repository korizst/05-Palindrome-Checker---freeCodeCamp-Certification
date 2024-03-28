// --- INITIALIZE HTML ELEMENTS --- //

const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

// --- FUNCTIONS --- //

// Read the user given input
const readInput = () => {
    let userEntry = textInput.value;
    
    return userEntry;
}

// Clean the user given input
const cleanInputString = (str) => {
    const regex = /[?!.,_():\/-\s]/g;
    return str.replace(regex, "").toLowerCase();
}

// Display the answer
const displayAnswer = () => {
    const userEntry = readInput();

    if (!userEntry) {
        alert("Please input a value");
        return
    }

    const cleanedEntry = cleanInputString(userEntry);
    const cleanedEntryReverse = cleanedEntry.split("").reverse().join('');
    
    if (cleanedEntry == cleanedEntryReverse) {
        result.textContent = `${userEntry} is a palindrome`
    }
    else {
        result.textContent = `${userEntry} is not a palindrome`
    }
}

// Button events

checkButton.addEventListener("click", displayAnswer);