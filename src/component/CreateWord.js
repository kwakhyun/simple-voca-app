import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";

export default function CreateWord() {
  const navs = useFetch("http://localhost:3003/navs");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
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
          setIsLoading(false);
        }
      });
    }
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const navRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>단어 입력란</label>
        <input type="text" placeholder="단어를 입력하세요" ref={engRef}></input>
      </div>
      <div className="input_area">
        <label>뜻 입력란</label>
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
      <button
        style={{
          opacity: isLoading ? 0.5 : 1,
        }}
      >
        {isLoading ? "저장 중.." : "저장"}
      </button>
    </form>
  );
}
