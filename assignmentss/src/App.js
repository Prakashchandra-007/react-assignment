import "./styles.css";
import Container from "./components/container/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetail from "./components/pages/userdetail/UserDetail";
export default function App() {
  
  return (
    <div className="App">
      {/* <Container /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}></Route>
          <Route path="/user/:id" element={<UserDetail  />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
