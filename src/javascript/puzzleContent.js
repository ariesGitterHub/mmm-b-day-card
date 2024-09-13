//https://custom-connections-game.vercel.app/
//https://custom-connections-game.vercel.app/FJYBQK0DPx5013PsLiwq
//https://custom-connections-game.vercel.app/X4MWQyefjYpVlfuinW95
//https://custom-connections-game.vercel.app/y8l8rAKL0IFv4oz3aJAI
//https://custom-connections-game.vercel.app/q22y8UFlVJX7DsG1AOXa

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

  const puzzle3 = document.createElement("a");
  puzzle3.href =
    "https://custom-connections-game.vercel.app/y8l8rAKL0IFv4oz3aJAI";
  puzzle3.target = "_blank";
  puzzle3.textContent = "Puzzle 3: NEPA Edition";

  const puzzle4 = document.createElement("a");
  puzzle4.href =
    "https://custom-connections-game.vercel.app/q22y8UFlVJX7DsG1AOXa";
  puzzle4.target = "_blank";
  puzzle4.textContent = "Puzzle 4";

  const br = document.createElement("br");

  const makeYourOwnPuzzle = document.createElement("a");
  makeYourOwnPuzzle.href = "https://custom-connections-game.vercel.app/";
  makeYourOwnPuzzle.target = "_blank";
  makeYourOwnPuzzle.textContent = "Make Your Own Puzzle!!!";

  puzzleContent.append(puzzleTitle, puzzle1, puzzle2, puzzle3, puzzle4, br, makeYourOwnPuzzle);
}

