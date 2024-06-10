"use client";
import useCartService from "@/hooks/store/useCartStore";
import { Session } from "inspector";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

function Menu() {
  const { items, init } = useCartService();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const signOutHandler = () => {
    signOut({ callbackUrl: "/signin" });
    init();
  };
  const { data: session } = useSession();
  return (
    <div>
      <ul className="flex items-start">
        <li>
          <Link
            href={"/cart"}
            className="btn btn-ghost rounded-btn text-2xl hover:text-purple-600"
          >
            <AiOutlineShoppingCart className="hover:text-purple-600" />
            {mounted && items.length !== 0 && (
              <div className="badge badge-secondary border border-black bg-black text-white ">
                {items.reduce((a, c) => a + c.qty, 0)}
              </div>
            )}
          </Link>
        </li>

        {session && session.user ? (
          <>
            <li>
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-ghost rounded-btn ">
                  {session.user.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button
                      type="button"
                      onClick={signOutHandler}
                      className="btn btn-ghost rounded-btn hover:text-purple-600 "
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </>
        ) : (
          <li>
            <button
              type="button"
              className="btn btn-ghost rounded-btn text-2xl hover:text-purple-600"
              onClick={() => signIn()}
            >
              {" "}
              <IoPersonOutline className="hover:text-purple-600" />
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Menu;
