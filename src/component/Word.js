import { useState } from "react";

export default function Word({ word }) {
  const { isShow, setIsShow } = useState(false);

  function toggleShow() {
    setIsShow(!isShow);
  }

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 확인</button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}
