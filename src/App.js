import React, { createContext, useLayoutEffect, useState } from "react";
import SideNav from "./components/sidenav";
import Conversations from "./components/conversations";
import CollectionList from "./components/collections-list";
import "./App.scss";
import MobileSwitchBar from "./components/mobile-switch-bar";

export const windowSize = createContext();

const App = () => {
  const [sizeData, setSizeData] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useLayoutEffect(() => {
    const handleResize = () => {
      setSizeData({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <windowSize.Provider value={sizeData}>
      <div className={`${sizeData.width < 768 ? "mobile-container" : 'd-flex'}`}>
        {sizeData.width > 768 ? <SideNav />: <MobileSwitchBar />}
        {sizeData.width > 1024 ? <Conversations /> : null}
        <CollectionList />
      </div>
    </windowSize.Provider>
  );
};

export default App;
