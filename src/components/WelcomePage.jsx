import { useState } from "react";
import { Link } from "react-router-dom";
export const WelcomePage = () => {
  const [names, setNames] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleChange = (event) => {
    setNames(event.target.value);
  };

  const handlesubmit = () => {
    setVisible(true);
  };
  return (
    <div>
      {!visible ? (
        <div>
          <input onChange={handleChange} placeholder="Enter your name" />
          <button onClick={handlesubmit}>Submit</button>
        </div>
      ) : null}
      <h1>Welcome {visible ? names : null}</h1>
      <Link to="/question">Question</Link>
    </div>
  );
};
