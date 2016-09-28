import AsciiEmojiParser from './lib/ascii-emoji-parser';

let emojiParser = new AsciiEmojiParser(':');
let text = 'Hey! lets :dance:!';

console.log(text, '->', emojiParser.parse(text));
