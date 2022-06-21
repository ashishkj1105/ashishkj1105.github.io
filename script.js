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
"2":"two",
"3":"three",
"4":"four",
"5":"five",
"6":"six",
"7":"seven",
"8":"eight",
"9":"nine"
};
alphabet = prompt("Enter the word: ");
alphabet.toString();

for (var x = 0, _pj_a = alphabet.length; x < _pj_a; x += 1) {
  if (alphabet[x] === " ") {
    document.write(" ");
    continue;
  }

  letter = alphabet[x].toLowerCase();
  document.write("<p><h1>",codes[letter].toUpperCase(),"</h1></p>");
}
