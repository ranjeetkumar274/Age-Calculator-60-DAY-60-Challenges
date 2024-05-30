

const btnElement = document.getElementById("btn");
const dateElement = document.querySelector(".date");
const resultElement = document.getElementById("result");

btnElement.addEventListener("click", function() {
    // Get the selected date value
    const selectedDate = new Date(dateElement.value);

    // Calculate age
    const today = new Date();
    const age = today.getFullYear() - selectedDate.getFullYear();
    
    // Update result label
    resultElement.textContent = `Your calculated age is ${age} years old.`;
});

