import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import { DogDetailsPage } from "./DogDetailsPage/DogDetailsPage";
import { SignUpForm } from "./SignUpForm/SignUpForm";
import { CompleteSignUp } from "./SignUpForm/CompleteSignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dog-detail/:id" element={<DogDetailsPage />} />
      <Route path="/sign-up-form/:id" element={<SignUpForm />} />
      <Route path="/thanks-for-sign-up" element={<CompleteSignUp />} />{" "}
    </Routes>
  );
}

export default App;
