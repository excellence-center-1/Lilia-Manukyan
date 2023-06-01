// Game state
    let currentPlayer = "X";
    let gameOver = false;
    let boardSize = 3;
    let board = [];

    // Function to create the game board
    function createBoard() {
      const table = document.getElementById("board");
      table.innerHTML = "";

      for (let i = 0; i < boardSize; i++) {
        const row = document.createElement("tr");
        let rowData = [];

        for (let j = 0; j < boardSize; j++) {
          const cell = document.createElement("td");
          cell.setAttribute("onclick", `makeMove(${i}, ${j})`);
          row.appendChild(cell);
          rowData.push("");
        }

        board.push(rowData);
        table.appendChild(row);
      }
    }

    // Function to start the game with the specified board size
    function startGame() {
      const newSize = parseInt(document.getElementById("boardSize").value);
      if (newSize >= 3 && newSize <= 10) {
        boardSize = newSize;
        currentPlayer = "X";
        gameOver = false;
        board = [];
        document.getElementById("message").textContent = "";
        createBoard();
      } else {
        alert("Invalid board size! Please enter a number between 3 and 10.");
      }
    }

    // Function to handle player moves
    function makeMove(row, col) {
      if (!gameOver && board[row][col] === "") {
        board[row][col] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        if(currentPlayer == "X"){
          currentPlayer.style.color = "blue";
        }
      }
    }
    





    

/*// Define the winning combinations
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

// Function to check for a win or tie
function checkResult(player) {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    const cellA = cells[a];
    const cellB = cells[b];
    const cellC = cells[c];

    if (
      cellA.textContent === player &&
      cellB.textContent === player &&
      cellC.textContent === player
    ) {
      cellA.style.color = "green";
      cellB.style.color = "green";
      cellC.style.color = "green";
      return "win";
    }
  }

  // Check for a tie (draw)
  const isTie = Array.from(cells).every(cell => cell.textContent !== "");
  if (isTie) {
    return "tie";
  }

  return false;
}*/

/*// Updated makeMove function
function makeMove(cell) {
  if (cell.textContent === "") {
    cell.textContent = currentPlayer;
    cell.style.color = currentPlayer === "X" ? "#ff4d4d" : "#36a8e6";

    // Check for a win or tie
    const result = checkResult(currentPlayer);
    if (result === "win") {
      // Current player wins
      alert("Player " + currentPlayer + " wins!");
      // Reset the game or perform additional actions
    } else if (result === "tie") {
      // Tie (draw)
      alert("It's a tie!");
      // Reset the game or perform additional actions
    } else {
      // Switch players
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}*/







/*// Updated makeMove function
function makeMove(cell) {
  if (cell.textContent === "") {
    cell.textContent = currentPlayer;
    cell.style.color = currentPlayer === "X" ? "#ff4d4d" : "#36a8e6";

    // Check for a win
    if (checkWin(currentPlayer)) {
      // Current player wins
      alert("Player " + currentPlayer + " wins!");
      // Reset the game or perform additional actions
    } else {
      // Switch players
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}*/










    // Function to check for a winner
    function checkWin() {
      const winCombinations = getWinCombinations();

      for (let combination of winCombinations) {
        const [row, col] = combination[0];
        const symbol = board[row][col];

        if (
          symbol !== "" &&
          combination.every(([r, c]) => board[r][c] === symbol)
        ) {
          gameOver = true;
          document.getElementById("message").textContent =
            "Player " + currentPlayer + " wins!";
          return;
        }
      }

      // Check for a tie
      if (!board.flat().includes("")) {
        gameOver = true;
        document.getElementById("message").textContent = "It's a tie!";
      }
    }

    // Function to get all possible winning combinations
    function getWinCombinations() {
      const combinations = [];

      // Rows
      for (let i = 0; i < boardSize; i++) {
        const rowCombination = [];
        for (let j = 0; j < boardSize; j++) {
          rowCombination.push([i, j]);
        }
        combinations.push(rowCombination);
      }

      // Columns
      for (let i = 0; i < boardSize; i++) {
        const colCombination = [];
        for (let j = 0; j < boardSize; j++) {
          colCombination.push([j, i]);
        }
        combinations.push(colCombination);
      }

      // Diagonal from top-left to bottom-right
      const diagonalCombination1 = [];
      for (let i = 0; i < boardSize; i++) {
        diagonalCombination1.push([i, i]);
      }
      combinations.push(diagonalCombination1);

      // Diagonal from top-right to bottom-left
      const diagonalCombination2 = [];
      for (let i = 0; i < boardSize; i++) {
        diagonalCombination2.push([i, boardSize - 1 - i]);
      }
      combinations.push(diagonalCombination2);

      return combinations;
    }

    // Function to reset the game
    function resetGame() {
      currentPlayer = "X";
      gameOver = false;
      board = [];
      document.getElementById("board").innerHTML = "";
      document.getElementById("message").textContent = "";
      createBoard();
    }

