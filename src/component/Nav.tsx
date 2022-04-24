import { Link } from "react-router-dom";
import useFetch from "../hook/useFetch";

export interface INav {
  id: number;
  nav: number;
}

export default function Nav() {
  const navs: INav[] = useFetch("http://localhost:3003/navs");

  if (navs.length === 0) {
    return <div className="add_msg">Please add a menu</div>;
  }

  return (
    <ul className="nav">
      {navs.map((nav) => (
        <li key={nav.id}>
          <Link to={`/wordList/${nav.nav}`}>메뉴 {nav.nav}</Link>
        </li>
      ))}
    </ul>
  );
}
