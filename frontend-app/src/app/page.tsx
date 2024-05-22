import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
        alt="Next.js logo"
        width={200}
        height={200}
      />

      <h1 className="text-4xl font-bold">Welcome to the frontend app!</h1>
      <p className="text-xl">This is a Next.js app.</p>

    </main>
  );
}
