import { useState } from "react";
import "./styles.css";

export default function NumberInput() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    if (/^-?\d*$/.test(input)) {
      setValue(input);
      
      const num = parseInt(input, 10);
      if (!isNaN(num)) {
        if (num < 0) {
          setMessage("Enter a positive value");
          setNumbers([]);
        } else {
          setMessage("");
          if (num % 2 === 0) {
            setNumbers([num + 2, num + 4, num + 6]);
          } else {
            setNumbers([num + 2, num + 4, num + 6].map(n => (n % 2 === 0 ? n + 1 : n)));
          }
        }
      } else {
        setNumbers([]);
        setMessage("");
      }
    }
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="number"
          value={value}
          onChange={handleChange}
          className="input-field"
          placeholder="Enter a number"
        />
      </div>
      {message && <p className="error-message">{message}</p>}
      {numbers.length > 0 && (
        <p className="success-message">Next numbers: {numbers.join(", ")}</p>
      )}
    </div>
  );
}
