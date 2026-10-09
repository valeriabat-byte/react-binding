import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [bgColor, setBgColor] = useState("transparent");

    const [saluto, setSaluto] = useState("Benvenuto!");

    const toDo = ["stirare", "lavare i piatti", "cucire", "cucinare", "ballare"];
    const [barrati, setBarrati] = useState(new Set());

    const [accepted, setAccepted] = useState([]);

    function handleCount() {
        setCount(count + 1);
    }

    function resetCount() {
        setCount(0);
    }

    function handleColor() {
        setBgColor(bgColor === "transparent" ? "#e0f2fe" : bgColor === "#e0f2fe" ? "#90EE90" : "transparent");
    }

    function handleSaluto(lingua) {
        setSaluto(lingua === "ita" ? "Benvenuto!" : lingua === "eng" ? "Welcome!" : "Bienvenido!");
    }

    function handleList(item) {
        setBarrati(prev => {
            const nuovoSet = new Set(prev);
            nuovoSet.has(item) ? nuovoSet.delete(item) : nuovoSet.add(item);
            return nuovoSet;
        });
    }

    return (
        <>
            <section
                className="text-center my-4 p-5 rounded"
                style={{ backgroundColor: bgColor, transition: "background-color 0.3s ease" }}
            >
                <p className="text-dark fw-bold mx-2" style={{ fontSize: '80px' }}>{count}</p>
                <button className="btn btn-primary mx-2" onClick={handleCount}>PLUS</button>
                <button className="btn btn-warning mx-2 text-white" onClick={resetCount}>RESET</button>
                <button className="btn btn-info mx-2 text-white" onClick={handleColor}>COLOR</button>
            </section>


            <section
                className="text-center my-4 p-5 rounded">

                <p className="text-dark fw-bold mx-2" style={{ fontSize: '80px' }}>{saluto}</p>
                <button className="btn btn-primary mx-2" onClick={() => handleSaluto("ita")}>ITA</button>
                <button className="btn btn-warning mx-2 text-white" onClick={() => handleSaluto("eng")}>ENG</button>
                <button className="btn btn-info mx-2 text-white" onClick={() => handleSaluto("spa")}>SPA</button>
            </section>


            <section className="text-center my-4 p-4">
                <ul className="list-group mx-auto" style={{ minWidth: "250px", maxWidth: "400px" }}>
                    {toDo.map((item, index) => (
                        <li key={index} className="list-group-item"
                            onClick={() => handleList(item)}
                            style={{
                                textDecoration: barrati.has(item) ? "line-through" : "none",
                                color: barrati.has(item) ? "#9ca3af" : "inherit",
                                cursor: "pointer",
                            }}>
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

            {/** checkbox */}
            <section className="flex justify-content-center align-items-center">
                <div className="form-check">
                    <input type="checkbox" name="account" id="acceptance"
                        className="form-check-input border-black border-3"
                        /** controlla se c'è lo zero nell'elemento dell'array accepted */
                        checked={accepted.includes(0)}
                        onChange={(e) => {
                            if (e.target.checked) {
                                {/** metto lo zero nell elemento dell array accepted */ }
                                setAccepted([...accepted, 0]);
                            } else {
                                {/** tolgo lo zero modificando l'array con filter, facendo passare tutti tranne quelli che contengono zero */ }
                                setAccepted(accepted.filter((n) => n !== 0));
                            }
                        }}></input>
                    <label htmlFor="acceptance" className="form-check-label"
                        style={{ textDecoration: accepted.includes(0) ? "line-through" : "none" }}>
                        {toDo[0]}</label>
                </div>

                <div className="form-check">
                    <input type="checkbox" name="account" id="acceptance"
                        className="form-check-input border-black border-3"
                        checked={accepted.includes(1)}
                        onChange={(e) => {
                            if (e.target.checked) {
                                setAccepted([...accepted, 1]);
                            } else {
                                setAccepted(accepted.filter((n) => n !== 1));
                            }
                        }}></input>
                    <label htmlFor="acceptance" className="form-check-label"
                        style={{ textDecoration: accepted.includes(1) ? "line-through" : "none" }}>
                        {toDo[1]}</label>
                </div>

                {/*<div className="form-check">
                    <input type="checkbox" name="account" id="acceptance"
                        className="form-check-input border-black border-3"
                        checked={accepted}
                        onChange={(e) => {
                            setAccepted(e.target.checked)
                        }}></input>
                    <label htmlFor="acceptance" className="form-check-label" style={{ textDecoration: accepted ? "line-through" : "none" }}>
                        {toDo[1]}</label>
                </div>*/}
            </section>
        </>
    );
}