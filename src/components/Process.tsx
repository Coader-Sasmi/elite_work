"use client";

export default function Process() {
  const ProcessArr = [
    {
      key: "1",
      icon: "./sketch.png",
      title: "Discovering Your Vision",
      desc: "We meet with you to discuss your vision, needs, budget, and timeline. This helps us understand your unique style and requirements.",
    },
    {
      key: "2",
      icon: "./graphic.png",
      title: "Sketching Your Dreams",
      desc: "Based on our consultation, we create initial design concepts and mood boards to visualize the space and overall aesthetic.",
    },
    {
      key: "3",
      icon: "./helmet.png",
      title: "Bringing Ideas to Life",
      desc: "Once you approve the concept, we develop detailed plans, 3D renderings, and material selections to bring your vision to life.",
    },
    {
      key: "4",
      icon: "./buildings.png",
      title: "Transforming Your Space",
      desc: "We oversee the transformation of your space, coordinating with contractors and managing the installation of furnishings and decor.",
    },
  ];
  return (
    <aside className="main-container py-10 flex flex-col gap-10">
      <section className="flex flex-col gap-6 justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="md:w-32 w-16 h-[0.01rem] bg-gray-400"></div>
          <div className="text-gray-400 px-4 uppercase">Process</div>
          <div className="md:w-32 w-16 h-[0.01rem] bg-gray-400"></div>
        </div>
        <h1 className="text-center md:text-6xl text-4xl font-semibold">
          Interior Process
        </h1>
        <p className="text-center text-gray-700">
          Transforming a space involves understanding and applying key design
          <br />
          principles to create a harmonious and functional environment.
        </p>
      </section>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 ">
        {ProcessArr?.map((curElm) => (
          <div
            key={curElm?.key}
            className="flex flex-col gap-8 justify-center items-center"
          >
            <div className="relative bg-primary rounded-full p-8 ">
              <img src={curElm?.icon} className="h-auto w-16" />
              <div className="absolute right-0 top-0">
                <p className="bg-secondary h-8 w-8 text-center p-1 rounded-full text-white">
                  {curElm?.key}.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-lg font-semibold">{curElm?.title}</h1>
              <p className="text-center text-gray-600">{curElm?.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </aside>
  );
}
