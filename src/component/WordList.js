import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import Word from "./Word";

export default function WordList() {
  const { nav } = useParams();
  const words = useFetch(`http://localhost:3003/words?nav=${nav}`);

  return (
    <>
      <h2>메뉴 {nav}</h2>
      {words.length === 0 && <div className="add_msg">Please add a word</div>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </>
  );
}
