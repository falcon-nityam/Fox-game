import { SCENES, RAIN_CHANCE } from "./constants";
import {modFox,modScene} from './ui'

const gameState = {
  current: 'INIT',
  clock: 1,
  wakeTime:-1,
  tick() {
    this.clock++
    console.log('clock', this.clock)
    return this.clock
  },
startGame() {
  this.current = "HATCHING";
  this.wakeTime = this.clock + 3;
  modFox("egg");
  modScene("day");
},
wake() {
  this.current = "IDLING";
  this.wakeTime = -1;
  modFox("idling");
  this.scene = Math.random() > RAIN_CHANCE ? 0 : 1;
  modScene(SCENES[this.scene]);
},
  handleUSerAction(icon) {
    // can't do actions while in these states
    if (['SLEEP', 'FEEDING', 'CELEBRATING', 'HATCHING'].includes(this.current)) {
      // do nothing

      return
    }

    if (this.current === 'INIT' || this.current === 'DEAD') {
      this.startGame()
      return
    }

    switch (icon) {
      case 'weather':
        this.changeweather()
        break
        case 'poop':
        this.cleanPoop()
        break
        case 'fish':
        this.feed()
        break
    }
  },
  changeweather() {
    console.log('changeWeather')
  },
  cleanPoop() {
    console.log('cleanPoop')
  },
  feed() {
    console.log('feed')
  },
}

export const handleUserAction = gameState.handleUSerAction.bind(gameState)

export default gameState
