import React, {useState} from 'react';

function ToggleSwitch (props) {

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  return(

    <div onClick={props.onClick} className="switch">
      <span className={isActive ? "light" : "dark"} onClick={handleToggle}>
        <span></span>
      </span>
    </div>

  )
}
export default ToggleSwitch;