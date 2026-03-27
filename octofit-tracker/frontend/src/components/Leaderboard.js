import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const endpoint = `${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
  const url = `https://${endpoint}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaders(results);
        console.log('Leaderboard API endpoint:', url);
        console.log('Fetched leaderboard:', results);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, [url]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map((leader, idx) => (
          <li key={leader.id || idx}>{JSON.stringify(leader)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
