"use client";

// import { useState } from "react";
import "./globals.css";
interface WrapperProps {
  children: React.ReactNode;
}

// const ErrorSimulator = ({
//   message = "An error occurred",
// }: {
//   message?: string;
// }) => {
//   const [error, setError] = useState(false);

//   if (error) throw new Error(message);

//   return (
//     <button
//       title="Simulate an error"
//       className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-small "
//       onClick={() => setError(true)}
//     >
//       Simulate Error
//     </button>
//   );
// };

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      {/* <div className="absolute top-0 left-4 -translate-y-1/2">
        <ErrorSimulator message="Simulate error in root layout" />
      </div> */}
      {children}
    </div>
  );
};

//className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300"
