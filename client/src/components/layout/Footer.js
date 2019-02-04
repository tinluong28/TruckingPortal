import React from "react";

const footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white nt-5 p-4 text-center mt-5">
        Copyright &copy; {new Date().getFullYear()} Trucking Portal
      </footer>
    </div>
  );
};

export default footer;
