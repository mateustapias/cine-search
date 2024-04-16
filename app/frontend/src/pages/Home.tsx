import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.le-systeme-solaire.net/rest/bodies', {
          params: { data: 'name' }
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const starsArray: any[] = [];
        response.data.bodies.forEach(body => starsArray.push(body.name));
        setStars(starsArray);
      } catch (error) {
        console.error('Request failed:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <h1>
      {stars.map((star, i) => (
        <p key={i}>
          {star}
        </p>
      ))}
    </h1>
  );
}

export default Home;