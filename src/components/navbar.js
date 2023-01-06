function Navbar() {
  // Inline styles declaration
  const liStyle = { color: "green" };

  return (
    <ul>
      {/* Inline style example */}
      <li style={liStyle}>
        <a href="#" className="px-4 flex justify-start items-center">
          <span className="text-2xl pr-2">Home</span>
          <svg
            className="h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            ></path>
          </svg>
        </a>
      </li>
      <li>
        <a href="#" className="px-4 flex justify-start items-center">
          <span className="text-2xl pr-2">About</span>
          <svg
            className="w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </a>
      </li>
      <li>
        <a href="#" className="px-4 flex justify-start items-center">
          <span className="text-2xl pr-2">Contact</span>
          <svg
            className="w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
