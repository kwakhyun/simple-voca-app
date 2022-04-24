import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Nav from "./component/Nav";
import WordList from "./component/WordList";
import CreateWord from "./component/CreateWord";
import CreateNav from "./component/CreateNav";
import Empty from "./component/Empty";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/wordList/:nav" element={<WordList />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_nav" element={<CreateNav />} />
          <Route path="*" element={<Empty />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
