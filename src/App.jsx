import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout";
import SinglePostPage from "./pages/SinglePostPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index={true} element={<HomePage />} />
        <Route path="/post/:id" element={<SinglePostPage />} />
      </Route>
    </Routes>
  );
}

export default App;
