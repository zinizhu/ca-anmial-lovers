import { Routes, Route, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/info");
  }
  return  (
    <>
    This is the home page.
    <button onClick={handleClick}>info</button> 
  </>
  )
}

const Info = () => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate("/");
  }
  return (
    <>
    This is the info page.
    <button onClick={handleClick}>back</button> 
    </>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  );
}

export default App;
