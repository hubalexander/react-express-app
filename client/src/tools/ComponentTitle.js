//Fetches welcome text from server
const welcomeText = async () => {
  const response = await fetch("/api");
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

export default welcomeText;
