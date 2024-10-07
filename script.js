// Handle the 'Enter' key press and trigger the submit button click
document.getElementById('no').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('submitBtn').click();  // Trigger the button click
    }
});

// Handle the button click event
document.getElementById('submitBtn').addEventListener('click', function () {
    let no = document.getElementById('no').value;  // Get the value from the input
    if (no == 35) {
        console.log("no is right");
        alert("No is right!");
    } else {
        console.log("no is not right");
        alert("No is not right, try again!");
    }
});
