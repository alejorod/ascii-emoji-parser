# Text to Ascii Emoji parser  ヽ(´▽`)/  
[![Build Status](https://travis-ci.org/alejorod/ascii-emoji-parser.svg?branch=master)](https://travis-ci.org/alejorod/ascii-emoji-parser)
[![Coverage Status](https://coveralls.io/repos/github/alejorod/ascii-emoji-parser/badge.svg?branch=master)](https://coveralls.io/github/alejorod/ascii-emoji-parser?branch=master)

It turns text like ```whaats up? :devious_smile:``` into ```whaats up? ಠ‿ಠ```

Basic usage:

```Javascript
import AsciiEmojiParser from 'ascii-emoji-parser';

let emojiParser = new AsciiEmojiParser(':');
let text = 'come at me bro :boxing:';

console.log(emojiParser.parse(text)) // come at me bro ლ(•́•́ლ)
```

> Checkout the example file [example.js](https://github.com/alejorod/ascii-emoji-parser/blob/master/example.js) and run it in the terminal with `$ babel-node example`, remember to install `ascii-emoji-parser` first!


### Installation

#### With npm:
```
npm install ascii-emoji-parser
```

or download it and include it in your page with the script tag

```
<script src='path/to/lib/ascii-emoji-parser.js'</script>
```

> The ascii emoji module supports UMD, that means it can be used in commonjs, AMD, ES6, and regular script tag import environment. If used with script tags, it attached itself to the global scope with the name `AsciiEmojiParser`.

### Documentation
| **AsciiEmojiParser(str) -> AsciiEmojiParser** |
| --- |
|Constructor takes in a string representing the separator to distinguish keywords.|

| **AsciiEmojiParser::parse(str) -> str** |
| --- |
|`parse` method takes in the text to be parsed and return the parsed text, that is the input text with all keywords enclosed by the parser separator replaced with ascii emojis.|

### Supported Emojis

|Keyword | Emoji|
|:---:|:---:|
|innocent | ʘ‿ʘ|
|disapproval | ಠ_ಠ|
|table_flip | (╯°□°）╯︵ ┻━┻|
|table_back | ┬─┬﻿ ノ( ゜-゜ノ)|
|double_flip | ┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻|
|super_waving | ( ﾟ∀ﾟ)ｱﾊﾊ八八ﾉヽﾉヽﾉヽﾉ ＼＼ / ＼/ ＼|
| fistacuffs | ლ(｀ー´ლ) |
| bear | ʕ•ᴥ•ʔ |
| big_eyes | (｡◕‿◕｡) |
| surprised | （　ﾟДﾟ ） |
| shrug | ¯\\_(ツ)_/¯ |
| meh | ¯\\(°_o)/¯ |
| feel_perky | (`･ω･´) |
| angry | (╬ ಠ益ಠ) |
| excited | ☜(⌒▽⌒)☞ |
| running | ε=ε=ε=┌(;*´Д`)ﾉ |
| happy | ヽ(´▽`)/ |
| basking_in_glory | ヽ(´ー｀)ノ |
| kitty | ᵒᴥᵒ# |
| fido | V●ᴥ●V |
| meow | ฅ^•ﻌ•^ฅ |
| cheers | （ ^_^）o自自o（^_^ ） |
| devious_smile | ಠ‿ಠ |
| 4chan | ( ͡° ͜ʖ ͡°) |
| crying | ಥ_ಥ |
| breakdown | ಥ﹏ಥ |
| disagree | ٩◔̯◔۶ |
| flexing | ᕙ(⇀‸↼‶)ᕗ |
| lift | ᕦ(ò_óˇ)ᕤ |
| kirby | ⊂(◉‿◉)つ |
| tripping_out | q(❂‿❂)p |
| discombobulated | ⊙﹏⊙ |
| sad_and_confused | ¯\\_(⊙︿⊙)_/¯ |
| japanese_lion | °‿‿° |
| confused | ¿ⓧ_ⓧﮌ |
| confused_scratch | (⊙.☉)7 |
| worried | (´･_･`) |
| dear_god_why | щ（ﾟДﾟщ） |
| staring | ٩(͡๏̯͡๏)۶ |
| pretty_eyes | ఠ_ఠ |
| strut | ᕕ( ᐛ )ᕗ |
| zoned | (⊙_◎) |
| crazy | ミ●﹏☉ミ |
| trolling | ༼∵༽ ༼⍨༽ ༼⍢༽ ༼⍤༽ |
| angry_troll | ヽ༼ ಠ益ಠ ༽ﾉ |
| fuck_it | t(-_-t) |
| sad_face | (ಥ⌣ಥ) |
| hugger | (づ￣ ³￣)づ |
| stranger_danger | (づ｡◕‿‿◕｡)づ |
| flip_friend | (ノಠ ∩ಠ)ノ彡( \\o°o)\\ |
| cry_face | ｡ﾟ( ﾟஇ‸இﾟ)ﾟ｡ |
| cry_troll | ༼ ༎ຶ ෴ ༎ຶ༽ |
| TGIF | “ヽ(´▽｀)ノ” |
| dancing | ┌(ㆆ㉨ㆆ)ʃ |
| sleepy | 눈_눈 |
| angry_birds | ( ఠൠఠ )ﾉ |
| no_support | 乁( ◔ ౪◔)「      ┑(￣Д ￣)┍ |
| shy | (๑•́ ₃ •̀๑) |
| fly_away | ⁽⁽ଘ( ˊᵕˋ )ଓ⁾⁾ |
| careless | ◔_◔ |
| love | ♥‿♥ |
| touchy_feely | ԅ(≖‿≖ԅ) |
| kissing | ( ˘ ³˘)♥ |
| shark_face | ( ˇ෴ˇ ) |
| dance | ヾ(-_- )ゞ |
| winnie_the_pooh | ʕ •́؈•̀ ₎ |
| boxing | ლ(•́•́ლ) |
| robot | {•̃_•̃} |
| seal | (ᵔᴥᵔ) |
| questionable | (Ծ‸ Ծ) |

### Acknowledgement

Inspired by [this cheatsheet](https://github.com/dysfunc/ascii-emoji) made by [dysfunc](https://github.com/dysfunc).
