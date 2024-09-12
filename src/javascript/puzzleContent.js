//https://custom-connections-game.vercel.app/
//https://custom-connections-game.vercel.app/FJYBQK0DPx5013PsLiwq
//https://custom-connections-game.vercel.app/X4MWQyefjYpVlfuinW95

export function createPuzzle() {
  const puzzleContent = document.querySelector("#puzzle-content");

  const puzzleTitle = document.createElement("h1");
  puzzleTitle.id = "puzzle-title";
  puzzleTitle.textContent = "NYT Connections Style Game Links";

  const puzzle1 = document.createElement("a");
  puzzle1.href =
    "https://custom-connections-game.vercel.app/FJYBQK0DPx5013PsLiwq/";
  puzzle1.target = "_blank";
  puzzle1.textContent = "Puzzle 1";

  const puzzle2 = document.createElement("a");
  puzzle2.href =
    "https://custom-connections-game.vercel.app/X4MWQyefjYpVlfuinW95";
  puzzle2.target = "_blank";
  puzzle2.textContent = "Puzzle 2";

  const makeYourOwnPuzzle = document.createElement("a");
  makeYourOwnPuzzle.href = "https://custom-connections-game.vercel.app/";
  makeYourOwnPuzzle.target = "_blank";
  makeYourOwnPuzzle.textContent = "Make Your Own NYT Connections Puzzle!";

  puzzleContent.append(puzzleTitle, puzzle1, puzzle2, makeYourOwnPuzzle);
}

