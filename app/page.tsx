import PlanCard from "@/components/cards/plan-card";

export default function Home() {
  const basicFeatures = [
    "Access to all basic features",
    "Basic reporting and analytics",
    "Up to 10 individual users",
    "20GB individual data each user",
    "Basic chat and email support"
  ];

  const businessFeatures = [
    "200+ integrations",
    "Advanced reporting",
    "Up to 20 individual users",
    "40GB individual data each user",
    "Priority chat and email support"
  ];

  return (
    <main className="flex flex-col gap-16 items-center justify-center p-4 mx-auto lg:container lg:h-screen lg:flex-row">
      <div className="space-y-2">
        <p className="text-primary font-semibold">Upgrade</p>
        <h1 className="font-semibold text-xl">Pricing plans that scale</h1>
        <p className="text-muted-foreground">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
      </div>
      <div className="flex flex-col items-center gap-8 lg:flex-row">
        <PlanCard
          title="Basic plan"
          price="$10/month"
          features={basicFeatures} />
        <PlanCard
          title="Business plan"
          price="$20/month"
          features={businessFeatures} />
      </div>
    </main>
  );
}
