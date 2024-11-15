function playGame(userChoice) {
    // Remove previous selection classes from machine and user choices
    document.querySelectorAll(".SelectedBorder, .machinelose").forEach(el => el.classList.remove("SelectedBorder", "machinelose"));

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Find the corresponding divs for user and machine choices
    const machineClassName = "out" + computerChoice;
    const userClassName = "user-" + userChoice;
    const machineSelectedDiv = document.getElementsByClassName(machineClassName)[0];
    const userSelectedDiv = document.getElementsByClassName(userClassName)[0];

    // Determine the result and add classes accordingly
    let result;
    if (userChoice === computerChoice) {
        machineSelectedDiv.classList.add("SelectedBorder");
        userSelectedDiv.classList.add("SelectedBorder");
        result = "IT'S A TIE!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        machineSelectedDiv.classList.add("machinelose");
        userSelectedDiv.classList.add("SelectedBorder");
        result = "USER WON THE MATCH";
    } else {
        machineSelectedDiv.classList.add("SelectedBorder");
        userSelectedDiv.classList.add("machinelose");
        result = "MACHINE WON THE MATCH";
    }

    // Display the result
    document.getElementById("resultText").textContent = ` ${result}`;
}
