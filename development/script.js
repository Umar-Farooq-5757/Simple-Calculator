let screen = document.querySelector(".screen");
let buttons = Array.from(document.querySelectorAll(".btn"));

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText == "RESET") {
      screen.innerText = "";
    } else if (btn.innerText == "=") {
      if (screen.innerText) {
        screen.innerText = eval(screen.innerText);
      }
    } else if (btn.innerText == "Del") {
      screen.innerText = screen.innerText.slice(0, -1);
    } else {
      screen.innerText += btn.innerText;
    }
  });
});

// THEME CHANGING
let isDark = false;
let themeChanger = document.querySelector("header img");
themeChanger.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  isDark
    ? (themeChanger.src = "light-mode.svg")
    : (themeChanger.src = "dark-mode.svg");
  isDark = !isDark;
});

// USING KEYBOARD TO USE CALCULATOR
document.addEventListener("keydown", (e) => {
  if (
    e.key == 1 ||
    e.key == 2 ||
    e.key == 3 ||
    e.key == 4 ||
    e.key == 5 ||
    e.key == 6 ||
    e.key == 7 ||
    e.key == 8 ||
    e.key == 9 ||
    e.key == 0 ||
    e.key == "+" ||
    e.key == "-" ||
    e.key == "*" ||
    e.key == "/" ||
    e.key == "."
  ) {
    screen.innerText += e.key;
  } else if (e.key == "=" || e.key == "Enter") {
    if (screen.innerText) {
      screen.innerText = eval(screen.innerText);
    }
  } else if (e.key == "Backspace") {
    screen.innerText = screen.innerText.slice(0, -1);
  }
});


// ANOTHER APPROACH TO MAKE THE CALCULATOR FUNCTIONAL

// function addCharacterToScreen(character) {
//   screen.innerText += character;
// }
// one.addEventListener("click", () => addCharacterToScreen(1));
// two.addEventListener("click", () => addCharacterToScreen(2));
// three.addEventListener("click", () => addCharacterToScreen(3));
// four.addEventListener("click", () => addCharacterToScreen(4));
// five.addEventListener("click", () => addCharacterToScreen(5));
// six.addEventListener("click", () => addCharacterToScreen(6));
// seven.addEventListener("click", () => addCharacterToScreen(7));
// eight.addEventListener("click", () => addCharacterToScreen(8));
// nine.addEventListener("click", () => addCharacterToScreen(9));
// zero.addEventListener("click", () => addCharacterToScreen(0));
// dot.addEventListener("click", () => addCharacterToScreen("."));
// add.addEventListener("click", () => addCharacterToScreen("+"));
// subtract.addEventListener("click", () => addCharacterToScreen("-"));
// multiply.addEventListener("click", () => addCharacterToScreen("*"));
// divide.addEventListener("click", () => addCharacterToScreen("/"));
// reset.addEventListener("click", () => (screen.innerText = ""));
// equals.addEventListener("click",() => (screen.innerText = eval(screen.innerText)));
// del.addEventListener(
//   "click",
//   () => (screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1))
// );
