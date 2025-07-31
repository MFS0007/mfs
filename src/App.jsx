import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import linkedinlogo from "./assets/linkedin.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <div className="card">
        <a href="https://www.linkedin.com/in/m-farooq-s" target="_blank">
          <img
            src={linkedinlogo}
            className="mfs-logo linkedin-logo"
            alt="Linkedin logo"
          />
        </a>
      </div>

      <p className="read-the-docs">
        Click on the Linkedin <code>logo</code> to know more about me
      </p>
    </>
  );
}

export default App;
