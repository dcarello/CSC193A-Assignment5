function makeBigger() {
  document.getElementById("myTextArea").style.fontSize = "24pt";
}

function applyStyle() {
  var textArea = document.getElementById("myTextArea");
  var isFancy = document.getElementById("fancyShmancy").checked;

  if (isFancy) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "";
    textArea.style.textDecoration = "none";
  }
}

function mooify() {
  var textArea = document.getElementById("myTextArea");
  var text = textArea.value.toUpperCase();

  var sentences = text.split(".");

  var mooed = sentences.map(function (sentence) {
    var trimmed = sentence.trimEnd();
    if (trimmed.length === 0) {
      return sentence;
    }

    var words = trimmed.split(" ");

    for (var i = words.length - 1; i >= 0; i--) {
      if (words[i].length > 0) {
        words[i] = words[i] + "-MOO";
        break;
      }
    }
    return words.join(" ");
  });

  textArea.value = mooed.join(".");
}
