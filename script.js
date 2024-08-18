const textArea = document.getElementById("text-input");
const btnChecker = document.getElementById("check-btn");
const result = document.getElementById("result");
const year = document.getElementById("year");

const currentYear = new Date().getFullYear();
year.innerText = currentYear;

const handleSubmit = () => {
    const inputValue = textArea.value.trim();

    if (inputValue === "") {
        alert("Please input a value");
    } else {
        const cleanValue = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const reverseValue = cleanValue.split("").reverse().join("");

        if (cleanValue === reverseValue) {
            console.log(`${inputValue} is a Palindrome`);
            result.innerHTML = `<strong>${inputValue}</strong> is a palindrome`;
        } else {
            console.log(`${inputValue} is not a Palindrome`);
            result.innerHTML = `<strong>${inputValue}</strong> is not a palindrome`;
            
        }
    }
}

btnChecker.addEventListener("click", handleSubmit);
textArea.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        handleSubmit();
    }
});