import { Link } from "react-router-dom";
import useFetch from "../hook/useFetch";

export default function Nav() {
  const navs = useFetch("http://localhost:3003/navs");

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
