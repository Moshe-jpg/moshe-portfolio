import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    {
      name: "Home",
    },
    {
      name: "Let's Talk",
    },
  ]);

  // sets the current page to 0 and can be dynamically updated based on the buttons that are clicked inside the components
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
      <Navbar
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div id="top"></div>
      <main>
        <Page
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Page>
      </main>
      <Footer pages={pages} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
