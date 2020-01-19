import { Service } from '~/lib/service';

export class PalindromeEntity extends Service {
  private palindrome: string;
  private trimmedPalindrome: string;

  constructor(input: string) {
    super();
    const trimmedInput = PalindromeEntity.trimPalindrome(input);
    if (!PalindromeEntity.isValid(trimmedInput, false)) {
      throw new Error('Invalid palindrome');
    }
    this.palindrome = input;
    this.trimmedPalindrome = trimmedInput;
  }

  static isValid(input: string, trimFirst = true): boolean {
    const trimmedInput = trimFirst
      ? PalindromeEntity.trimPalindrome(input)
      : input;
    for (let i = 0; i < trimmedInput.length / 2; i++) {
      const leftChar = trimmedInput[i];
      const rightChar = trimmedInput[trimmedInput.length - 1 - i];
      if (leftChar !== rightChar) {
        return false;
      }
    }
    return true;
  }

  private static trimPalindrome(input: string): string {
    return input.replace(/\s/g, '');
  }

  get score(): number {
    return this.trimmedPalindrome.length;
  }
}
