import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./button";
import { useBuyCredits } from "@/hooks/useBuyCredits";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  const { buyCredits } = useBuyCredits();
  const isLoggedIn = !!session.data;

  return (
    <header className="fixed w-screen ">
      <div className="mx-2 mt-2 flex h-[4.5rem] max-w-7xl items-center justify-between rounded-xl border border-cyan-800 p-[0.2rem] shadow-lg shadow-emerald-800 backdrop-blur-lg md:mx-auto">
        <div className=" flex h-[4.4rem] w-screen flex-row items-center justify-between  rounded-xl p-3 px-2 backdrop-blur-lg md:px-20">
          <Link
            className="rounded-lg p-1 transition-all hover:bg-neutral-900"
            href={"/"}
          >
            <h3 className="rounded-full border p-2 ">alw</h3>
          </Link>

          {isLoggedIn && (
            <div className="">
              <Link
                className="rounded-lg p-3 font-semibold ring-1 ring-white transition-all hover:bg-gray-950 hover:text-indigo-500 hover:ring-indigo-600"
                href={"/collection"}
              >
                My collection
              </Link>
            </div>
          )}

          <ul className="flex items-center justify-center gap-4">
            {isLoggedIn && (
              <>
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
              <li>
                <Button
                  onClick={() => {
                    signIn().catch(console.error);
                  }}
                >
                  Log in
                </Button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
