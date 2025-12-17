import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto p-10">
      <h1 className="flex bg-amber-300 before:h-5 before:w-1 before:bg-amber-200">
        Luiz
      </h1>
      <h2 className="flex before:mr-1 before:h-4 before:w-1 before:bg-blue-600">
        Hondo
      </h2>
    </div>
  );
}
