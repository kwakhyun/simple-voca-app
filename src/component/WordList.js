import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function WordList() {
  const { nav } = useParams();
  const wordList = dummy.words.filter(
    (wordList) => wordList.nav === Number(nav)
  );

  return (
    <>
      <h2>Nav 0</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word key={word.id} word={word} />
          ))}
        </tbody>
      </table>
    </>
  );
}
