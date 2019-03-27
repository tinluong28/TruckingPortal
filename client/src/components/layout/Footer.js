import React from "react";

const footer = () => {
  return (
    <div>
      <footer className="navbar navbar-light bg-light text-center">
        Copyright &copy; {new Date().getFullYear()} Trucking Portal
      </footer>
    </div>
  );
};

export default footer;
