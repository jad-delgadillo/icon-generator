import { FormGroup } from "@/components/FormGroup";
import { Button } from "@/components/button";
import Input from "@/components/input";
import { api } from "@/utils/api";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

const colors = [
  "blue",
  "red",
  "pink",
  "green",
  "orange",
  "yellow",
  "white",
  "black",
  "rgb colors",
  "original colors",
  "black and white",
];
const shapes = ["square", "circular", "rounded"];

const styles = [
  "vector",
  "digital art",
  "3d rendered",
  "pixelated",
  "Claude Monet",
  "pop art",
  "isometric",
  "illustrated",
  "hyper realism",
  "surrealism",
  "hd photograph",
  "hd render",
  "Salvador Dalí",
];

const GeneratePage: NextPage = () => {
  const [form, setForm] = useState({
    prompt: "",
    color: "",
    numberOfIcons: "1",
    shape: "",
    style: "",
  });
  const [error, setError] = useState("");
  const [imagesUrl, setImagesUrl] = useState<{ imageUrl: string }[]>([]);

  const generateIcon = api.generate.generateIcon.useMutation({
    onSuccess(data) {
      setImagesUrl(data);
    },
    onError(error) {
      setError(error.message);
    },
  });

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    generateIcon.mutate({
      ...form,
      numberOfIcons: parseInt(form.numberOfIcons),
    });
  }

  function updateForm(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };
  }

  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <>
      <Head>
        <title>alw | Generate Icons</title>
        <meta name="description" content="Generate incredible icons with AI." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" container flex min-h-screen flex-col bg-zinc-950 px-5 ">
        {!isLoggedIn && <></>}
        {isLoggedIn && <></>}
        <div className="mt-[8rem] flex flex-col gap-2 rounded-lg bg-zinc-900 p-2">
          <h1 className="">Generate your Icons</h1>
          <p>Fill the form below to start generatig your icons.</p>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="container mx-auto flex flex-col "
        >
          <div className="style">
            <h5>1. Describe what you want your icon to look like.</h5>
            <FormGroup>
              <label className="font-semibold">Prompt</label>
              <Input
                value={form.prompt}
                onChange={updateForm("prompt")}
                required
              ></Input>
            </FormGroup>
          </div>
          <div className="style">
            <h5>2. Pick up your icon color:</h5>
            <FormGroup className="grid grid-cols-4">
              {colors.map((color) => (
                <label key={color} className="flex gap-2  py-3 font-semibold">
                  <input
                    required
                    type="radio"
                    name="color"
                    checked={color === form.color}
                    onChange={() => setForm((prev) => ({ ...prev, color }))}
                  ></input>
                  {color}
                </label>
              ))}
            </FormGroup>
          </div>
          <div className="style">
            <h5>3. Pick up your icon shape:</h5>
            <FormGroup className="grid grid-cols-4">
              {shapes.map((shape) => (
                <label key={shape} className="flex gap-2  py-3 font-semibold">
                  <input
                    required
                    type="radio"
                    name="shape"
                    checked={shape === form.shape}
                    onChange={() => setForm((prev) => ({ ...prev, shape }))}
                  ></input>
                  {shape}
                </label>
              ))}
            </FormGroup>
          </div>
          <div className="style">
            <h5>4. Pick up your icon style:</h5>
            <FormGroup className="grid grid-cols-4">
              {styles.map((style) => (
                <label key={style} className="flex gap-2  py-3 font-semibold">
                  <input
                    required
                    type="radio"
                    name="style"
                    checked={style === form.style}
                    onChange={() => setForm((prev) => ({ ...prev, style }))}
                  ></input>
                  {style}
                </label>
              ))}
            </FormGroup>
          </div>
          <div className="style">
            <h5>5. How many dow you want?</h5>
            <FormGroup className="flex flex-col">
              <label>Number of icons</label>
              <div className="">
                <Input
                  inputMode="numeric"
                  pattern="[1-9]|10"
                  value={form.numberOfIcons}
                  required
                  onChange={updateForm("numberOfIcons")}
                ></Input>
              </div>
            </FormGroup>
          </div>
          {isLoggedIn && (
            <>
              {error && (
                <div className="mt-4 flex animate-pulse cursor-default items-center justify-center rounded-lg bg-red-900  p-2 font-semibold text-white ring-1 ring-red-500 ">
                  {error}
                </div>
              )}
              <Button
                isLoading={generateIcon.isLoading}
                disabled={generateIcon.isLoading}
                className="mb-10 mt-4 block w-28"
              >
                Submit
              </Button>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Button
                type="submit"
                disabled={true}
                className="mt-4 w-28 bg-neutral-900 text-neutral-500 opacity-50 ring-neutral-700 hover:text-neutral-500"
              >
                Submit
              </Button>
              <p className="my-3 inline-block w-fit  cursor-default rounded-lg border border-red-500 px-2 py-2  text-red-500">
                You have to Log-in to be able to submit.
              </p>
            </>
          )}
        </form>

        {imagesUrl.length > 0 && (
          <div className="mt-4">
            <h4>Your Icons</h4>
            <section className="mb-12 grid grid-cols-4 gap-4 ">
              {imagesUrl.map(({ imageUrl }) => (
                <Image
                  key={imageUrl}
                  src={imageUrl}
                  width={512}
                  height={512}
                  alt="image generated from the app"
                  className="w-full rounded-lg"
                />
              ))}
            </section>
          </div>
        )}
      </main>
    </>
  );
};

export default GeneratePage;
