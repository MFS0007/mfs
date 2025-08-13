import { useState } from "react";

import logo from "../assets/mfs-logo.jpg";
import logoNew from "../assets/logo/mfs-logo-new-white.svg";
import linkedinlogo from "../assets/linkedin.jpg";

function Content() {
  const [tap, setTap] = useState(0);

  return (
    <>
      <main>
        <div className="h-flex h-center-div">
          <a>
            <img
              src={logo}
              alt="mfs portfolio logo"
              className="mfs-logo m-fullwidth"
              onClick={() => setTap(() => tap + 1)}
            />
          </a>
        </div>
        <p>
          You have tapped the logo <button>{tap}</button> times!!
        </p>
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
      </main>
    </>
  );
}

export default Content;
