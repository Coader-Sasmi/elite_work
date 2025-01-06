"use client";

export default function Services() {
  const ServiceArr = [
    {
      key: "1",
      title: "Conceptual Design",
      desc: " Developing initial design concepts and ideas based on client input and project parameters.",
      subDes1: "Feasibility Studies",
      subDes2: "Conceptual Design",
      subDes3: "Design Development",
    },
    {
      key: "2",
      title: "Schematic Design",
      desc: "Creating preliminary sketches and diagrams to explore design options and spatial relationships.",
      subDes1: "Conceptualization",
      subDes2: "Spatial Planning",
      subDes3: "Client Collaboration",
    },
    {
      key: "3",
      title: "Interior Design",
      desc: "Planning and designing interior spaces, selecting finishes, furnishings, and fixtures to create functional.",
      subDes1: "Space Planning",
      subDes2: "Aesthetics and Style",
      subDes3: "Project Management",
    },
  ];
  return (
    <aside className="main-container py-10 flex flex-col gap-10">
      <section className="flex flex-col gap-6 justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="md:w-32 w-16 h-[0.01rem] bg-gray-400"></div>
          <div className="text-gray-400 px-4 uppercase">Services</div>
          <div className="md:w-32 w-16 h-[0.01rem] bg-gray-400"></div>
        </div>
        <h1 className="text-center md:text-6xl text-4xl font-semibold">
          Expertly crafting
          <br /> your dream
        </h1>
        <p className="text-center text-gray-700">
          We turn your interior design dreams into reality with our specialized
          touch in elegant and <br /> functional spaces.
        </p>
      </section>
      <section className="flex flex-col gap-5 py-10">
        {ServiceArr?.map((curElm) => (
          <div
            key={curElm?.key}
            className={`grid lg:grid-cols-12 gap-5 lg:place-items-center hover:bg-primary/5 p-5 ${
              curElm?.key === "2" ? "bg-primary/10" : ""
            }`}
          >
            <h1 className="lg:col-span-4 text-start text-lg font-semibold">
              {curElm?.title}
            </h1>
            <p className="lg:col-span-4 text-start text-gray-500">
              {curElm?.desc}
            </p>
            <div className="lg:col-span-4 flex flex-col lg:flex-col md:flex-row lg:gap-1 gap-1 md:gap-5">
              <p className="font-semibold">+ {curElm?.subDes1}</p>
              <p className="font-semibold">+ {curElm?.subDes2}</p>
              <p className="font-semibold">+ {curElm?.subDes3}</p>
            </div>
          </div>
        ))}
      </section>
    </aside>
  );
}
