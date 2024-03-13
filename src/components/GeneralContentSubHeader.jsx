const GeneralContentSubHeader = ({
  title,
  taskTabs,
  handleCurrentTaskTab,
  currentTaskTab,
}) => {
  return (
    <>
      <header className='flex flex-col p-8 pb-0 font-semibold text-2xl capitalize mb-4'>
        {title}
      </header>
      <div className='pl-8 flex gap-4 capitalize text-xs font-medium'>
        {taskTabs?.map((tab) => {
          const { id, name: tabName, text } = tab;
          console.log(id);
          return (
            <span
              key={id}
              name={tabName}
              className={`${
                id === currentTaskTab
                  ? 'border-b-2 border-primary cursor-pointer'
                  : 'pb-1 cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-primary'
              }`}
              onClick={() => handleCurrentTaskTab(id)}
            >
              {text}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default GeneralContentSubHeader;
