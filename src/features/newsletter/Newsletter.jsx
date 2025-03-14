import { useState } from 'react';
import { useSubscribe } from './useSubscribe';

import RadioButton from '../../ui/RadioButton';
import Modal from '../../ui/Modal';

const NEWSLETTER_OPTIONS = [
  { label: 'Women', value: 'women' },
  { label: 'Men', value: 'men' },
  { label: 'Both', value: 'both' },
];

function Newsletter() {
  const [selectedOption, setSelectedOption] = useState('both');
  const [emailNewsletter, setEmailNewsletter] = useState('');
  const { isPending, subscribeNewsletter, error } = useSubscribe();
  const [responseData, setResponseData] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    subscribeNewsletter(
      {
        email: emailNewsletter,
        preference: selectedOption,
      },
      {
        onSuccess: (_, { email, preference }) => {
          setEmailNewsletter('');
          setSelectedOption('both');
          setResponseData({ email, preference });
        },
        onError: () => {
          setShowErrorModal(true);
        },
      },
    );
  }

  return (
    <>
      <div className="flex flex-col gap-4 bg-stone-100 px-2 py-12 sm:px-4 md:flex-row md:gap-8 md:px-8 lg:gap-x-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="mb-2 text-lg font-semibold tracking-wide md:text-xl lg:text-2xl">
            NEVER MISS A THING
          </h2>
          <p>
            Sign up for promotions, tailored new arrivals, stock updates and
            more - straight to your inbox
          </p>
        </div>

        <div className="flex-1">
          <h5 className="my-3 text-center md:text-left">
            GET UPDATES RELEVANT TO
          </h5>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-x-8 md:justify-start">
              <RadioButton
                name="emailNewsletter"
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

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-2 md:flex-col md:gap-4 lg:flex-row lg:gap-2">
              <input
                type="email"
                required
                placeholder="Your email, please!"
                value={emailNewsletter}
                onChange={e => setEmailNewsletter(e.target.value)}
                className="flex-1 border border-stone-300 px-4 py-3 text-inherit outline-none placeholder:text-inherit placeholder:text-stone-500 lg:grow-[1.6]"
              />

              <button
                type="submit"
                disabled={isPending}
                className="flex-1 bg-black py-3 text-white disabled:cursor-not-allowed disabled:bg-black/70"
              >
                Sign Me Up
              </button>
            </div>
          </form>
        </div>
      </div>

      {responseData && (
        <Modal close={() => setResponseData(null)}>
          <h3>ITEM ADDED </h3>
          <p>
            {responseData.email} with preference set to{' '}
            {responseData.preference} subscribed successfully!
          </p>
          <button
            onClick={() => setResponseData(null)}
            className="bg-black px-5 py-3 text-xs text-white"
          >
            OK
          </button>
        </Modal>
      )}

      {showErrorModal && (
        <Modal close={() => setShowErrorModal(false)}>
          <h3>ITEM NOT ADDED</h3>
          <p>Item failed to add! {error.message}</p>
          <button
            onClick={() => setShowErrorModal(false)}
            className="bg-black px-5 py-3 text-xs text-white"
          >
            OK
          </button>
        </Modal>
      )}
    </>
  );
}

export default Newsletter;
