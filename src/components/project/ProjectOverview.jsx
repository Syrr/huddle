const ProjectOverview = () => {
  return (
    <div className='w-3/6 h-full border-2 border-emerald-500 mx-auto capitalize font-semibold'>
      <div>
        <h4 className='text-lg font-semiold mb-2'>project description</h4>
        <textarea
          placeholder=''
          className='textarea textarea-bordered textarea-lg w-full max-w-xs'
        ></textarea>
      </div>
    </div>
  );
};

export default ProjectOverview;
