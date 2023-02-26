import { useState, useEffect } from "react";
import cardImages from "./Components/Images";
import './App.css'
import Header from "../src/Components/Header";
import Grid from "../src/Components/Grid";



const App = (props) => {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);


    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}));
        setCards(shuffledCards);
        setTurns(0);
    };

    useEffect(() => {
        shuffleCards();
    }, []);

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);

    };

    return (
        <div>
           <Header turns={turns} onShuffle={shuffleCards}/>
           <Grid cards={cards} choiceOne={choiceOne} choiceTwo={choiceTwo} disabled={disabled} handleChoice={handleChoice}/>
           
        </div>
    )
}

export default App;