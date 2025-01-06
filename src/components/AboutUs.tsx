import { Accordion } from ".";

export default function AboutUs() {
  return (
    <aside className="main-container py-10 flex flex-col gap-10">
      <section className="flex flex-col gap-6 justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="md:w-32 w-16 h-[0.01rem] bg-gray-400"></div>
          <div className="text-gray-400 px-4">ABOUT US</div>
          <div className="md:w-32 w-16 h-[0.01rem] bg-gray-400"></div>
        </div>
        <h1 className="text-center md:text-6xl text-4xl font-semibold">
          Our Love for
          <br /> Interior Design
        </h1>
        <p className="text-center text-gray-700">
          We are a passionate team dedicated to creating stunning interiors.
        </p>
      </section>
      <section className="w-full flex lg:flex-row flex-col gap-8">
        <div className="w-full">
          <img src="Hero_1.jpg" className="rounded-md" />
        </div>
        <div className="w-full">
          <Accordion />
        </div>
      </section>
    </aside>
  );
}
