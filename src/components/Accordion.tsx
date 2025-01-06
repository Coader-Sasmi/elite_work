"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useState } from "react";

export default function AccordionExpandDefault() {
  const AccordionArr = [
    {
      key: 1,
      header: "History",
      desc: "Founded in 1997, Elite Work was born out of a passion for creating beautiful and functional spaces. Over the years, we have grown from a small team of dedicated designers into a leading interior design firm. Our journey began with a simple mission: to transform ordinary spaces into extraordinary experiences. Through innovative design solutions and a commitment to excellence, we have successfully completed numerous projects, each reflecting our dedication to quality and creativity.",
    },
    {
      key: 2,
      header: "Mission",
      desc: "At Elite Work, our mission is to enhance the lives of our clients by creating spaces that are both aesthetically pleasing and highly functional. We believe that a well-designed environment can significantly impact one's well-being and productivity. Our goal is to deliver personalized design solutions that reflect our clients' unique tastes and needs while maintaining the highest standards of quality and professionalism.",
    },
    {
      key: 3,
      header: "Vision",
      desc: "Our vision is to be a global leader in the interior design industry, renowned for our creativity, innovation, and exceptional service. We aspire to continuously push the boundaries of design, embracing new trends and technologies to create spaces that inspire and delight. At Elite Work, we are committed to making the world a more beautiful place, one room at a time.",
    },
  ];

  const [expanded, setExpanded] = useState(1); // Default open accordion key

  const handleChange = (panelKey: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panelKey : false); // Toggle expansion
  };
  return (
    <div className="flex flex-col gap-4 shadow-none">
      {AccordionArr?.map((curElm) => (
        <Accordion
          key={curElm?.key}
          defaultExpanded={curElm?.key === 1}
          expanded={expanded === curElm?.key}
          onChange={handleChange(curElm?.key)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className="shadow-none"
          >
            <p className="text-lg font-semibold">{curElm?.header}</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray-500">{curElm?.desc}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
