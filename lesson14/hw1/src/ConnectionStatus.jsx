import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState("online");

  useEffect(() => {
    const handleOnline = () => {
      setStatus("online");
    };
    const handleOffline = () => {
      setStatus("offline");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className={`status ${status === "offline" ? "status_offline" : ""}`}>
      {status}
    </div>
  );
};
export default ConnectionStatus;
