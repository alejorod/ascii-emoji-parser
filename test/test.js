import { assert } from 'chai';
import AsciiEmojiParser from '../src/main';

describe('AsciiEmojiParser', () => {
  describe('# Parsing text with separator ":"', () => {
    let parser = new AsciiEmojiParser(':');

    it('should parse keywords enclosed by ":"', () => {
      let text = 'Hey lets :dance:!';
      assert.strictEqual('Hey lets ヾ(-_- )ゞ!', parser.parse(text));
    });

    it('should parse keywords enclosed by ":" even when sticked together', () => {
      let text = 'Hey lets :dance::innocent:!';
      assert.strictEqual('Hey lets ヾ(-_- )ゞʘ‿ʘ!', parser.parse(text));
    });

    it('should not parse non-keywords enclosed by ":"', () => {
      let text = 'Hey lets :jump:!';
      assert.strictEqual('Hey lets :jump:!', parser.parse(text));
    });

    it('should not parse keywords not enclosed by ":"', () => {
      let text = 'Hey lets dance!';
      assert.strictEqual('Hey lets dance!', parser.parse(text));
    });
  });

  describe('# Parser getKeywords helper', () => {
    it('should return all 70 supported keywords', () => {
      assert.strictEqual(70, AsciiEmojiParser.getKeywords().length);
    });

    it('should return keywords such as robot, stranger_danger and bear', () => {
      assert.include(AsciiEmojiParser.getKeywords(), 'robot');
      assert.include(AsciiEmojiParser.getKeywords(), 'stranger_danger');
      assert.include(AsciiEmojiParser.getKeywords(), 'bear');
    });
  });
});
