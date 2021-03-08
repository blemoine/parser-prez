const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
const parsers = require('./parser');

['parsimmon', /*'antlr4', 'peg', 'nearley', 'chevrotain'*/].forEach((parserType) => {
  const parse = parsers(parserType);
  describe(`parser ${parserType}`, () => {
    it('should parse a simple tag', () => {
      expect(parse('[en]In English[/en]')).toEqual({ en: 'In English' });
    });
    it('should parse multiple tags', () => {
      expect(parse('[fr]Francais[/fr][en]In English[/en]')).toEqual({ fr: 'Francais', en: 'In English' });
    });
    it('should parse multiple tags being case insensitive', () => {
      expect(parse('[En]In English[/eN][fr]Francais[/FR]')).toEqual({ fr: 'Francais', en: 'In English' });
    });
    it('should ignore spaces between tags', () => {
      expect(parse('[EN]In English[/EN]     [FR]Francais[/FR]')).toEqual({ fr: 'Francais', en: 'In English' });
    });
    it('should ignore line feed between tags', () => {
      expect(parse(`[EN]In English[/EN]
           [FR]Francais[/FR]`)).toEqual({ fr: 'Francais', en: 'In English' });
    });

    it('should ignore tags opened in other tags', () => {
      expect(parse(`[EN]In English [FR]Francais[/FR][/EN]`)).toEqual({ en: 'In English [FR]Francais[/FR]' });
    });
    it('should fail to parse when string not in tags', () => {
      expect(parse(`[EN]In English[/EN]prout
           [FR]Francais[/FR]`)).toEqual('FAIL');
    });
    it('should fail to parse unbalanced tags - 2 opens', () => {
      expect(parse(`[EN]In English[EN]`)).toEqual('FAIL');
    });
    it('should fail to parse unbalanced tags - open and close different', () => {
      expect(parse(`[EN]In English[/FR]`)).toEqual('FAIL');
    });


    /*
    it('should parse null', () => {
      expect(parse('null')).toEqual(null);
    });
    it('should parse boolean', () => {
      expect(parse('false')).toEqual(false);
      expect(parse('true')).toEqual(true);
    });
    it('should parse number', () => {
      expect(parse('0')).toEqual(0);
      expect(parse('1')).toEqual(1);
      expect(parse('-2')).toEqual(-2);
      expect(parse('203.3456')).toEqual(203.3456);
      expect(parse('-0.000012')).toEqual(-0.000012);
    });
    it('should parse string', () => {
      expect(parse('"1"')).toEqual('1');
      expect(parse('"qwertyui"')).toEqual('qwertyui');
      expect(parse('" {qwer [ty ui] }"')).toEqual(' {qwer [ty ui] }');
    });
    it('should parse array', () => {
      expect(parse('[]')).toEqual([]);
      expect(parse('[false, 123.34, "dada"]')).toEqual([false, 123.34, 'dada']);
      expect(parse('[ ["dada"] ,  [false, 123.34] , []]')).toEqual([['dada'], [false, 123.34], []]);
    });
    it('should parse object', () => {
      expect(parse('{}')).toEqual({});
      expect(parse('{"a":1, "b": false, "c": "test", "d": [12]}')).toEqual({ a: 1, b: false, c: 'test', d: [12] });
      expect(parse('{"a":{"d":1}, "b":{"e":{"f":false}}, "d":[12, {} , {"y":"u"}, null]}')).toEqual({
        a: { d: 1 },
        b: { e: { f: false } },
        d: [12, {}, { y: 'u' }, null],
      });
    });
    
     */
  });
});
