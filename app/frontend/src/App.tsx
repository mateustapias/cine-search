import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App: React.FC = () => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [stars, setStars] = useState<any[]>([]);
//   const name = 'proxima';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.api-ninjas.com/v1/stars', {
//           params: { name },
//           headers: {
//             'X-Api-Key': '9JJTx6tErKRRT9Uagjl8cw==ZiNng0p70ANHmnJw'
//           }
//         });
//         setStars(response.data);
//       } catch (error) {
//         console.error('Request failed:', error);
//       }
//     };

//     fetchData();
//   }, [name]);

//   return (
//     <div>
//       <h1>Star Data:</h1>
//       <ul>
//         {stars.map((star, index) => (
//           <li key={index}>{JSON.stringify(star)}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;