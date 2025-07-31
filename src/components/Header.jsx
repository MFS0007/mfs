import { useState } from "react";
import logo from "../assets/mfs-logo.jpg";

function Header() {
  const [tap, setTap] = useState(0);

  return (
    <>
      <div className="h-flex h-center-div">
        {/* <a href=""></a> */}
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
    </>
  );
}

export default Header;
