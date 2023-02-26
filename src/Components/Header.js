const Header = ({ turns, onShuffle }) => {

return(
        <div>
            <h1 className="header">Test Your Memory</h1>

            <button onClick={onShuffle}>New Game</button>
            <div>
                <p className="turns">Turns: {turns} / 15</p>
            </div>


        </div>




)



}

export default Header;