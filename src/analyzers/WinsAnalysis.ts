import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wincount = 0;
    let homeWins = 0;
    let awayWins = 0;

    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        wincount++;
        homeWins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResult.AwayWin
      ) {
        wincount++;
        awayWins++;
      }
    }

    return `${this.teamName} won ${wincount} games in total this year. They won ${homeWins} games at home and ${awayWins} games away from home`;
  }
}
