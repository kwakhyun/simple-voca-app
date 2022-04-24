import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { INav } from "./Nav";

export default function CreateWord() {
  const navs: INav[] = useFetch("http://localhost:3003/navs");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isLoading && engRef.current && korRef.current && navRef.current) {
      setIsLoading(true);

      const eng = engRef.current.value;
      const kor = korRef.current.value;
      const nav = navRef.current.value;

      fetch("http://localhost:3003/words", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eng,
          kor,
          nav,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("단어가 저장되었습니다.");
          navigate("/wordList/" + nav);
          setIsLoading(false);
        }
      });
    }
  }

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const navRef = useRef<HTMLSelectElement>(null);

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
