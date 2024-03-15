import { useParams } from 'react-router';
import SingleProject from './SingleProject';

const ProjectsOverview = () => {
  const { id: singleProjectID } = useParams();
  return (
    <div>
      {singleProjectID ? <SingleProject key={singleProjectID} /> : 'overview'}
    </div>
  );
};

export default ProjectsOverview;
