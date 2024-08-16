import persianNumbers from "../../utils/persianNumber";

function ProjectTable({ filteredProjectsData }) {
  return (
    <>
      <table className="table-auto md:table-fixed w-full mt-9 overflow-hidden rounded-lg shadow-lg">
        <thead className="bg-slate-200 text-gray-500 ">
          <tr className="mb-8">
            <th className="px-4 py-4">#</th>
            <th>عنوان پروژه</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {filteredProjectsData.map((project) => (
            <TBodyRows project={project} key={project._id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProjectTable;

function TBodyRows({ project }) {
  return (
    <>
      <tr className="mt-2 border-b border-gray-200">
        <td className="px-4 py-4">{persianNumbers(project._id)}</td>
        <td>{project.title}</td>
        <td>{persianNumbers(project.budget)}</td>
        <td>{new Date(project.deadline).toLocaleDateString("fa-IR")}</td>
        <td>
          <span
            className={`text-white rounded-full py-1 px-2 text-sm text-center
                    ${
                      project.status === "CLOSED"
                        ? "bg-red-500"
                        : "bg-green-500 px-5"
                    }`}
          >
            {project.status === "CLOSED" ? "بسته" : "باز"}
          </span>
        </td>
        <td className="cursor-pointer">⚙️</td>
      </tr>
    </>
  );
}
