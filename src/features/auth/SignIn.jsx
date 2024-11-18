import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLogin } from './useLogin';
import { useLogout } from './useLogout';

function SignIn() {
  const [email, setEmail] = useState('johndoe@test.com');
  const [password, setPassword] = useState('johndoe123');
  const navigate = useNavigate();

  const { login, isLoading } = useLogin();
  const { logout, isLoading: isLoggingOut } = useLogout();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );

    // console.log({ email, password });
  }

  return (
    <div className="bg-stone-0 grow pb-14 pt-12">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-30 mx-auto max-w-sm text-sm xl:max-w-md"
      >
        <h2 className="bg-blue-20 mb-10 text-center text-3xl font-semibold">
          {/* Welcome back */}
          Sign In
        </h2>

        <div className="mb-6 space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="border border-stone-300 px-4 py-3 text-sm outline-none placeholder:text-sm placeholder:text-inherit"
            />

            {/* <div className="bg-green-30 mt-1 text-red-600">
              Ooops! Please enter a valid email address
            </div> */}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="border border-stone-300 px-4 py-3 text-sm outline-none placeholder:text-sm placeholder:text-inherit"
            />

            {/* <div className="bg-green-30 mt-1 text-red-600">
              Use between 10 and 30 characters, with atleast 1 letter and 1
              number
            </div> */}
          </div>
        </div>

        <div className="mb-10 block text-center">
          <NavLink
            to="/account/reset-password"
            className="underline decoration-[0.99px]"
          >
            Forgot Your Password?
          </NavLink>
        </div>

        <button
          disabled={isLoading}
          className="mb-12 w-full bg-black py-4 font-medium tracking-wider text-white disabled:opacity-5"
        >
          <span className="undeline">Sign In</span>
        </button>

        <hr className="mb-8 border-stone-300" />

        <h4 className="mb-4 text-center text-lg font-semibold">
          Are You New Around Here?
        </h4>

        <p className="mb-8 text-center">
          Enjoy a more seamless experience with an account. Manage your orders,
          Wishlists, book exclusive services and more.
        </p>

        <button
          type="button"
          onClick={() => navigate('/account/register')}
          className="w-full border border-black py-4 tracking-wider"
        >
          <span>Create Account</span>
        </button>

        <button
          type="button"
          onClick={logout}
          disabled={isLoggingOut}
          className="mt-4 w-full bg-red-600 py-4 tracking-wider text-white disabled:opacity-5"
        >
          <span>Sign Out</span>
        </button>
      </form>
    </div>
  );
}

export default SignIn;
