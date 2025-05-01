import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';

function AccountDetails() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  return (
    <form className="bg-yellow-30">
      <h2 className="bg-blue-20 mb-10 text-center text-3xl font-semibold">
        Account Details
      </h2>

      <div className="mb-6 space-y-4">
        <div className="flex flex-col gap-x-2 gap-y-4 lg:flex-row">
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

      <button
        type="submit"
        // disabled={isLoading}
        className="w-full bg-black py-4 font-medium tracking-wider text-white disabled:opacity-5"
      >
        <span className="undeline">Save Changes</span>
      </button>
    </form>
  );
}

export default AccountDetails;
