import Loader from '../../ui/Loader';
import { useUser } from '../auth/useUser';
import { useNewsletter } from '../newsletter/useNewsletter';

import AccountPreferencesForm from './AccountPreferencesForm';

function AccountPreferences() {
  const {
    user: { email },
  } = useUser();

  const { isLoading, data, error } = useNewsletter({ email });

  return (
    <>
      <h2 className="bg-blue-20 mb-10 text-center text-3xl font-semibold">
        Email Preferences
      </h2>

      {isLoading && <Loader />}
      {!error && !isLoading && <AccountPreferencesForm data={data} />}
      {error && <p>Sorry. An issue occurred while loading email preferences</p>}
    </>
  );
}

export default AccountPreferences;
