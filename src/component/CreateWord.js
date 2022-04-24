import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";

export default function CreateWord() {
  const navs = useFetch("http://localhost:3003/navs");
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3003/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eng: engRef.current.value,
        kor: korRef.current.value,
        nav: navRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("단어가 저장되었습니다.");
        navigate("/wordList/" + navRef.current.value);
      }
    });
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const navRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="단어를 입력하세요" ref={engRef}></input>
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="뜻을 입력하세요" ref={korRef}></input>
      </div>
      <div className="input_area">
        <label>메뉴 선택</label>
        <select ref={navRef}>
          {navs.map((nav) => (
            <option key={nav.id} value={nav.nav}>
              Nav {nav.nav}
            </option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}
