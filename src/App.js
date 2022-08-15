import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const pageSize = 8;
  const apikey = "d919b28ed32b43baad717e2c2d12d5ff";
  const [progress, setProgress] = useState(10);

  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <LoadingBar
          color="#f11946"
          progress={progress}
          height={3}
          shadow={true}
        />
        <Routes>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              category="general"
              apikey={apikey}
            ></News>
          </Route>
          <Route path="general" element={<News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              category="general"
              apikey={apikey} />}/>
          <Route path="business">
            <News
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              category="business"
              apikey={apikey}
            ></News>
          </Route>
          <Route path="entertainment">
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              category="entertainment"
              apikey={apikey}
            ></News>
          </Route>
          <Route path="health">
            <News
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              category="health"
              apikey={apikey}
            ></News>
          </Route>
          <Route path="science">
            <News
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              category="science"
              apikey={apikey}
            ></News>
          </Route>
          <Route path="sports">
            <News
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              category="sports"
              apikey={apikey}
            ></News>
          </Route>
          <Route path="technology">
            <News
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              category="technology"
              apikey={apikey}
            ></News>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
