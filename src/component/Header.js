import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">SIMPLE VOCA</Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" className="link">
          단어 추가
        </Link>
        <Link to="/create_nav" className="link">
          메뉴 추가
        </Link>
      </div>
    </div>
  );
}
