import { LoginSVG, PassKeySVG, UserSVG } from '../assets';
import FormInput from '../components/FormInput';

const Login = () => {
  return (
    <div className='grid h-screen w-screen grid-cols-2 place-items-center justify-center'>
      <div className='flex gap-20 items-center mx-auto'>
        <div>
          <LoginSVG color={'fill-primary'} lines='fill-base-200' />
        </div>
        <div className='card w-96 shadow-xl border-[1px] border-primary border-opacity-35'>
          <div className='card-body'>
            <header className='capitalize text-center text-3xl text-primary font-bold tracking-wide mb-4'>
              login
            </header>
            <FormInput
              type='text'
              icon={<UserSVG />}
              name='login'
              size='input-md'
              placeholder='username'
            />

            <FormInput
              type='password'
              icon={<PassKeySVG />}
              name='password'
              size='input-md'
              placeholder='password'
            />

            <div className='card-actions justify-center '>
              <button className='btn btn-primary mb-2 capitalize'>login</button>
              <button className='btn btn-accent mb-2'>Demo User</button>
            </div>

            <p className='text-center text-xs'>
              Not a member?
              <span className='ml-0.5 text-accent capitalize cursor-pointer font-semibold'>
                register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
