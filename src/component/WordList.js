import { useParams } from "react-router-dom";
import Word from "./Word";

export default function WordList() {
  const { nav } = useParams();
  const words = useFetch(`http://localhost:3003/words?nav=${nav}`);

  return (
    <>
      <h2>Nav 0</h2>
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
