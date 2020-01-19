import { Router as ExpressRouter } from 'express';

import { PalindromeService } from '~/domain/services';
import { PalindromeEntity } from '~/domain/entities';
import { User } from '~/domain/interfaces';

const router = ExpressRouter();

const palindromeService = new PalindromeService();

router.get('/getScores', (req, res) => {
  res.send(
    palindromeService.getScoreList().map(highScore => ({
      name: highScore.player.name,
      points: highScore.points,
    })),
  );
});

router.post('/submitEntry', (req, res) => {
  const { name, word } = req.body;
  try {
    const palindrome = new PalindromeEntity(word);
    const player: User = {
      name,
    };
    palindromeService.saveScore(player, palindrome.score);
    res.status(200).send(String(palindrome.score));
  } catch (err) {
    res.status(200).send(String(0));
  }
});

export { router };
