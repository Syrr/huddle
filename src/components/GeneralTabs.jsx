const GeneralTabs = ({ tabs, currentTab, handleCurrentTab, size }) => {
  return (
    <div
      className={`pl-8 flex gap-4 capitalize ${size} font-medium border-b-[1px] border-b-neutral-content bg-base-200`}
    >
      {tabs?.map((tab, index) => {
        const { icon, text } = tab;
        return (
          <div
            key={index}
            className={`${
              index === currentTab
                ? 'p-1 border-b-2 border-primary cursor-pointer'
                : 'p-1 cursor-pointer border-b-2 border-transparent hover:border-primary hover:bg-base-300 hover:bg-opacity-35 hover:rounded-sm'
            } ${icon && 'flex items-center gap-1'}`}
            onClick={() => handleCurrentTab(index)}
          >
            {icon}
            {text}
          </div>
        );
      })}
    </div>
  );
};

export default GeneralTabs;
