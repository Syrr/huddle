import { useEffect, useState } from 'react';
import { LoginSVG } from '../assets';
import { useNavigate } from 'react-router';
const title = 'huddle';

const Landing = () => {
  const [displayTitle, setDisplayTitle] = useState('');
  const [displayBlinker, setDisplayBlinker] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDisplayTitle((prevTitle) => {
        let index = prevTitle.length;
        if (index < title.length) {
          return prevTitle + title[index];
        }
        setDisplayBlinker(false);
        return prevTitle;
      });
    }, 500);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <>
      <div className='grid h-screen w-screen place-items-center  '>
        <div className='flex w-full items-center justify-stretch'>
          <div className='flex flex-col items-center  mx-auto'>
            <h2 className='text-9xl  font-bold tracking-wider capitalize text-primary'>
              {displayTitle}
              {displayBlinker ? (
                <span className='border-r-2 border-r-neutral-content  animate-ping duration-1000' />
              ) : (
                <span className='text-primary'>.</span>
              )}
            </h2>

            <span
              className={`transition-opacity text-2xl mb-6 duration-1000 opacity-0 ${
                !displayBlinker && 'opacity-100'
              }`}
            >
              <ul className='flex gap-6 text-4xl mt-4 '>
                <li>
                  <span className='text-primary capitalize font-bold tracking-wider'>
                    c
                  </span>
                  ollaborate
                </li>
                <li>
                  <span className='text-primary capitalize font-bold tracking-wider'>
                    d
                  </span>
                  esign
                </li>
                <li>
                  <span className='text-primary capitalize font-bold tracking-wider'>
                    i
                  </span>
                  mplement
                </li>
              </ul>
            </span>
            <button
              className={`flex btn w-32 btn-primary mb-2 duration-1000 transition-opacity capitalize opacity-0 ${
                !displayBlinker && 'opacity-100'
              }`}
              onClick={() => navigate('/login')}
            >
              login
            </button>
          </div>

          <div>
            <LoginSVG color={'fill-primary'} lines='fill-base-200' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
