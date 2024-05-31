const btnEl = document.getElementById("btn");
const dateEl = document.querySelector(".date");
const resultEl = document.getElementById("result");

btnEl.addEventListener("click", function() {
    // Get the selected date value
    const selectedDate = new Date(dateEl.value);
    console.log("clicked");

    if (isNaN(selectedDate.getTime())) {
        resultEl.textContent = "Please enter a valid date.";
        return;
    }

    // Get the current date
    const today = new Date();
    
    // Calculate the difference in years
    let years = today.getFullYear() - selectedDate.getFullYear();
    
    // Calculate the difference in months and adjust the year if necessary
    let months = today.getMonth() - selectedDate.getMonth();
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Calculate the difference in days and adjust the month if necessary
    let days = today.getDate() - selectedDate.getDate();
    if (days < 0) {
        months--;
        if (months < 0) {
            years--;
            months += 11; // Because we've already adjusted years
        }
        
        // Adjust days by adding the number of days in the previous month
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += previousMonth;
    }
    
    // Update result label
    resultEl.textContent = `Your calculated age is ${years} years, ${months} months, and ${days} days old.`;
});
