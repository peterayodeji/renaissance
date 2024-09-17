import FooterLinks from './FooterLinks';

const SHOP_ONLINE_LINKS = [
  { name: 'Customer care', to: '/customer-care' },
  { name: 'Shipping info', to: '/shipping-info' },
  { name: 'Right of withdrawal', to: '/right-of-withdrawal' },
  { name: 'Payment Methods', to: '/payment-methods' },
  { name: 'FAQ', to: '/faq' },
];

const COMPANY_LINKS = [
  { name: 'History & production', to: '/history-and-production' },
  { name: 'Corporate Contacts', to: '/corporate-contacts' },
  { name: 'Store Locator', to: '/store-locator' },
  { name: 'Careers', to: '/careers' },
  { name: 'Collaborations', to: '/collaborations' },
];

const SOCIAL_LINKS = [
  { name: 'Instagram', to: '/instagram' },
  { name: 'Facebook', to: '/facebook' },
  { name: 'Youtube', to: '/youtube' },
  { name: 'Pinterest', to: '/pinterest' },
];

const POLICY_LINKS = [
  { name: 'Privacy policy', to: '/privacy-policy' },
  { name: 'Cookie policy', to: '/cookie-policy' },
  { name: 'Ethical code', to: '/ethical-code' },
  { name: 'Accessibility Statement', to: '/accessibility-statement' },
];

function SiteMap() {
  return (
    <div className="flex flex-wrap justify-between gap-x-4 gap-y-12 px-2 py-12 sm:gap-x-12 sm:px-4 md:px-8">
      <FooterLinks title="Shop Online" links={SHOP_ONLINE_LINKS} />
      <FooterLinks title="Company" links={COMPANY_LINKS} />
      <FooterLinks title="Social" links={SOCIAL_LINKS} />
      <FooterLinks title="Policy" links={POLICY_LINKS} />
    </div>
  );
}

export default SiteMap;
