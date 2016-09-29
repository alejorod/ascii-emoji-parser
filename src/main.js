const asciiEmojis = {
  'innocent': 'ʘ‿ʘ',
  'disapproval': 'ಠ_ಠ',
  'table_flip': '(╯°□°）╯︵ ┻━┻',
  'table_back': '┬─┬﻿ ノ( ゜-゜ノ)',
  'double_flip': '┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻',
  'super_waving': '( ﾟ∀ﾟ)ｱﾊﾊ八八ﾉヽﾉヽﾉヽﾉ ＼＼ / ＼/ ＼',
  'fistacuffs': 'ლ(｀ー´ლ)',
  'bear': 'ʕ•ᴥ•ʔ',
  'big_eyes': '(｡◕‿◕｡)',
  'surprised': '（　ﾟДﾟ ）',
  'shrug': '¯\\_(ツ)_/¯',
  'meh': '¯\\(°_o)/¯',
  'feel_perky': '(`･ω･´)',
  'angry': '(╬ ಠ益ಠ)',
  'excited': '☜(⌒▽⌒)☞',
  'running': 'ε=ε=ε=┌(;*´Д`)ﾉ',
  'happy': 'ヽ(´▽`)/',
  'basking_in_glory': 'ヽ(´ー｀)ノ',
  'kitty': 'ᵒᴥᵒ#',
  'fido': 'V●ᴥ●V',
  'meow': 'ฅ^•ﻌ•^ฅ',
  'cheers': '（ ^_^）o自自o（^_^ ）',
  'devious_smile': 'ಠ‿ಠ',
  '4chan': '( ͡° ͜ʖ ͡°)',
  'crying': 'ಥ_ಥ',
  'breakdown': 'ಥ﹏ಥ',
  'disagree': '٩◔̯◔۶',
  'flexing': 'ᕙ(⇀‸↼‶)ᕗ',
  'lift': 'ᕦ(ò_óˇ)ᕤ',
  'kirby': '⊂(◉‿◉)つ',
  'tripping_out': 'q(❂‿❂)p',
  'discombobulated': '⊙﹏⊙',
  'sad_and_confused': '¯\\_(⊙︿⊙)_/¯',
  'japanese_lion': '°‿‿°',
  'confused': '¿ⓧ_ⓧﮌ',
  'confused_scratch': '(⊙.☉)7',
  'worried': '(´･_･`)',
  'dear_god_why': 'щ（ﾟДﾟщ）',
  'staring': '٩(͡๏̯͡๏)۶',
  'pretty_eyes': 'ఠ_ఠ',
  'strut': 'ᕕ( ᐛ )ᕗ',
  'zoned': '(⊙_◎)',
  'crazy': 'ミ●﹏☉ミ',
  'trolling': '༼∵༽ ༼⍨༽ ༼⍢༽ ༼⍤༽',
  'angry_troll': 'ヽ༼ ಠ益ಠ ༽ﾉ',
  'fuck_it': 't(-_-t)',
  'sad_face': '(ಥ⌣ಥ)',
  'hugger': '(づ￣ ³￣)づ',
  'stranger_danger': '(づ｡◕‿‿◕｡)づ',
  'flip_friend': '(ノಠ ∩ಠ)ノ彡( \\o°o)\\',
  'cry_face': '｡ﾟ( ﾟஇ‸இﾟ)ﾟ｡',
  'cry_troll': '༼ ༎ຶ ෴ ༎ຶ༽',
  'TGIF': '“ヽ(´▽｀)ノ”',
  'dancing': '┌(ㆆ㉨ㆆ)ʃ',
  'sleepy': '눈_눈',
  'angry_birds': '( ఠൠఠ )ﾉ',
  'no_support': '乁( ◔ ౪◔)「      ┑(￣Д ￣)┍',
  'shy': '(๑•́ ₃ •̀๑)',
  'fly_away': '⁽⁽ଘ( ˊᵕˋ )ଓ⁾⁾',
  'careless': '◔_◔',
  'love': '♥‿♥',
  'touchy_feely': 'ԅ(≖‿≖ԅ)',
  'kissing': '( ˘ ³˘)♥',
  'shark_face': '( ˇ෴ˇ )',
  'dance': 'ヾ(-_- )ゞ',
  'winnie_the_pooh': 'ʕ •́؈•̀ ₎',
  'boxing': 'ლ(•́•́ლ)',
  'robot': '{•̃_•̃}',
  'seal': '(ᵔᴥᵔ)',
  'questionable': '(Ծ‸ Ծ)'
};

function emojiRegexBuilder(separator) {
  let rePattern = Object
    .keys(asciiEmojis)
    .map(item => separator + item + separator)
    .join('|');

  return new RegExp(rePattern, 'g');
}

export default class AsciiEmojiParser {
  constructor(separator) {
    this.separator = separator;
    this.regex = emojiRegexBuilder(separator);
  }

  patternMapper(pattern) {
    return asciiEmojis[
      pattern.slice(
        this.separator.length,
        pattern.length - this.separator.length
      )
    ];
  }

  parse(text) {
    return text.replace(this.regex, pattern => this.patternMapper(pattern));
  }

  static getKeywords() {
    return Object.keys(asciiEmojis);
  }
}
