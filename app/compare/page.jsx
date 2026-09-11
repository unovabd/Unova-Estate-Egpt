import { getSortedCompareData } from '../../lib/compare';
import CompareHubClient from '../../components/CompareHubClient';

export const metadata = {
  title: 'Competitor Comparisons - Unova Estate',
  description: 'See how Unova Estate compares to regional real estate ERPs and generic platforms like Zoho CRM, Salesforce, HubSpot, and Bitrix24.',
};

export default function Page() {
  const comparisons = getSortedCompareData();
  return <CompareHubClient comparisons={comparisons} />;
}
