import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import styled from "styled-components";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Search />
      <Category />
      <Pages />
    </>
  );
}

export default App;
