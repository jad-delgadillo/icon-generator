import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./button";
import { useBuyCredits } from "@/hooks/useBuyCredits";
import Link from "next/link";
import { api } from "@/utils/api";
import HeaderLink from "./HeaderLink";
import { DropDownMenu } from "./DropDownMenu";

export default function Header() {
  const session = useSession();
  const { buyCredits } = useBuyCredits();
  const isLoggedIn = !!session.data;
  const credits = api.user.getCredits.useQuery();

  return (
    <header className="fixed z-10 w-screen">
      <div className="mx-2 mt-2 flex h-[4.5rem] max-w-7xl items-center justify-between rounded-xl border border-cyan-800 p-[0.2rem] shadow-lg shadow-emerald-800 backdrop-blur-lg md:mx-auto">
        <div className=" flex h-[4.4rem] w-screen flex-row items-center justify-between  rounded-xl p-3 px-2 backdrop-blur-lg md:px-3">
          <div className="flex items-center gap-4">
            <Link
              className="rounded-lg p-1 transition-all hover:bg-neutral-900"
              href={"/"}
            >
              <h3 className="rounded-full border p-2 ">alw</h3>
            </Link>
            {isLoggedIn && (
              <div className="hidden gap-4 md:flex">
                <div className="">
                  <Link
                    className="mx-1 text-neutral-500 transition-all hover:border-b hover:text-white"
                    href={"/collection"}
                  >
                    My collection
                  </Link>
                </div>
                <div className="">
                  <Link
                    className="mx-1 text-neutral-500 transition-all hover:border-b hover:text-white"
                    href={"/community"}
                  >
                    Community
                  </Link>
                </div>
              </div>
            )}
          </div>
          <ul className=" flex items-center justify-center gap-4 md:hidden">
            {isLoggedIn && (
              <>
                <p className="cursor-default rounded-lg bg-neutral-900 p-2  font-semibold ">
                  <span className="text-green-400">Credits:</span>{" "}
                  {credits.data}
                </p>
                <li>
                  <Button
                    onClick={() => {
                      buyCredits().catch(console.error);
                    }}
                  >
                    Buy Credits
                  </Button>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <>
                <li>
                  <Button
                    onClick={() => {
                      signIn().catch(console.error);
                    }}
                  >
                    Log in
                  </Button>
                </li>
              </>
            )}
            <div className=" z-50 mr-2 flex md:hidden">
              {" "}
              <DropDownMenu />{" "}
            </div>
          </ul>
          <ul className=" hidden items-center justify-center gap-4 md:flex">
            {isLoggedIn && (
              <>
                <p className="cursor-default rounded-lg bg-neutral-900 p-2  font-semibold ">
                  <span className="text-green-400">Credits:</span>{" "}
                  {credits.data}
                </p>
                <li>
                  <Button
                    onClick={() => {
                      buyCredits().catch(console.error);
                    }}
                  >
                    Buy Credits
                  </Button>
                </li>
                <li>
                  <HeaderLink
                    className=" my-8  text-base font-semibold hover:animate-none hover:shadow-2xl hover:shadow-cyan-300   md:my-0 "
                    href={"/generate"}
                  >
                    Generate Icon
                  </HeaderLink>
                </li>

                <li>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      signOut().catch(console.error);
                    }}
                  >
                    Log out
                  </Button>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <>
                <li>
                  <HeaderLink
                    className=" my-8  text-base font-semibold hover:animate-none hover:shadow-2xl hover:shadow-cyan-300   md:my-0 "
                    href={"/generate"}
                  >
                    Generate Icon
                  </HeaderLink>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      signIn().catch(console.error);
                    }}
                  >
                    Log in
                  </Button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
