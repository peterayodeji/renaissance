import { useState } from 'react';
import { countryOptions, truncateText } from '../../utils/helpers';

import RadioButton from '../../ui/RadioButton';
import FormRow from '../../ui/FormRow';

const NEWSLETTER_OPTIONS = [
  { id: 'radio-opt-1a7c', label: 'Subscribed', value: 'subscribed' },
  { id: 'radio-opt-2b8d', label: 'Unsubscribed', value: 'unsubscribed' },
];

const GENDER_OPTIONS = [
  { id: 'radio-opt-3f2e', label: 'Women', value: 'women' },
  { id: 'radio-opt-4c9a', label: 'Men', value: 'men' },
  { id: 'radio-opt-5d1f', label: 'Both', value: 'both' },
];

function AccountPreferences() {
  const [newsletter, setNewsletter] = useState('unsubscribed');
  const [gender, setGender] = useState('both');
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <form className="bg-yellow-30">
      <h2 className="bg-blue-20 mb-10 text-center text-3xl font-semibold">
        Email Preferences
      </h2>

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
            />
          </div>
        </div>

        <FormRow label="Country/Region">
          <select
            id="country"
            value={selectedCountry}
            onChange={e => setSelectedCountry(e.target.value)}
            className="input"
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
        // disabled={isLoading}
        className="w-full bg-black py-4 font-medium tracking-wider text-white disabled:opacity-5"
      >
        <span className="undeline">Save Changes</span>
      </button>
    </form>
  );
}

export default AccountPreferences;
