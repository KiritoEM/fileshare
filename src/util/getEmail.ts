const getEmail = () => {
  let userEmail = null;

  if (typeof window !== "undefined") {
    userEmail = localStorage.getItem("userEmail");
  }

  return userEmail;
};

export default getEmail;
