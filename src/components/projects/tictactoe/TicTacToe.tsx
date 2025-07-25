import { useState } from 'react';
import './tictactoe.css'
import { TURNS, WINNER_COMBOS } from '../../../constants'
import confeti from 'canvas-confetti';
import Square from './Square';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState<string | null | false>(null);

    const checkWinner = (boardToCheck: any) => {
        for (const combo of WINNER_COMBOS) {

            const [a, b, c] = combo

            if (boardToCheck[a] &&
                boardToCheck[a] === boardToCheck[b] &&
                boardToCheck[a] === boardToCheck[c]) {
                return boardToCheck[a]
            }
        }
        return null
    }

    const checkEndGame = (newBoard: any) => {
        return newBoard.every((square: any) => square !== null)
    }

    const updateBoard = (indice: any) => {
        //si ya tiene algo no actualizamos la posicion
        if (board[indice] || winner) return
        const newBoard = [...board]
        newBoard[indice] = turn
        setBoard(newBoard)

        const newTurn = turn === TURNS.O ? TURNS.X : TURNS.O
        setTurn(newTurn)

        const newWinner = checkWinner(newBoard)

        if (newWinner) {
            confeti()
            setWinner(() => newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
    }

    return (
        <div>
            <h2 style={{ color: '#7b64ff', textAlign: 'center' }}>¿Haz jugado 3 en raya?<br />Pues es tu momento</h2>
            <p style={{ textAlign: 'center' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus provident rerum maxime eius dolorem.</p>
            <div className="board">
                <section className="game">
                    {
                        board.map((item, index) => {
                            let Item=item;
                            item=Item
                            return (
                                <Square
                                    key={index} index={index} updateBoard={updateBoard} isSelected={false}>
                                    {board[index]}
                                </Square>
                            )
                        })
                    }
                </section>
                <section className="turn">
                    <Square updateBoard={() => {}} index={0} isSelected={turn === TURNS.O}>{TURNS.O}</Square>
                    <Square updateBoard={() => {}} index={0} isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                </section>
                {
                    winner !== null && (
                        <section className="winner">
                            <div className="text">
                                <h2>
                                    {
                                        winner === false
                                            ? 'Empate'
                                            : 'Gano'
                                    }
                                </h2>
                                <header className="win">
                                    {winner && <Square updateBoard={() => {}} index={0} isSelected={false}>{winner}</Square>}
                                </header>

                                <footer>
                                    <button onClick={resetGame}>empezar de nuevo</button>
                                </footer>
                            </div>
                        </section>
                    )
                }
            </div>
        </div>
    )
}

export default TicTacToe;
