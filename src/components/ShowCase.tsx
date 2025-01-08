"use client";
export default function ShowCase() {
  const slideSection = [
    {
      id: 1,
      image: "./Hero_1.jpg",
      col: "col-span-2",
      row: "row-span-2",
    },
    {
      id: 2,
      image: "./Hero_2.jpg",
      col: "col-span-1",
      row: "row-span-1",
    },
    {
      id: 3,
      image: "./Hero_3.jpg",
      col: "col-span-1",
      row: "row-span-1",
    },
    {
      id: 4,
      image: "./Hero_1.jpg",
      col: "col-span-1",
      row: "row-span-1",
    },
    {
      id: 5,
      image: "./Hero_2.jpg",
      col: "col-span-1",
      row: "row-span-1",
    },
    {
      id: 6,
      image: "./Hero_3.jpg",
      col: "col-span-1",
      row: "row-span-2",
    },
    {
      id: 7,
      image: "./Hero_1.jpg",
      col: "col-span-1",
      row: "row-span-2",
    },
    {
      id: 8,
      image: "./Hero_2.jpg",
      col: "col-span-2",
      row: "row-span-1",
    },
    {
      id: 9,
      image: "./Hero_3.jpg",
      col: "col-span-2",
      row: "row-span-1",
    },
    // {
    //   id: 10,
    //   image: "./Hero_1.jpg",
    //   col: "col-span-1",
    //   row: "row-span-1",
    // },
    // {
    //   id: 11,
    //   image: "./Hero_2.jpg",
    //   col: "col-span-1",
    //   row: "row-span-1",
    // },
    // {
    //   id: 12,
    //   image: "./Hero_3.jpg",
    //   col: "col-span-1",
    //   row: "row-span-2",
    // },
    // {
    //   id: 13,
    //   image: "./Hero_1.jpg",
    //   col: "col-span-1",
    //   row: "row-span-2",
    // },
    // {
    //   id: 14,
    //   image: "./Hero_2.jpg",
    //   col: "col-span-1",
    //   row: "row-span-1",
    // },
    // {
    //   id: 15,
    //   image: "./Hero_3.jpg",
    //   col: "col-span-1",
    //   row: "row-span-1",
    // },
  ];
  return (
    <aside className="main-container py-10 flex flex-col gap-10">
      <section className="flex flex-col gap-6 justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="md:w-32 w-16 h-[0.01rem] bg-gray-400"></div>
          <div className="text-gray-400 px-4 uppercase">quit space</div>
          <div className="md:w-32 w-16 h-[0.01rem] bg-gray-400"></div>
        </div>
        <h1 className="text-center md:text-6xl text-4xl font-semibold">
          Showcase
        </h1>
      </section>
      <section className="h-[47rem]">
        <div className="grid grid-cols-4 grid-rows-6 gap-2 h-[70rem]">
          {slideSection.map((item) => (
            <div key={item.id} className={`${item.col} ${item.row}`}>
              <img
                src={item.image}
                alt="loading"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
