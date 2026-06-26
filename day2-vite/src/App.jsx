// import React from "react";

// const App = () => {
//   let count = 10;
//   console.log(count);

//   return (
//     <div>
//       <h1>Count is - {count}</h1>

//       <button
//         onClick={() => {
//           count++;
//           console.log(count);
//         }}
//       >
//         Increment{" "}
//       </button>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count is - {count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);// we can aslo do count++ but it is post increment update then increment so we can use pre  increment ++count better count+1
        }}// here it is clouser+ HOF Very imp
      >
        Increment{" "}
      </button>
    </div>
  );
};

export default App;