import React from "react";
import Home from "../Home";
import Contact from "../Contact";
import PageContent from "../PageContent";

const Page = ({ currentPage, setCurrentPage, pages }) => {
  const renderPage = () => {
    if (currentPage.name === "Home") {
      document.title = "Home";
      return <Home pages={pages} setCurrentPage={setCurrentPage} />;
    }
    if (currentPage.name === "Let's Talk") {
      document.title = "Let's Talk";
      return <Contact pages={pages} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <>
      <PageContent>{renderPage()}</PageContent>
    </>
  );
};

export default Page;