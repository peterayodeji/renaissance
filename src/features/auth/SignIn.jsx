import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { usePageAccess } from '../../hooks/usePageAccess';
import { useLogin } from './useLogin';

import FormRow from '../../ui/FormRow';

function SignIn() {
  const navigate = useNavigate();
  const { accessible } = usePageAccess();
  const { login, isLoading: isLoggingIn, error } = useLogin();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  // console.log(error);

  function onSubmit({ email, password }) {
    login(
      { email, password },
      {
        onSuccess: () => reset(),
      },
    );
  }

  if (!accessible) return <Navigate to="/account" />;

  return (
    <div className="bg-stone-0 grow pb-14 pt-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-blue-30 mx-auto max-w-sm text-sm xl:max-w-md"
      >
        <h2 className="bg-blue-20 mb-10 text-center text-3xl font-semibold">
          {/* Welcome back */}
          Sign In
        </h2>

        <div className="mb-6 space-y-4">
          <FormRow label="Email Address" error={errors?.email?.message}>
            <input
              type="text"
              id="email"
              // value="johndoe@test.com" // Remove later
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

          <FormRow label="Password" error={errors?.password?.message}>
            <input
              type="password"
              id="password"
              // value="johndoe123" // Remove later
              {...register('password', {
                required: 'This field is required',
              })}
              className="input"
            />
          </FormRow>
        </div>

        <div className="mb-10 block text-center">
          <NavLink
            to="/account/reset-password"
            replace
            state={{ accessible: true }}
            className="underline decoration-[0.99px]"
          >
            Forgot Your Password?
          </NavLink>
        </div>

        <button
          disabled={isLoggingIn}
          type="submit"
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
          onClick={() =>
            navigate('/account/register', {
              replace: true,
              state: { accessible: true },
            })
          }
          className="w-full border border-black py-4 tracking-wider"
        >
          <span>Create Account</span>
        </button>
      </form>
    </div>
  );
}

export default SignIn;
