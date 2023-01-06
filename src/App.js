import React, { useState } from "react";
import Navbar from "./components/navbar";

function App() {
  const [showMenuForMobile, setShowMenuForMobile] = useState(false);

  // Inline styles declaration
  const sectionHeader = { color: "green" };

  const toggleShowMenu = () => {
    console.log("Entered toggleShowMenu");
    setShowMenuForMobile(!showMenuForMobile);
  };

  return (
    <div>
      <header className="p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-primaryRed text-lg font-bold uppercase md:text-xl">
            Test Tailwind
          </h1>
          <div className="flex items-center pl-10">
            <div className="inline-block pr-2">
              <a href="#" className="btn border-2 border-primaryRed">
                Login
              </a>
            </div>
            <button
              type="button"
              onClick={toggleShowMenu}
              className="md:hidden"
            >
              <svg
                className="w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="grid md:grid-cols-4">
        {/* Always show Navbar for md+ resolutions */}
        <nav className="hidden md:block md:col-span-1 pl-8 mb-4">
          <Navbar></Navbar>
        </nav>
        {/* Conditionally show Navbar below md resolution */}
        {showMenuForMobile && (
          <nav className="pl-8 mb-4">
            <Navbar></Navbar>
          </nav>
        )}
        {/* alternative implementation 
        <nav className={`pl-8 mb-4 ${!showMenu ? "hidden" : ""}`}>
          <Navbar></Navbar>
        </nav> */}
        <main className="md:col-span-3 p-8 bg-gray-100">
          <div>
            {/* Example using Tailwind and inline styles */}
            <h2 className="mb-4 pb-2 border-b" style={sectionHeader}>
              Section 1 (single responsive card)
            </h2>
            <div className="card">
              <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
              <p className="text-gray-500 text-lg">
                React and Tailwind CSS in action. This site tests features of
                Tailwind, in React.
              </p>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-primaryRed">
              Section 2 (multiple responsive cards using Flebox)
            </h2>
            <div className="flex">
              <div className="card mr-4">
                <p className="text-3xl text-gray-700 font-bold mb-5">Tip 1</p>
                <p className="text-gray-500 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="card">
                <p className="text-3xl text-gray-700 font-bold mb-5">Tip 2</p>
                <p className="text-gray-500 text-lg">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-primaryRed">
              Section 3 (multiple responsive cards using CSS grid)
            </h2>
            <div className="grid md:grid-cols-3 md:gap-10">
              <div className="card">
                <p className="text-3xl text-gray-700 font-bold mb-5">Tip 1</p>
                <p className="text-gray-500 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="card">
                <p className="text-3xl text-gray-700 font-bold mb-5">Tip 2</p>
                <p className="text-gray-500 text-lg">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="card">
                <p className="text-3xl text-gray-700 font-bold mb-5">Tip 3</p>
                <p className="text-gray-500 text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
