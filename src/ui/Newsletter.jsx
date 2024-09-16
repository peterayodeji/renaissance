import { useState } from 'react';
import RadioButton from './RadioButton';

const NEWSLETTER_OPTIONS = [
  { label: 'Women', value: 'women' },
  { label: 'Men', value: 'men' },
  { label: 'Both', value: 'both' },
];

function Newsletter() {
  const [selectedOption, setSelectedOption] = useState('');
  const [email, setEmail] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!selectedOption || !email) return;
    console.log(selectedOption, email);

    setSelectedOption('');
    setEmail('');
  }

  return (
    <div className="flex flex-col gap-4 bg-stone-100 px-2 py-12 sm:px-4 md:flex-row md:gap-8 md:px-8 lg:gap-x-12">
      <div className="flex-1 text-center md:text-left">
        <h2 className="mb-2 text-lg font-semibold tracking-wide md:text-xl lg:text-2xl">
          NEVER MISS A THING
        </h2>
        <p>
          Sign up for promotions, tailored new arrivals, stock updates and more
          - straight to your inbox
        </p>
      </div>

      <div className="flex-1">
        <h5 className="my-3 text-center md:text-left">
          GET UPDATES RELEVANT TO
        </h5>

        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-center gap-x-8 md:justify-start">
            <RadioButton
              options={NEWSLETTER_OPTIONS}
              selectedOption={selectedOption}
              onSelectOption={setSelectedOption}
            />
          </div>

          <p className="mb-6 mt-4 text-xs">
            By clicking &#39;Sign Me Up&#39;, you agree to our{' '}
            <span className="underline underline-offset-2">
              Terms & Conditions
            </span>{' '}
            and{' '}
            <span className="underline underline-offset-2">
              Privacy & Cookies Policy
            </span>
            . Is your inbox working overtime? If you want to opt out we
            won&#39;t be offended, just click &#39;Unsubscribe&#39; at the
            bottom of our emails.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row lg:gap-2">
            <input
              type="email"
              placeholder="Your email, please!"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 border border-stone-300 px-4 py-2 text-inherit placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-0 lg:grow-[1.6]"
            />
            <button
              type="submit"
              disabled={!selectedOption || !email}
              className="flex-1 bg-black py-2 text-white focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-black/80"
            >
              Sign Me Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
