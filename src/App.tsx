import { gameReducer } from 'functions'
import { useReducer } from 'react'
import { INITIAL_GAME_STATE } from 'utils/constants'

export const App = () => {
  const [tiles, dispatchTiles] = useReducer(gameReducer, INITIAL_GAME_STATE)

  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'ArrowDown') return dispatchTiles({ type: 'moveDown' })
        if (e.key === 'ArrowUp') return dispatchTiles({ type: 'moveUp' })
        if (e.key === 'ArrowLeft') return dispatchTiles({ type: 'moveLeft' })
        if (e.key === 'ArrowRight') return dispatchTiles({ type: 'moveRight' })
      }}
    >
      <div className="w-max h-max grid grid-cols-4 grid-rows-4 gap-2">
        {tiles.map(line =>
          line.map((tile, index) => (
            <span
              key={index}
              className="w-16 h-16 rounded bg-gray-300 font-semibold text-2xl flex items-center justify-center"
            >
              {tile === 1 ? '' : tile}
            </span>
          ))
        )}
      </div>
    </div>
  )
}
