import { NavLink } from 'react-router-dom';

function ResetPassword() {
  return (
    <div className="bg-stone-0 grow pb-14 pt-12">
      <form className="bg-blue-30 mx-auto max-w-sm text-sm xl:max-w-md">
        <h2 className="bg-blue-20 mb-10 text-center text-3xl font-semibold">
          Reset Password
        </h2>

        <p className="mb-8 text-center">
          Enter your email address below and we&#39;ll send you a link to create
          new password.
        </p>

        <div className="bg-orange-30 mb-8 space-y-4">
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

            <div className="bg-green-30 mt-1 text-red-600">
              Oops! Please enter a valid email address
            </div>
          </div>

          {/* <>
              <div className="flex flex-col">
                <label htmlFor="createPassword" className="mb-2">
                  Create Password (Min 6 characters)
                </label>
                <input
                  type="password"
                  name="createPassword"
                  id="createPassword"
                  className="border border-stone-300 px-4 py-3 text-sm outline-none placeholder:text-sm placeholder:text-inherit"
                />

                <div className="bg-green-30 mt-1 text-red-600">
                  Use between 10 and 30 characters, with atleast 1 letter and 1
                  number
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="confirmPassword" className="mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="border border-stone-300 px-4 py-3 text-sm outline-none placeholder:text-sm placeholder:text-inherit"
                />

                <div className="bg-green-30 mt-1 text-red-600">
                  Use between 10 and 30 characters, with atleast 1 letter and 1
                  number{' '}
                </div>
              </div>
            </> */}
        </div>

        <button className="mb-8 w-full bg-black py-4 font-medium tracking-wider text-white">
          <span className="undeline">Send Reset Link</span>
        </button>

        <div className="mb-10 block text-center">
          <NavLink
            to="/account/sign-in"
            className="underline decoration-[0.99px]"
          >
            Back to Sign In
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
