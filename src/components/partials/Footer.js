import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-white"
        >
          DJ Events
        </a>

        <span className="text-sm text-white sm:text-center ">
          © 2023{" "}
          <a href="#" className="hover:underline">
            DJ Events™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
