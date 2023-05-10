"use client";
import { Fragment } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import HeaderLink from "./HeaderLink";

export const DropDownMenu = () => {
  const session = useSession();
  const isLoggedIn = !!session.data;
  const pathname = usePathname();
  return (
    <Popover className="">
      <Popover.Overlay className="fixed inset-0 z-20 backdrop-blur-sm" />

      <div className=" flex flex-col md:mb-4  md:px-0">
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-neutral-100 hover:text-neutral-200 focus:outline-none   ">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Popover.Button>
        </div>
        <Popover.Group
          as="nav"
          className="ml-4 hidden pr-5 transition-all md:flex md:grow-0 md:flex-col"
        >
          <div className="mb-3 cursor-default px-3 text-2xl font-semibold">
            alw.
          </div>
          <Link
            className={
              pathname == "/"
                ? "mb-2 w-fit rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold text-stone-50 transition duration-300"
                : "mb-2 w-fit rounded-md px-3 py-2 text-sm text-stone-400 transition duration-300 hover:bg-neutral-800  hover:text-stone-50"
            }
            href="/"
          >
            Home
          </Link>
          <Link
            className={
              pathname == "/about"
                ? "mb-2 w-fit rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold  text-stone-50 transition duration-300"
                : "mb-2 w-fit rounded-md px-3 py-2 text-sm text-stone-400 transition duration-300 hover:bg-neutral-800  hover:text-stone-50"
            }
            href="/about"
          >
            About
          </Link>
          <Link
            className={
              pathname == "/projects"
                ? "mb-2 w-fit rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold text-stone-50 transition duration-300 "
                : "mb-2 w-fit rounded-md px-3 py-2 text-sm text-stone-400 transition duration-300 hover:bg-neutral-800  hover:text-stone-50"
            }
            href="/projects"
          >
            Projects
          </Link>

          <Link
            className={
              pathname == "/resources"
                ? "mb-2 w-fit rounded-md bg-neutral-800 px-3 py-2 text-sm font-semibold text-stone-50 transition duration-300 "
                : "mb-2 w-fit rounded-md px-3 py-2 text-sm text-stone-400 transition duration-300 hover:bg-neutral-800  hover:text-stone-50"
            }
            href="/resources"
          >
            Resources
          </Link>
        </Popover.Group>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-20 origin-top-right transform p-2 transition md:hidden"
        >
          {({ close }) => (
            <div className="divide-y-2 divide-neutral-50 rounded-lg bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/">
                      <h1 className="text-2xl font-semibold text-white">
                        alw.
                      </h1>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="space-y-6 px-5 py-6">
                <div className="grid grid-cols-1 justify-items-stretch gap-x-8 gap-y-4 text-right">
                  <Link
                    className={
                      pathname == "/"
                        ? "rounded-md border bg-neutral-800 px-3 py-2  text-center text-sm text-neutral-50 transition duration-300"
                        : " rounded-md border px-3 py-2 text-center text-sm text-stone-400 transition duration-300 hover:text-stone-500"
                    }
                    href="/"
                  >
                    Home
                  </Link>
                  {isLoggedIn && (
                    <>
                      <Link
                        className={
                          pathname == "/generate"
                            ? "rounded-md border bg-neutral-800 px-3 py-2  text-center text-sm text-neutral-50 transition duration-300"
                            : " rounded-md border px-3 py-2 text-center text-sm text-stone-400 transition duration-300 hover:text-stone-500"
                        }
                        href={"/generate"}
                      >
                        Generate Icon
                      </Link>

                      <Link
                        className={
                          pathname == "/collection"
                            ? "rounded-md border bg-neutral-800 px-3 py-2  text-center text-sm text-neutral-50 transition duration-300"
                            : " rounded-md border px-3 py-2  text-center text-sm text-stone-400 transition duration-300 hover:text-stone-500"
                        }
                        href="/collection"
                      >
                        My Collection
                      </Link>
                      <Link
                        className={
                          pathname == "/community"
                            ? "rounded-md border bg-neutral-800 px-3 py-2  text-center text-sm text-neutral-50 transition duration-300"
                            : "rounded-md border px-3 py-2  text-center text-sm text-stone-400 transition duration-300 hover:text-stone-500"
                        }
                        href="/community"
                      >
                        Community
                      </Link>
                    </>
                  )}
                  {isLoggedIn && (
                    <>
                      <div className="flex justify-end">
                        <Button
                          variant="secondary"
                          onClick={() => {
                            signOut().catch(console.error);
                          }}
                          className={
                            pathname == "/resources"
                              ? "rounded-md px-3 py-2 text-sm font-bold text-red-500 transition duration-300"
                              : "inline-block w-fit rounded-md border border-red-500 px-3 py-2 text-sm text-red-500 transition duration-300  "
                          }
                        >
                          Sign Out
                        </Button>
                      </div>
                    </>
                  )}
                  {!isLoggedIn && (
                    <>
                      <Button
                        className=""
                        onClick={() => {
                          signIn().catch(console.error);
                        }}
                      >
                        Log in
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
