import { useParams } from "react-router-dom";

const DogDetailsPage = () => {
  const { id } = useParams();
  // Fetch and display dog details based on id
  return <div>Dog Detail Page for dog with ID: {id}</div>;
};

export default DogDetailsPage;
