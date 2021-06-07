import "./css/App.css";
import React, { useState, useEffect } from "react";
import welcomeText from "./tools/ComponentTitle";
import memberFetch from "./tools/Fetch";
function App() {
  
  //Web hooks. 
  const [data, setData] = useState("");
  const [isFetched, setIsFetched] = useState(false);
  const [memberName, setMemberName] = useState("");

  useEffect(() => {
    welcomeText()
      .then((res) => setData(res.title))
      .catch((err) => console.log(err));
  }, []);

  const getAll = async () => {
    setMemberName(await memberFetch());
    setIsFetched(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!isFetched ? (
          <div>
            <p>{data}</p>
            <p className="FunctionButton" onClick={getAll}>
              Get members
            </p>
          </div>
        ) : null}

        {isFetched ? (
          <div className="MemberNames">
            <p>{memberName[0]}</p>
            <p>{memberName[1]}</p>
            <p>{memberName[2]}</p>
            <p>{memberName[3]}</p>
            <p
              className="FunctionButton"
              onClick={() => window.location.reload()}
            >
              Return
            </p>
          </div>
        ) : null}
      </header>
    </div>
  );
}

export default App;
