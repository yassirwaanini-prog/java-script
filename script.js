let operation = "";

function append(value) {
  operation += value;
  document.getElementById("operation").innerText = operation;
}

function clearAll() {
  operation = "";
  document.getElementById("operation").innerText = "";
  document.getElementById("result").innerText = "0";
}

function deleteLast() {
  operation = operation.slice(0, -1);
  document.getElementById("operation").innerText = operation;
}

function calculate() {
  try {
    let result = eval(operation);
    document.getElementById("result").innerText = result;

    let historyItem = document.createElement("div");
    historyItem.className = "history-item";
    historyItem.innerText = operation + " = " + result;
    document.getElementById("historyList").prepend(historyItem);

    operation = "";
  } catch {
    document.getElementById("result").innerText = "Erreur";
  }
}