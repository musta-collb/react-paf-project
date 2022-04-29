import React, { PureComponent, useState } from "react";
import Notification from "./notification";

const Notifications = () => {
  const notifications = [
    {
      date: "2022",
      categorie: "Hp noteBook 22",
      message: "Le stock est expiré",
      status: "danger",
    },
    {
      date: "2022",
      categorie: "Hp noteBook 22",
      message: "Le stock est expiré",
      status: "info",
    },
  ];
  return (
    <div className="w-full">
      {notifications.map((notification) => {
        return <Notification notification={notification} />;
      })}
    </div>
  );
};

export default Notifications;
