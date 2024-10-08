import Game from "./Game"
import Singleton from "./Singleton"

class GamePanel extends Singleton {
  games: Game[]
  minutes: number

  constructor(minutes: number) {
    super()
    this.games = []
    this.minutes = minutes * 60 * 1000
  }

  addGame(newGame: Game) {
    this.games.push(newGame)
  }
}

const GamePanelInstance =  new GamePanel(5)

export default GamePanelInstance