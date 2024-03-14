import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginSVG, PassKeySVG, UserSVG } from '../assets';
import FormInput from '../components/FormInput';
import { useDispatch } from 'react-redux';
import { demoLogin } from '../features/user/userSlice';
import { toast } from 'react-toastify';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e, name) => {
    if (name === 'username') {
      setUser({ ...user, username: e.target.value });
    }
    if (name === 'password') {
      setUser({ ...user, password: e.target.value });
    }
  };

  const demoUserLogin = () => {
    dispatch(demoLogin({ username: 'demoUser', password: 'password' }));
    navigate('/');
    toast.success('logged in as demo user');
  };
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='card w-96 shadow-xl border-[1px] '>
        <div className='card-body'>
          <header className='capitalize text-center text-4xl fonts-sans tracking-tighter font-semibold mb-4'>
            login
          </header>
          <FormInput
            type='text'
            icon={<UserSVG />}
            name='username'
            value={user.username}
            size='input-md'
            placeholder='username'
            handleChange={handleChange}
          />

          <FormInput
            type='password'
            icon={<PassKeySVG />}
            name='password'
            value={user.password}
            size='input-md'
            placeholder='password'
            handleChange={handleChange}
          />

          <div className='card-actions flex-nowrap justify-center '>
            <button className='btn w-3/6 btn-primary mb-2 capitalize'>
              login
            </button>
            <button className='btn w-3/6 mb-2' onClick={demoUserLogin}>
              Demo User
            </button>
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
  );
};

export default Login;
