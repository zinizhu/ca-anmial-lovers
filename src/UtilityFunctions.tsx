export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JavaScript
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}-${day}-${year}`;
}

// Fetch dog info from backend
export const fetchDog = async (id: string, setDog: Function) => {
  const response = await fetch(`http://localhost:8080/api/dog/info/${id}`);
  const dogInfoFromBackend = await response.json();
  setDog(dogInfoFromBackend.dog);
};
