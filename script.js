let symbol = "";
let lastinput = "";
let finalRes = "";
let symbols = ["/", "*", "-", "+"];
var activesy = document.getElementById("active-symbol");
var display = document.getElementById("display");
var lastval = document.getElementById("lastval");
function Calculator(lastval, display, e) {
  activesy.innerHTML = e;
  if (finalRes && symbol) {
    //data will be placed here
    if (lastinput == display.value) {
      symbol = e;
    } else {
      if (symbol == "+") {
        lastval.value = lastval.value + symbol + display.value;
        var data = Number(finalRes) + Number(display.value);
        finalRes = data;
        symbol = e;
        display.value = data;
        lastinput = data;
      } else if (symbol == "-") {
        lastval.value = lastval.value + symbol + display.value;
        var data = Number(finalRes) - Number(display.value);
        finalRes = data;
        symbol = e;
        display.value = data;
        lastinput = data;
      } else if (symbol == "*") {
        lastval.value = lastval.value + symbol + display.value;
        var data = Number(finalRes) * Number(display.value);
        finalRes = data;
        symbol = e;
        display.value = data;
        lastinput = data;
      } else if (symbol == "/") {
        lastval.value = lastval.value + symbol + display.value;
        var data = Number(finalRes) / Number(display.value);
        finalRes = data;
        symbol = e;
        display.value = data;
        lastinput = data;
      }
    }
  } else {
    lastval.value = display.value;
    finalRes = display.value;
    symbol = e;
    display.value = "";
  }
  if (symbols.includes(lastval.value[lastval.value.length - 1])) {
    lastval.value = lastval.value.substring(0, lastval.value.length - 2) + e;
  }
  return;
}

display.addEventListener("input", () => {
  var e = display.value[display.value.length - 1];
  var cutted = display.value.substring(0, display.value.length - 1);

  if (symbols.includes(e)) {
    display.value = cutted;
    Calculator(lastval, display, e);
    symbol = e;
  } else {
    if (cutted && cutted == finalRes) {
      display.value = "";
      display.value = e;
    } else {
      return;
    }
  }
});

const ButtonClick = (e) => {
  switch (e) {
    case "C":
      display.value = "";
      lastval.value = "";
      symbol = "";
      lastAnswer = "";
      finalRes = "";
      break;
    case "/":
      Calculator(lastval, display, e);
      break;
    case "*":
      Calculator(lastval, display, e);
      break;
    case "-":
      Calculator(lastval, display, e);
      break;
    case "+":
      Calculator(lastval, display, e);
      break;
    case "enter":
      Calculator(lastval, display, e);
      break;

    default:
      if (display.value == finalRes) {
        display.value = "";
        display.value = display.value + e;
      } else {
        display.value = display.value + e;
      }
  }
};
