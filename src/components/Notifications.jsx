import React, { useState } from 'react';

const Notifications = ({ notifications, setNotifications }) => {
  const refreshNotifications = () => {
    setNotifications([
      'New comment on your post!',
      'Alice liked your post!',
      'Bob started following you!',
    ]);
  };

  return (
    <div>
      <h2>Notifications</h2>
      <button className="button" onClick={refreshNotifications}>Refresh Notifications</button>
      <section className="notificationsList">
        {notifications.map((n, idx) => <div key={idx}>{n}</div>)}
      </section>
    </div>
  );
};

export default Notifications;
