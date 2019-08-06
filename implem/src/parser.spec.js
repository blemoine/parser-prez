const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
const parsers = require('./parser');

['parsimmon'].forEach((parserType) => {
  const parse = parsers(parserType);
  describe(`parser ${parserType}`, () => {
    it('should parse null', () => {
      expect(parse('null')).toEqual(null);
    });
    it('should parse boolean', () => {
      expect(parse('false')).toEqual(false);
      expect(parse('true')).toEqual(true);
    });
    it('should parse number', () => {
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
  });
});
