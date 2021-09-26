import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  
  const handleLogout = () => {
        dispatch({ type: "LOGIN_START" });
        dispatch({ type: "LOGIN_FAILURE", payload: "SIGN_OUT" });
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Travel With</span>
        </Link>
      </div>
      <div className="topbarCenter">
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/travel" className="topbarLink">Travel</Link>
          <Link to="/chat" className="topbarLink">Chat</Link>
          <Link to="/tourista" className="topbarLink">Outdoors</Link>
        </div>
        <div className="topbarLinks">
            <Link to="/" className="topbarLink topbarItem" onClick={handleLogout}>Sign Out</Link>
        </div>
      </div>
    </div>
  );
}
