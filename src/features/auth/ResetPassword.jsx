import { NavLink } from 'react-router-dom';
import FormRow from '../../ui/FormRow';
import { useForm } from 'react-hook-form';

function ResetPassword() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ email }) {
    console.log({ email });
  }

  return (
    <div className="bg-stone-0 grow pb-14 pt-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-blue-30 mx-auto max-w-sm text-sm xl:max-w-md"
      >
        <h2 className="bg-blue-20 mb-10 text-center text-3xl font-semibold">
          Reset Password
        </h2>

        <p className="mb-8 text-center">
          Enter your email address below and we&#39;ll send you a link to create
          new password.
        </p>

        <div className="mb-6">
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
