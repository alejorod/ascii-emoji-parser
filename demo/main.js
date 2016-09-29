var sourceInput = document.getElementById('source');
var target = document.getElementById('target');
var emojiParser = new AsciiEmojiParser(':');

target.innerHTML = emojiParser.parse(sourceInput.value);

sourceInput.oninput = function(e) {
  target.innerHTML = emojiParser.parse(e.target.value);
};
