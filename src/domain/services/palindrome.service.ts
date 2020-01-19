import { Service } from '~/lib/service';
import { HighScore, User } from '~/domain/interfaces';

export class PalindromeService extends Service {
  static DEFAULT_TOP_HIGH_SCORE_LENGTH = 5;
  private static instance: PalindromeService;

  private highScoreList: HighScore[];

  constructor() {
    super();
    if (!PalindromeService.instance) {
      this.highScoreList = [];
      PalindromeService.instance = this;
    }
    return PalindromeService.instance;
  }

  public getScoreList(
    limit: number = PalindromeService.DEFAULT_TOP_HIGH_SCORE_LENGTH,
  ): HighScore[] {
    return this.highScoreList.slice(0, limit);
  }

  public saveScore(player: User, points: number) {
    const newHighScore: HighScore = {
      player,
      points,
    };
    for (let i = 0; i < this.highScoreList.length; i++) {
      const highScore = this.highScoreList[i];
      if (highScore.points < points) {
        this.highScoreList.splice(i, 0, newHighScore);
        return;
      }
    }
    this.highScoreList.push(newHighScore);
  }
}
