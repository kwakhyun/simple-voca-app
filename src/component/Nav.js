import dummy from "../db/data.json";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="nav">
      {dummy.navs.map((nav) => (
        <li key={nav.id}>
          <Link to={`/wordList/${nav.nav}`}>Nav {nav.nav}</Link>
        </li>
      ))}
    </ul>
  );
}
