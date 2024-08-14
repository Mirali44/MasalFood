export const postUserInfo = async (user) => {
  const response = await fetch("http://10.243.100.1:8080/api/contact-us/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to post user information");
  }

  const data = await response.json();
  return data;
};

export const postOrder = async (user) => {
  const response = await fetch(
    "http://10.243.100.1:8080/api/orders/add-order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to post user information");
  }

  const data = await response.json();
  console.log(data);
  return data;
};
