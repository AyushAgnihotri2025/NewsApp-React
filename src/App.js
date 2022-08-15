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
          <Route exact path="/" element={<News
            setProgress={setProgress}
            key="general"
            pageSize={pageSize}
            category="general"
            apikey={apikey} />} />
          <Route path="general" element={<News
            setProgress={setProgress}
            key="general"
            pageSize={pageSize}
            category="general"
            apikey={apikey} />} />
          <Route path="business" element={<News
            setProgress={setProgress}
            key="business"
            pageSize={pageSize}
            category="business"
            apikey={apikey} />} />
          <Route path="entertainment" element={<News
            setProgress={setProgress}
            key="entertainment"
            pageSize={pageSize}
            category="entertainment"
            apikey={apikey} />} />
          <Route path="health" element={<News
            setProgress={setProgress}
            key="health"
            pageSize={pageSize}
            category="health"
            apikey={apikey} />} />
          <Route path="science" element={<News
            setProgress={setProgress}
            key="science"
            pageSize={pageSize}
            category="science"
            apikey={apikey} />} />
          <Route path="sports" element={<News
            setProgress={setProgress}
            key="sports"
            pageSize={pageSize}
            category="sports"
            apikey={apikey} />} />
          <Route path="technology" element={<News
            setProgress={setProgress}
            key="technology"
            pageSize={pageSize}
            category="technology"
            apikey={apikey} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
