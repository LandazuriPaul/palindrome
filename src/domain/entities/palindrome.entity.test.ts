import { PalindromeEntity } from './palindrome.entity';

describe('Palindrome entity', () => {
  test('bob', () => {
    const bob = new PalindromeEntity('bob');
    expect(bob.score).toBe(3);
  });

  test('a man a plan a canal panama', () => {
    const panama = new PalindromeEntity('a man a plan a canal panama');
    expect(panama.score).toBe(21);
  });

  test('57 8$ _%_$ 87 5', () => {
    const ascii = new PalindromeEntity('57 8$ _%_$ 87 5');
    expect(ascii.score).toBe(11);
  });

  test('a beautiful house', () => {
    expect(() => {
      new PalindromeEntity('a beautiful house');
    }).toThrow();
  });
});
