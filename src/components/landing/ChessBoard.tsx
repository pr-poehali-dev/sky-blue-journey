const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const RANKS = [8, 7, 6, 5, 4, 3, 2, 1]

const PIECES: Record<string, string> = {
  'a8': '♜', 'b8': '♞', 'c8': '♝', 'd8': '♛', 'e8': '♚', 'f8': '♝', 'g8': '♞', 'h8': '♜',
  'a7': '♟', 'b7': '♟', 'c7': '♟', 'd7': '♟', 'e7': '♟', 'f7': '♟', 'g7': '♟', 'h7': '♟',
  'a2': '♙', 'b2': '♙', 'c2': '♙', 'd2': '♙', 'e2': '♙', 'f2': '♙', 'g2': '♙', 'h2': '♙',
  'a1': '♖', 'b1': '♘', 'c1': '♗', 'd1': '♕', 'e1': '♔', 'f1': '♗', 'g1': '♘', 'h1': '♖',
}

export default function ChessBoard() {
  return (
    <div className="select-none">
      <div className="flex">
        <div className="flex flex-col justify-around w-5 pr-1">
          {RANKS.map(rank => (
            <span key={rank} className="text-[10px] text-neutral-400 text-right leading-none" style={{ height: 48 / 8 + 'vmin', lineHeight: 48 / 8 + 'vmin' }}>
              {rank}
            </span>
          ))}
        </div>
        <div>
          <div
            className="grid border border-neutral-700"
            style={{ gridTemplateColumns: 'repeat(8, 1fr)', width: 'min(48vmin, 400px)', height: 'min(48vmin, 400px)' }}
          >
            {RANKS.map(rank =>
              FILES.map((file, fi) => {
                const isLight = (rank + fi) % 2 === 0
                const piece = PIECES[`${file}${rank}`]
                const isWhitePiece = piece && ['♙', '♖', '♘', '♗', '♕', '♔'].includes(piece)
                return (
                  <div
                    key={`${file}${rank}`}
                    className="flex items-center justify-center relative"
                    style={{
                      background: isLight ? '#f0d9b5' : '#b58863',
                    }}
                  >
                    {piece && (
                      <span
                        className="text-[3.5vmin] md:text-[2.8vmin] leading-none"
                        style={{
                          color: isWhitePiece ? '#ffffff' : '#000000',
                          textShadow: isWhitePiece
                            ? '0 0 1px #000, 0 0 2px #000'
                            : '0 0 1px #fff, 0 0 2px #fff4',
                        }}
                      >
                        {piece}
                      </span>
                    )}
                  </div>
                )
              })
            )}
          </div>
          <div className="flex" style={{ width: 'min(48vmin, 400px)' }}>
            {FILES.map(file => (
              <span
                key={file}
                className="text-[10px] text-neutral-400 text-center"
                style={{ flex: 1 }}
              >
                {file}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
