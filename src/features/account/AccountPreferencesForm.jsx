import { useState } from 'react';
import { useUser } from '../auth/useUser';
import { useSubscribe } from '../newsletter/useSubscribe';
import { useUnSubscribeNewsletter } from '../newsletter/useUnsubscribeNewsletter';
import {
  countryOptions,
  getCountryData,
  truncateText,
} from '../../utils/helpers';

import RadioButton from '../../ui/RadioButton';
import FormRow from '../../ui/FormRow';
import Modal from '../../ui/Modal';

const NEWSLETTER_OPTIONS = [
  { id: 'radio-opt-1a7c', label: 'Subscribed', value: 'subscribed' },
  { id: 'radio-opt-2b8d', label: 'Unsubscribed', value: 'unsubscribed' },
];

const GENDER_OPTIONS = [
  { id: 'radio-opt-3f2e', label: 'Women', value: 'women' },
  { id: 'radio-opt-4c9a', label: 'Men', value: 'men' },
  { id: 'radio-opt-5d1f', label: 'Both', value: 'both' },
];

function AccountPreferencesForm({ data }) {
  const {
    user: { id: userId, email: userEmail },
  } = useUser();
  const { email: newsletterSubEmail, preference, countryCode } = data;
  const subscribeStatus = newsletterSubEmail ? 'subscribed' : 'unsubscribed';

  const [newsletter, setNewsletter] = useState(subscribeStatus);
  const [gender, setGender] = useState(preference || 'both');
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    countryCode || '',
  );

  const { isPendingSubscribe, subscribeNewsletter } = useSubscribe(userEmail);
  const { isPendingUnSubscribe, unSubscribeNewsletter } =
    useUnSubscribeNewsletter(userEmail);
  const isBusyForm = isPendingSubscribe || isPendingUnSubscribe;

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const countryData = getCountryData(selectedCountryCode, countryOptions);

    const updateData = {
      email: userEmail,
      preference: gender,
      country: countryData?.country || '',
      countryCode: countryData?.countryCode || '',
      userId,
    };

    if (newsletter === 'subscribed') {
      subscribeNewsletter(updateData, {
        onSuccess: (_, { preference, countryCode }) => {
          setShowSuccessModal(true);
          setNewsletter('subscribed');
          setGender(preference);
          setSelectedCountryCode(countryCode);
        },
        onError: err => {
          setError(err.message);
          setNewsletter('subscribed');
          setGender(data.preference);
          setSelectedCountryCode(data.countryCode);
        },
      });
    }

    if (newsletter === 'unsubscribed') {
      unSubscribeNewsletter(undefined, {
        onSuccess: () => {
          setShowSuccessModal(true);
          setNewsletter('unsubscribed');
          setGender('both');
          setSelectedCountryCode('');
        },
        onError: err => {
          setError(err.message);
          setNewsletter('subscribed');
          setGender(data.preference);
          setSelectedCountryCode(data.countryCode);
        },
      });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-yellow-30">
        <div className="mb-8 space-y-6">
          <div className="space-y-3">
            <h4 className="text-base">Newsletters</h4>
            <div className="flex gap-x-8">
              <RadioButton
                name="newsletter"
                options={NEWSLETTER_OPTIONS}
                selectedOption={newsletter}
                onSelectOption={setNewsletter}
              />
            </div>
            <p>
              Sign up for email updates and promotions, tailored to your
              preferences.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-base">Preferences</h4>
            <p>Gender</p>
            <div className="flex gap-x-8">
              <RadioButton
                name="gender"
                options={GENDER_OPTIONS}
                selectedOption={gender}
                onSelectOption={setGender}
                disabled={newsletter === 'unsubscribed'}
              />
            </div>
          </div>

          <FormRow label="Country/Region">
            <select
              id="country"
              value={selectedCountryCode}
              onChange={e => setSelectedCountryCode(e.target.value)}
              disabled={newsletter === 'unsubscribed'}
              className="input disabled:cursor-not-allowed"
            >
              <option value="">Select Country</option>
              {countryOptions.map(({ countryCode, country }) => (
                <option key={countryCode} value={countryCode}>
                  {truncateText(country, 30)}
                </option>
              ))}
            </select>
          </FormRow>
        </div>

        <button
          type="submit"
          disabled={isBusyForm}
          className="w-full bg-black py-4 font-medium tracking-wider text-white disabled:cursor-not-allowed disabled:opacity-5"
        >
          <span className="undeline">Save Changes</span>
        </button>
      </form>

      {showSuccessModal && (
        <Modal close={() => setShowSuccessModal(false)}>
          <h3>CHANGES SAVED SUCCESSFULLY</h3>
          <p>You have succesfully made changes to your email preferences.</p>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="bg-black px-5 py-3 text-xs text-white"
          >
            OK
          </button>
        </Modal>
      )}

      {error && (
        <Modal close={() => setError('')}>
          <h3>CHANGES NOT SUCCESSFUL</h3>
          <p>
            An error occured while making changes to your email preferences!{' '}
            {error.message}
          </p>
          <button
            onClick={() => setError('')}
            className="bg-black px-5 py-3 text-xs text-white"
          >
            OK
          </button>
        </Modal>
      )}
    </>
  );
}

export default AccountPreferencesForm;
