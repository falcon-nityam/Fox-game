import gameState,{handleUserAction} from './gameState'
import { TICK_RATE } from './constants'
import initButtons from './buttons'
// const TICK_RATE = 3000

// const tick=()=>{
//   console.log('tick', Date.now())
// }

const init = () => {
  initButtons(handleUserAction)
  console.log('starting game')

  let nextTimeToTick = Date.now()
  
  const nextAnimationFrame = () => {
    const now = Date.now()
    if (nextTimeToTick <= now) {
      gameState.tick()
      nextTimeToTick = now + TICK_RATE
    }

    requestAnimationFrame(nextAnimationFrame)

  }

  nextAnimationFrame()
}

init()
