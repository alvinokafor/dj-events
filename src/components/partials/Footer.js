import React from "react";

export default function Footer() {
  return (
    <footer class="p-4 md:p-8 lg:p-10 bg-gray-800">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          class="flex justify-center items-center text-2xl font-semibold text-white"
        >
          DJ Events
        </a>

        <span class="text-sm text-white sm:text-center ">
          © 2023{" "}
          <a href="#" class="hover:underline">
            DJ Events™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
