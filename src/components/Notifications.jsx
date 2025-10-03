import React, { useState } from 'react';

const Notifications = () => {
  const [notes, setNotes] = useState([]);

  const refresh = () => {
    setNotes([
      'Alice liked your post',
      'Bob commented on your post',
      'Charlie reacted with 😂',
    ]);
  };

  return (
    <div>
      <h2>Notifications</h2>
      <button className="button" onClick={refresh}>Refresh Notifications</button>
      <section className="notificationsList">
        {notes.map((n, i) => (
          <div key={i}>{n}</div>
        ))}
      </section>
    </div>
  );
};

export default Notifications;
