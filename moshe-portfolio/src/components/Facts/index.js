// import React, { useRef, useEffect } from "react";

// const Facts = () => {
//   const headerRef = useRef(null);

//   useEffect(() => {
//     const headerTextArray = [
//       { content: "Dull" },
//       { content: "Flat " },
//       { content: "Blah" },
//       { content: "Lame" },
//     ];

//     let currentIndex = 0;
//     const interval = setInterval(() => {
//       headerRef.current.textContent = headerTextArray[currentIndex].content;
//       currentIndex = (currentIndex + 1) % headerTextArray.length;
//     }, 4000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <section id="facts">
//       <header className="facts-header">
//         <h1>
//           Normal Can Be... <span className="second-text" ref={headerRef}>Drab</span>
//           <span className="second-text__before"></span>
//         </h1>
//       </header>
//     </section>
//   );
// };

// export default Facts;

import React from "react";

const Facts = () => {

  return (
    <section id="facts">
      <header className="facts-header">
        <h1>
          Facts Section
        </h1>
      </header>
    </section>
  );
};

export default Facts;
