import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const refreshNotifications = () => {
    setNotifications([
      "You have a new follower!",
      "Your post was liked!",
      "Someone commented on your post"
    ]);
  };

  return (
    <div>
      <button className="button" onClick={refreshNotifications}>Refresh Notifications</button>
      <section className="notificationsList">
        {notifications.map((n,i)=> <div key={i}>{n}</div>)}
      </section>
    </div>
  )
};

export default Notifications;
