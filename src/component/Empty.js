import { Link } from "react-router-dom";

export default function Empty() {
  return (
    <>
      <h2>Page not found</h2>
      <Link to="/"><button>돌아가기</button></Link>
    </>
  );
}
