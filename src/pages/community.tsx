import { api } from "@/utils/api";
import { type Icon } from "@prisma/client";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

const CommunityPage: NextPage = () => {
  const icons = api.icons.getCommunityIcons.useQuery();

  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <>
      <Head>
        <title>Community Icons</title>
        <meta name="description" content="Community Icons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" container flex min-h-screen flex-col bg-zinc-950 px-5 ">
        {!isLoggedIn && <></>}
        <div className="mt-[8rem] flex flex-col gap-2 rounded-lg bg-zinc-900 p-2">
          <h1 className="">Community Icons</h1>
          <p>Here you&#39;ll find what the community has created.</p>
          {isLoggedIn && (
            <>
              <ul className="grid grid-cols-2 items-center justify-center gap-4 md:grid-cols-6">
                {icons.data?.map((icon: Icon) => (
                  <li key={icon.id}>
                    <Image
                      src={`https://alw-icon-generator.s3.us-east-2.amazonaws.com/${icon.id}`}
                      alt={icon.prompt ?? "an image of an icon"}
                      width={100}
                      height={100}
                      className="w-full rounded-lg "
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default CommunityPage;
