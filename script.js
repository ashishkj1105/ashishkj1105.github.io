var alphabet, codes, letter;
codes = {
    "a": "alpha",
    "b": "bravo",
    "c": "charlie",
    "d": "delta",
    "e": "echo",
    "f": "foxtrot",
    "g": "golf",
    "h": "hotel",
    "i": "India",
    "j": "juliet",
    "k": "kilo",
    "l": "lima",
    "m": "mike",
    "n": "november",
    "o": "oscar",
    "p": "papa",
    "q": "quebec",
    "r": "romeo",
    "s": "sierra",
    "t": "tango",
    "u": "uniform",
    "v": "victor",
    "w": "whiskey",
    "x": "x-ray",
    "y": "yankee",
    "z": "zulu",
    "@": "@",
    ".": "dot",
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine"
};

var day = new Date();
var hr = day.getHours();
if (hr >= 0 && hr < 12) {
    document.getElementById("greet").innerText = "Good Morning!";
} else if (hr == 12) {
    document.getElementById("greet").innerText = "Good Noon!";
} else if (hr >= 12 && hr <= 17) {
    document.getElementById("greet").innerText = "Good Afternoon!";
} else {
    document.getElementById("greet").innerText = "Good Evening!";
}

function run() {
    document.getElementById("write").innerHTML = " ";
    var alphabet = document.getElementById("box").value;
    // document.getElementById('text').innerText=alphabet; 
    document.getElementById("box").value = alphabet;
    var arr = [];
    for (var x = 0, _pj_a = alphabet.length; x < _pj_a; x += 1) {
        if (alphabet[x] === " ") {
            arr.push("-----------------------------End of word------------------");
            continue;
        }
        letter = alphabet[x].toLowerCase();
        arr.push(codes[letter].toString());
    }
    const result = arr.map((val, i) => i % 2 === 0 ? `<p><h3>${val}</h3></p>` : `<p><h3>${val}</h3></p>`).join('');
    document.getElementById("write").innerHTML = result.toUpperCase();
}

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("box");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("cpy").style.visibility = "visible";
}

function reset() {
    document.getElementById("write").innerHTML = " ";
    document.getElementById("box").value = "";
    document.getElementById("box").focus();
}

document.getElementById("box").addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("sub").click();
  }
});
