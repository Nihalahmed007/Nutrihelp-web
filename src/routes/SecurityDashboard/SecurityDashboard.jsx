import React, { useEffect } from "react";

const SecurityDashboard = () => {
  useEffect(() => {
    window.location.href = "http://localhost:8081/security-dashboard";
  }, []);

  return <p>Loading Security Dashboard...</p>;
};

export default SecurityDashboard;