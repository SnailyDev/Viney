import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ScrollLink = ({
  to,
  children,
  className = "", // Accept className prop
}: {
  to: string;
  children: React.ReactNode;
  className?: string; // Optional className prop
}) => {
  const navigate = useNavigate();

  // This function will be triggered when the link is clicked
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default navigation behavior
    window.scrollTo(0, 0); // Scroll to the top of the page

    // Wait for the scroll to complete, then navigate
    setTimeout(() => {
      if (to) {
        navigate(to); // Navigate using react-router's navigate function
      }
    }, 50); // 50 ms delay to ensure scroll happens first
  };

  return (
    <Link
      to={to} // React Router's to prop
      onClick={handleClick} // Trigger the handleClick when clicked
      className={className} // Apply className to the <Link> tag
      style={{ cursor: "pointer" }} // Optionally add inline styles
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
