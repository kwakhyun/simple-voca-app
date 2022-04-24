import { useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";

export default function CreateNav() {
  const navs = useFetch("http://localhost:3003/navs");
  const navigate = useNavigate();

  function addNav() {
    fetch("http://localhost:3003/navs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nav: navs.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("메뉴가 추가되었습니다.");
        navigate("/");
      }
    });
  }

  return (
    <div>
      <h2>현재 메뉴 : {navs.length}개</h2>
      <button onClick={addNav}>메뉴 추가</button>
    </div>
  );
}
