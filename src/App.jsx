import "./App.css";

import { useState } from "react";

import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import Input from "./components/Input/Input";

function App() {
  const [bananas, setBananas] = useState(0);
  const [strawberries, setStrawberries] = useState(0);
  const [apples, setApples] = useState(0);
  const [kiwis, setKiwis] = useState(0);

  const [fruits, setFruits] = useState({
    bananas: 0,
    strawberries: 0,
    apples: 0,
    kiwis: 0,
  });

  function handleFruitChange(fruitName, newValue) {
    setFruits({ ...fruits, [fruitName]: newValue });
  }

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState(0);
  const [postalcode, setPostalcode] = useState("");
  const [frequency, setFrequency] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [comments, setComments] = useState("");
  const [privacy, setPrivacy] = useState(false);

  function reset() {
    setFruits({
      bananas: 0,
      strawberries: 0,
      apples: 0,
      kiwis: 0,
    });
  }

  function logValues() {
    console.log("Bananen:", fruits.bananas);
    console.log("Aardbeien:", fruits.strawberries);
    console.log("Appels:", fruits.apples);
    console.log("Kiwi's:", fruits.kiwis);
    console.log("Voornaam:", firstname);
    console.log("Achternaam:", lastname);
    console.log("Leeftijd:", age);
    console.log("Postcode:", postalcode);
    console.log("Bezorgfrequentie:", frequency);
    console.log("Bezorgmoment:", deliveryTime);
    console.log("Opmerkingen:", comments);
    console.log("Akkoord met privacyvoorwaarden:", privacy);
  }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <section className="fruitmand">
        <article
          className={`fruitmand__item ${fruits.bananas > 0 ? "chosen" : ""}`}
        >
          <h2>🍌Bananen</h2>
          <Counter
            value={fruits.bananas}
            setValue={(newValue) => handleFruitChange("bananas", newValue)}
          />
        </article>
        <article
          className={`fruitmand__item ${fruits.strawberries > 0 ? "chosen" : ""}`}
        >
          <h2>🍓Aardbeien</h2>
          <Counter
            value={fruits.strawberries}
            setValue={(newValue) => handleFruitChange("strawberries", newValue)}
          />
        </article>
        <article
          className={`fruitmand__item ${fruits.apples > 0 ? "chosen" : ""}`}
        >
          <h2>🍏 Appels</h2>
          <Counter
            value={fruits.apples}
            setValue={(newValue) => handleFruitChange("apples", newValue)}
          />
        </article>
        <article
          className={`fruitmand__item ${fruits.kiwis > 0 ? "chosen" : ""}`}
        >
          <h2>🥝 Kiwi's</h2>
          <Counter
            value={fruits.kiwis}
            setValue={(newValue) => handleFruitChange("kiwis", newValue)}
          />
        </article>
        <Button type="button" onClick={reset} value="Reset" />
      </section>
      <section className="contact">
        <h2>Bestelling</h2>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <Input
            label="Voornaam"
            value={firstname}
            id="name"
            name="name"
            setValue={setFirstname}
            type="text"
          />
          <Input
            label="Achternaam"
            value={lastname}
            id="lastname"
            name="lastname"
            setValue={setLastname}
            type="text"
          />
          <Input
            label="Leeftijd"
            value={age}
            id="age"
            name="age"
            setValue={setAge}
            type="number"
          />
          <Input
            label="Postcode"
            value={postalcode}
            id="postcode"
            name="postcode"
            setValue={setPostalcode}
            type="text"
          />

          <label htmlFor="frequency">Bezorgfrequentie:</label>
          <select
            id="frequency"
            name="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="Dagelijks">Dagelijks</option>
            <option value="Wekelijks" selected>
              Wekelijks
            </option>
            <option value="Maandelijks">Maandelijks</option>
          </select>
          <div>
            <label>
              <input
                type="radio"
                name="bezorgmoment"
                value="overdag"
                checked={deliveryTime === "overdag"}
                onChange={(e) => setDeliveryTime(e.target.value)}
              />
              Overdag
            </label>
            <label>
              <input
                type="radio"
                name="bezorgmoment"
                value="avond"
                checked={deliveryTime === "avond"}
                onChange={(e) => setDeliveryTime(e.target.value)}
              />
              's Avonds
            </label>
          </div>
          <label htmlFor="comments">Opmerkingen:</label>
          <textarea
            id="comments"
            name="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
          <div>
            <input
              type="checkbox"
              onChange={(e) => setPrivacy(e.target.checked)}
              value={privacy}
              id="privacy"
              name="privacy"
              required
            />
            <label htmlFor="privacy">
              Ik ga akkoord met de privacyvoorwaarden
            </label>
          </div>
          <Button type="submit" onClick={logValues} value="Verzend" />
        </form>
      </section>
    </>
  );
}

export default App;
