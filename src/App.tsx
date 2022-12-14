import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
export default App;
