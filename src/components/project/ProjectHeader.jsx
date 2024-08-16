function ProjectHeader({ activeFilter, onClick, statusFilterItem }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-md">لیست پروژه ها</h1>

      <div className="flex justify-between items-center gap-4">
        {/* status */}
        <div className="flex items-center gap-x-2">
          <span>وضعیت</span>
          <div className="bg-white rounded-lg py-2 px-2 md:px-4 flex gap-2 md:gap-12 ">
            {statusFilterItem.map((item) => (
              <StatusButton
                key={item.id}
                activeFilter={activeFilter}
                onClick={onClick}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;

function StatusButton({ activeFilter, onClick, item }) {
  return (
    <button
      className={`px-4 py-1 ${
        activeFilter === item.value
          ? "bg-blue-500 text-white rounded-lg font-bold"
          : ""
      }`}
      onClick={() => onClick(item.value)}
    >
      {item.title}
    </button>
  );
}
