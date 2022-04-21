import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

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
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
