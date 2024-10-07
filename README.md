A "Guess the Number" game is a simple interactive game where the player tries to guess a secret number that has been predefined or generated randomly by the system. After each guess, the game provides feedback, indicating whether the player's guess was correct or not. The goal is to correctly guess the number in as few attempts as possible.

### Key Features of a "Guess the Number" Game:
1. Input Field: 
   - The player enters their guess using a number input field. 
   - The range of numbers (e.g., 1 to 100) can be fixed or dynamically set.

2. Submit Button: 
   - The player clicks the "Submit" button to submit their guess. Alternatively, the game can also detect when the player presses the "Enter" key and trigger the submission.
   
3. Feedback: 
   - After each submission, the game provides feedback indicating whether the guess was correct, too high, or too low.
   - The feedback helps guide the player toward the correct number in subsequent attempts.

4. Validation:
   - If the player enters an invalid guess (e.g., out of the allowed range or not a number), the game can notify the player and ask them to enter a valid number.

5. Attempts/Tries:
   - The game may keep track of how many attempts the player has made, and the objective might be to guess the number within a limited number of tries.

### How It Works:
1. Player Input: 
   - The player enters their guess into a number input field.
2. Submission: 
   - The player submits their guess by either clicking a "Submit" button or pressing the "Enter" key.
3. Comparison: 
   - The inputted guess is compared with the target number.
4. Feedback: 
   - If the guess is correct, the game displays a success message.
   - If incorrect, the game might provide a hint (e.g., "Too low" or "Too high") to guide the player.
5. Loop: 
   - The game repeats the process until the player guesses the correct number.

 Example Flow:
- The system randomly selects a number between 1 and 100.
- The player guesses "50" and clicks "Submit."
- The game compares "50" to the target number.
  - If correct, it displays: "Congratulations! You guessed the right number!"
  - If incorrect, it may show: "Too high, try again!"
- The game repeats until the player finds the correct number.

This type of game can be easily implemented in HTML, CSS, and JavaScript, making it a great beginner project for learning user input handling, conditional logic, and event-driven programming.
