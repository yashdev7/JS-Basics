import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("Jan");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`Celebrate ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`The User is : ${admin ? "Admin" : "Not Admin"}.`);
  }, [admin]);

  return (
    <div className="App">
      <section>
        <p>Congratulations {name}!</p>
        <button onClick={() => setName("Will")}>Change Winner</button>

        <p>{admin ? "Logged In" : "Not Logged In"}</p>
        <button onClick={() => setAdmin(true)}>Log In</button>
      </section>
    </div>
  );
}

export default App;
