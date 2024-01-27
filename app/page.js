import { DataForm } from "./components/data-form";

export default function Home() {
  return (
    <main className="h-screen grid place-items-center">
      <div className="container mx-auto px-5 md:w-[50%] lg:w-[40%] xl:w-[30%]">
        <DataForm />
      </div>
    </main>
  );
}
