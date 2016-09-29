import AsciiEmojiParser from 'ascii-emoji-parser';

let emojiParser = new AsciiEmojiParser(':');
let text = 'Hey! lets :dance:!';

console.log(text, '->', emojiParser.parse(text));
