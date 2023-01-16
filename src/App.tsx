import LoginPage from "./components/login/Login";
import RegistrationPage from "./pages/RegistrationPage";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/main/Dashboard";
import ManagingQnA from "./pages/ManagingQnA";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/registration-link" element={<RegistrationPage />} />
        <Route path="/managing-qna" element={<ManagingQnA />} />
      </Route>
    </Routes>
  );
}

export default App;
