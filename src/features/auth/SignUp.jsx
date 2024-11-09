import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CheckBox from '../../ui/CheckBox';

function SignUp() {
  const [newsletterEmailSub, setNewsletterEmailSub] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="bg-stone-0 grow pb-14 pt-12">
      <form className="bg-blue-30 mx-auto max-w-sm text-sm xl:max-w-md">
        <h2 className="bg-blue-20 mb-10 text-center text-3xl font-semibold">
          Create Account
        </h2>

        <div className="bg-green-30 mb-4 flex gap-x-2">
          <div className="flex flex-1 flex-col">
            <label htmlFor="firstName" className="mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="w-full border border-stone-300 px-4 py-3 text-sm outline-none placeholder:text-sm placeholder:text-inherit"
            />

            <div className="bg-green-30 mt-1 text-red-600">
              {/* Please, don&#39;t leave me empty */}
              Please fill out this field
            </div>
          </div>

          <div className="flex flex-1 flex-col">
            <label htmlFor="lastName" className="mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="w-full border border-stone-300 px-4 py-3 text-sm outline-none placeholder:text-sm placeholder:text-inherit"
            />

            {/* <div className="bg-green-30 mt-1 text-red-600">
              Use between 10 and 30 characters, with atleast 1 letter and 1
              number
            </div> */}
          </div>
        </div>

        <div className="bg-pink-30 mb-6 space-y-4">
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
            <label htmlFor="createPassword" className="mb-2">
              Create Password (Min 6 characters)
            </label>
            <input
              type="password"
              name="createPassword"
              id="createPassword"
              className="border border-stone-300 px-4 py-3 text-sm outline-none placeholder:text-sm placeholder:text-inherit"
            />

            {/* <div className="bg-green-30 mt-1 text-red-600">
              Use between 10 and 30 characters, with atleast 1 letter and 1
              number
            </div> */}
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

            {/* <div className="bg-green-30 mt-1 text-red-600">
              Use between 10 and 30 characters, with atleast 1 letter and 1
              number
            </div> */}
          </div>
        </div>

        <CheckBox
          value={newsletterEmailSub}
          onCheck={setNewsletterEmailSub}
          name="newsletter"
        >
          Sign up to Renaissance emails to stay in the know
        </CheckBox>

        <p className="bg-green-20 mb-6 mt-3 text-xs text-stone-700">
          You can opt out by clicking &#39;Unsubscribe&#39; in our emails.
        </p>

        <p className="bg-green-20 mb-6 text-xs text-stone-700">
          By clicking &#39;Create Account&#39;, you agree to our{' '}
          <span className="underline decoration-[0.99px]">
            Terms & Conditions
          </span>{' '}
          and{' '}
          <span className="underline decoration-[0.99px]">
            Privacy & Cookies Policy
          </span>
        </p>

        <button className="mb-12 w-full bg-black py-4 font-medium tracking-wider text-white">
          <span className="undeline">Create Account</span>
        </button>

        <hr className="mb-8 border-stone-300" />

        <h4 className="mb-4 text-center text-lg font-semibold">
          Do you already have an account?
        </h4>

        <p className="mb-8 text-center">
          It&#39;s great to see you again! Sign in to manage your orders,
          Wishlists and much more.
        </p>

        <button
          onClick={() => navigate('/account/sign-in')}
          className="w-full border border-black py-4 tracking-wider"
        >
          <span>Sign In</span>
        </button>
      </form>
    </div>
  );
}

export default SignUp;
