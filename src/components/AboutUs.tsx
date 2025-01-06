import { Accordion } from ".";

export default function AboutUs() {
  const NumberArr = [
    {
      key: "1",
      number: "64",
      desc: `Clients Around the World`,
    },
    {
      key: "2",
      number: "124",
      desc: "Projects Completed",
    },
    {
      key: "3",
      number: "244K",
      desc: "Square Feet",
    },
  ];
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
          <img src="Hero_1.jpg" className="rounded-md w-auto h-full" />
        </div>
        <div className="w-full flex flex-col gap-6">
          <Accordion />
          <div className="grid md:grid-cols-3 gap-5 py-8">
            {NumberArr?.map((curElm) => (
              <div
                key={curElm?.key}
                className="flex flex-col gap-3 justify-center items-center"
              >
                <h1 className="text-4xl font-semibold">{curElm?.number}</h1>
                <div
                  className={`w-52 h-[0.01rem] ${
                    curElm?.key === "2" ? "bg-gray-200" : "bg-gray-300"
                  }`}
                ></div>
                <h1 className="uppercase text-gray-600 text-sm">
                  {curElm?.desc}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
}
