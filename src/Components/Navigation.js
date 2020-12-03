import React, { useState } from "react";

//COMPONENTS
import Navlinks from './Navlinks';
import Icon from '../Images/nav_icon.svg';

const Nav_ = () => {

  const [inHover, setHover] = useState(false);

return (

    <div className="nav"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="icon" style={{backgroundImage: `url(${Icon})`}}></div>
      {inHover && <Navlinks />}
    </div>

  );
};
export default Nav_;

