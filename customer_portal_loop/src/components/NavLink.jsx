import React from "react";
import  {Link} from "react-scroll"
function NavLink({ to, name, onClose, ...rest }) {

  return (
    <Link to={to} spy={true} smooth={true} offset={50} duration={2000} onClick={onClose}> 
        {name}
    </Link>
  );
}

export default NavLink;