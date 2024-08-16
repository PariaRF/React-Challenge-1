import { useEffect, useState } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectTable from "./ProjectTable";

const statusFilterItem = [
  {
    id: 1,
    title: "همه",
    value: "",
  },
  {
    id: 2,
    title: "باز",
    value: "OPEN",
  },
  {
    id: 3,
    title: "بسته",
    value: "CLOSED",
  },
];

function ProjectLayout({ projectsData }) {
  const [activeFilter, setActiveFilter] = useState("");
  const [filteredProjectsData, setFilterProjectsData] = useState([]);

  useEffect(() => {
    setFilterProjectsData(projectsData);
  }, []);

  const handleClick = (activeValue) => {
    setActiveFilter(activeValue);
    let filteredData;

    if (activeValue === "") {
      filteredData = projectsData;
    } else {
      filteredData = projectsData.filter(
        (project) => project.status === activeValue
      );
    }
    setFilterProjectsData(filteredData);
  };

  return (
    <>
      <ProjectHeader
        activeFilter={activeFilter}
        onClick={handleClick}
        statusFilterItem={statusFilterItem}
      />
      <ProjectTable filteredProjectsData={filteredProjectsData} />
    </>
  );
}

export default ProjectLayout;
