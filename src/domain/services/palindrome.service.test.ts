import { User } from '~/domain/interfaces';

import { PalindromeService } from './palindrome.service';

describe('Palindrome service', () => {
  const palindromeService = new PalindromeService();
  const john: User = {
    name: 'John',
  };
  const rob: User = {
    name: 'Rob',
  };

  test('It should sort on insertion', () => {
    palindromeService.saveScore(john, 5);
    palindromeService.saveScore(rob, 10);
    expect(palindromeService.getScoreList()).toMatchObject([
      {
        player: rob,
        points: 10,
      },
      {
        player: john,
        points: 5,
      },
    ]);
  });

  test(`It should limit the top score list to ${PalindromeService.DEFAULT_TOP_HIGH_SCORE_LENGTH} by default`, () => {
    for (
      let i = 0;
      i < PalindromeService.DEFAULT_TOP_HIGH_SCORE_LENGTH - 1;
      i++
    ) {
      palindromeService.saveScore(john, 20);
    }
    expect(palindromeService.getScoreList()).toMatchObject([
      {
        player: john,
        points: 20,
      },
      {
        player: john,
        points: 20,
      },
      {
        player: john,
        points: 20,
      },
      {
        player: john,
        points: 20,
      },
      {
        player: rob,
        points: 10,
      },
    ]);
  });
});
