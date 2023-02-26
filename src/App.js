import { useState, useEffect } from "react";
import cardImages from "./Components/Images";
import './App.css'
import Header from "../src/Components/Header";


const App = (props) => {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);

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

    return (
        <div>
           <Header turns={turns} onShuffle={shuffleCards}/>
        </div>
    )
}

export default App;