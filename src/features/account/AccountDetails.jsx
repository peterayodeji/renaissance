import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUser } from '../auth/useUser';
import { useUpdateUser } from '../auth/useUpdateUser';

import FormRow from '../../ui/FormRow';
import Modal from '../../ui/Modal';

function AccountDetails() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();
  const [firstName, lastName] = currentFullName.trim().split(' ');

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: { firstName, lastName },
  });

  const { updateUser, isUpdating } = useUpdateUser();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState(null);

  function onSubmit({ firstName, lastName, password }) {
    const fullName = `${firstName} ${lastName}`;
    updateUser(
      { fullName, password },
      {
        onSuccess: ({ user }) => {
          setShowSuccessModal(true);

          const [firstName, lastName] = user.user_metadata.fullName
            .trim()
            .split(' ');
          reset({ firstName, lastName, password: '', passwordConfirm: '' });
        },
        onError: err => {
          setError(err);

          const [firstName, lastName] = currentFullName.trim().split(' ');
          reset({ firstName, lastName, password: '', passwordConfirm: '' });
        },
      },
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-yellow-30">
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
                  required: 'Please fill out this field',
                })}
                // disabled={isUpdating}
                className="input"
              />
            </FormRow>

            <FormRow label="Last Name" error={errors?.lastName?.message}>
              <input
                type="text"
                id="lastName"
                {...register('lastName', {
                  required: 'Please fill out this field',
                })}
                // disabled={isUpdating}
                className="input"
              />
            </FormRow>
          </div>

          <FormRow label="Email Address">
            <input
              type="text"
              value={email}
              id="email"
              disabled
              className="input cursor-not-allowed bg-stone-100"
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
                minLength: {
                  value: 8,
                  message: 'Password needs a minimum of 8 characters',
                },
              })}
              className="input"
            />
          </FormRow>

          <FormRow
            label="Confirm Password"
            error={errors?.passwordConfirm?.message}
          >
            <input
              type="password"
              id="passwordConfirm"
              {...register('passwordConfirm', {
                validate: value =>
                  value === getValues().password || 'Passwords need to match',
              })}
              className="input"
            />
          </FormRow>
        </div>

        <button
          type="submit"
          disabled={isUpdating}
          className="w-full bg-black py-4 font-medium tracking-wider text-white disabled:cursor-not-allowed disabled:opacity-5"
        >
          <span className="undeline">Save Changes</span>
        </button>
      </form>

      {showSuccessModal && (
        <Modal close={() => setShowSuccessModal(false)}>
          <h3>CHANGES SAVED SUCCESSFULLY</h3>
          <p>You have succesfully made changes to your account details.</p>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="bg-black px-5 py-3 text-xs text-white"
          >
            OK
          </button>
        </Modal>
      )}

      {error && (
        <Modal close={() => setError(null)}>
          <h3>CHANGES NOT SUCCESSFUL</h3>
          <p>An error occured while making changes to your account details!</p>
          <button
            onClick={() => setError(null)}
            className="bg-black px-5 py-3 text-xs text-white"
          >
            OK
          </button>
        </Modal>
      )}
    </>
  );
}

export default AccountDetails;
