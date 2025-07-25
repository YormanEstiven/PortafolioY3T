export interface SquareProps {
    children: React.ReactNode;
    updateBoard: (index: any) => void;
    index: number;
    isSelected: boolean;
}

 const Square: React.FC<SquareProps> = ({ children, updateBoard, index, isSelected }) => {

    const className = `square ${isSelected ? "is-selected" : ''}`;
    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    )
}
export default Square