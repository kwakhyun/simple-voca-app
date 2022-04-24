import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [navs, setNavs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/navs")
      .then((res) => res.json())
      .then((data) => setNavs(data));
  }, []);
  
  return (
    <ul className="nav">
      {navs.map((nav) => (
        <li key={nav.id}>
          <Link to={`/wordList/${nav.nav}`}>Nav {nav.nav}</Link>
        </li>
      ))}
    </ul>
  );
}
