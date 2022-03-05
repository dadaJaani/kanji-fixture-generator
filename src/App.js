import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const [fixtures, setFixtures] = useState([]);
    const [list1, setList1] = useState([]);
    const [list2, setList2] = useState([]);
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);

    const addPlayer = () => {
        setList1([...list1, ""]);
        setList2([...list2, ""]);
        setNumberOfPlayers(numberOfPlayers + 2);
    };

    const removePlayer = () => {
        setList1(list1.slice(0, list1.length - 1));
        setList2(list2.slice(0, list2.length - 1));
        setNumberOfPlayers(numberOfPlayers - 2);
    };

    const generateFixtures = () => {
        let result = [];

        for (var i = 0; i < list1.length; i++) {
            for (var j = 0; j < list2.length; j++) {
                if (!result[j]) {
                    result[j] = [];
                }
                result[j][i] = `${list1[i]} vs ${list2[j]}`;
            }
        }

        console.log("result", result);
        setFixtures(result);
    };

    console.log("fixtures", fixtures);

    return (
        <div className="App">
            <h1>Kanji Exclusive Fixture Generator</h1>

            <div className="lists-container">
                <div className="list">
                    <h2>Team 1</h2>
                    {list1.map((item, index) => (
                        <input
                            value={item}
                            onChange={(e) => {
                                let temp = [...list1];
                                temp[index] = e.target.value;
                                setList1(temp);
                            }}
                        />
                    ))}
                </div>
                <div className="list">
                    <h2>Team 2</h2>
                    {list2.map((item, index) => (
                        <input
                            value={item}
                            onChange={(e) => {
                                let temp = [...list2];
                                temp[index] = e.target.value;
                                setList2(temp);
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="button-group">
                <button className="button-round-player button-add-player" onClick={addPlayer}>
                    Add Players
                </button>
                <button className="button-round-player button-remove-player" onClick={removePlayer}>
                    Remove Players
                </button>
            </div>

            <h2>{numberOfPlayers} Players</h2>

            <button className="button-generate" onClick={generateFixtures}>
                Generate!
            </button>

            <div className="fixtures-result">
                {/* <div className="fix-day-container"> */}
                {fixtures.length > 0 &&
                    fixtures.map((dayList, ind2) => (
                        <div key={ind2} className="fix-day-container">
                            <h3>Day {ind2 + 1}</h3>
                            <div className="fix-day-list">{dayList.length > 0 && dayList.map((item, ind1) => <label key={ind1}>{item}</label>)}</div>
                        </div>
                    ))}
                {/* </div> */}
            </div>
        </div>
    );
}

export default App;
