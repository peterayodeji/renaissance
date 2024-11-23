import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import CheckBox from '../../ui/CheckBox';
import FormRow from '../../ui/FormRow';

function SignUp() {
  const [newsletterEmailSub, setNewsletterEmailSub] = useState(true);
  const navigate = useNavigate();

  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ firstName, lastName, email, password }) {
    console.log({ firstName, lastName, email, password, newsletterEmailSub });

    // signup(
    //   { fullName, email, password },
    //   {
    //     onSettled: reset,
    //   },
    // );
  }

  return (
    <div className="bg-stone-0 grow pb-14 pt-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-blue-30 mx-auto max-w-sm text-sm xl:max-w-md"
      >
        <h2 className="bg-blue-20 mb-10 text-center text-3xl font-semibold">
          Create Account
        </h2>

        <div className="mb-6 space-y-4">
          <div className="flex gap-x-2">
            <FormRow label="First Name" error={errors?.firstName?.message}>
              <input
                type="text"
                id="firstName"
                {...register('firstName', {
                  required: 'This field is required',
                })}
                className="input"
              />
            </FormRow>

            <FormRow label="Last Name" error={errors?.lastName?.message}>
              <input
                type="text"
                id="lastName"
                {...register('lastName', {
                  required: 'This field is required',
                })}
                className="input"
              />
            </FormRow>
          </div>

          <FormRow label="Email Address" error={errors?.email?.message}>
            <input
              type="text"
              id="email"
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please provide a valid email address',
                },
              })}
              className="input"
            />
          </FormRow>

          <FormRow
            label="Password (min 8 characters)"
            error={errors?.password?.message}
          >
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'This field is required',
                minLength: {
                  value: 8,
                  message: 'Password needs a minimum of 8 characters',
                },
              })}
              className="input"
            />

            {/* <div className="bg-green-30 mt-1 text-red-600">
            Use between 10 and 30 characters, with atleast 1 letter and 1 number
          </div> */}
          </FormRow>

          <FormRow
            label="Confirm Password"
            error={errors?.passwordConfirm?.message}
          >
            <input
              type="password"
              id="passwordConfirm"
              {...register('passwordConfirm', {
                required: 'This field is required',
                validate: value =>
                  value === getValues().password || 'Passwords need to match',
              })}
              className="input"
            />
          </FormRow>
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
