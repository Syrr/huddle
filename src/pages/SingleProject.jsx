import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProjectTab } from '../features/project/ProjectSlice';
import GeneralTabs from '../components/GeneralTabs';
import { projectTabs } from '../utils/data';
import ProjectHeader from '../components/project/ProjectHeader';
import ProjectsOverview from '../components/project/ProjectOverview';
import ProjectBoard from '../components/project/ProjectBoard';
const SingleProject = () => {
  const { currentProjectTab } = useSelector((store) => store.project);
  const dispatch = useDispatch();
  const handleCurrentTab = (tabIndex) => {
    dispatch(setCurrentProjectTab({ tabIndex }));
  };

  const renderCurrentTab = () => {
    switch (currentProjectTab) {
      case 0:
        return <ProjectsOverview />;

      case 2:
        return <ProjectBoard />;

      default:
        <ProjectsOverview />;
    }
  };
  return (
    <div>
      <div>
        <div className='flex items-center'>
          <ProjectHeader title='Project 1' />
          <div className='flex items-center ' />
        </div>
        <GeneralTabs
          tabs={projectTabs}
          currentTab={currentProjectTab}
          handleCurrentTab={handleCurrentTab}
          size='text-sm'
        />
      </div>
      {renderCurrentTab()}
    </div>
  );
};

export default SingleProject;
