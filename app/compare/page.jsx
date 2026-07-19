import { getSortedCompareData } from '../../lib/compare';
import CompareHubClient from '../../components/CompareHubClient';

export const metadata = {
  title: 'Competitor Comparisons - Unova Estate',
  description: 'See how Unova Estate dedicated real estate CRM & ERP compares against generic platforms like Zoho CRM, Salesforce, HubSpot, and Bitrix24.'
};

export default function Page() {
  const comparisons = getSortedCompareData();
  return <CompareHubClient comparisons={comparisons} />;
}
