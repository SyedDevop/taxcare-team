import { PricingForm } from "@renderer/components/pricing-form";
import { PerksManager } from "@renderer/components/perks-manager";
import { ContactInfoTable } from "@renderer/components/contact-info-table";

function App(): JSX.Element {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Update Pricing & Plans
          </h2>
          <PricingForm />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Manage Perks</h2>
          <PerksManager />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          User Contact Information
        </h2>
        <ContactInfoTable />
      </div>
    </div>
  );
}

export default App;
