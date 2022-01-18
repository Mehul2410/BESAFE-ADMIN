const login = async (req, res) => {
  console.log(req.body);
  const response = await fetch(
    "https://besaferestapi.herokuapp.com/api/admin",
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      // headers: headers,
      body: JSON.stringify(req.body),
    }
  );
  res.json(await response.json());
};

export default login;
