import Image from "next/image";

export default function Home() {
  return (
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Hello, World!</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded ">Click</button>
      </section>

  );
}
