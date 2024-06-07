import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import { DogDetailsPage } from "./DogDetailsPage";
import { SignUpForm } from "./SignUpForm";

const Info = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      This is the info page.
      <button onClick={handleClick}>back</button>
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/info" element={<Info />} />
      <Route path="/dog-detail/:id" element={<DogDetailsPage />} />
      <Route path="/sign-up-form" element={<SignUpForm />} />
    </Routes>
  );
}

export default App;
