import { NavLink, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="bg-stone-0 grow pb-14 pt-12">
      <form className="bg-blue-30 mx-auto max-w-sm text-sm xl:max-w-md">
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

        <button className="mb-12 w-full bg-black py-4 font-medium tracking-wider text-white">
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
          onClick={() => navigate('/account/register')}
          className="w-full border border-black py-4 tracking-wider"
        >
          <span>Create Account</span>
        </button>
      </form>
    </div>
  );
}

export default SignIn;
