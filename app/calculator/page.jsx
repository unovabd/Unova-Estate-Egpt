import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyCategoryCalculator from '@/components/CompanyCategoryCalculator';

export const metadata = {
  title: 'Company Category & Plan Calculator — Unova Estate',
  description: 'Calculate your real estate company scale score and get instant recommended ERP pricing plans for property & land developers in Bangladesh.',
  alternates: {
    canonical: '/calculator',
  },
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar activePage="calculator" />

      <main className="relative z-10 pt-28 pb-24 px-5 max-w-5xl mx-auto w-full flex-1 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase tracking-wider">
            Interactive Cost &amp; Tier Estimator
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Company Category &amp; Plan Calculator
          </h1>
          <p className="text-base text-slate-600">
            Select your organization metrics (employees, monthly leads, projects, plot units, project value) to calculate your company category and discover the ideal Unova Estate plan.
          </p>
        </div>

        {/* Dedicated Calculator Component */}
        <CompanyCategoryCalculator />
      </main>

      <Footer />
    </div>
  );
}
