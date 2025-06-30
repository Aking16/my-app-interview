import { CheckIcon, ZapIcon } from "lucide-react";
import { Button } from "../ui/button";
import { FC } from "react";

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
}

const PlanCard: FC<PlanCardProps> = ({ title, price, features }) => {
  return (
    <div className="flex flex-col gap-2 items-center border rounded-lg p-8 shadow-lg">
      <div className="rounded-full bg-secondary text-secondary-foreground p-2 w-fit mx-auto">
        <ZapIcon />
      </div>
      <h2 className="text-lg font-semibold text-primary">{title}</h2>
      <p className="text-2xl font-bold">{price}</p>
      <p className="text-muted-foreground">Billed annually.</p>
      <ul className="flex flex-col items-start gap-4 mt-8">
        {features.map((item, index) => (
          <li
          className="flex items-center gap-3 text-muted-foreground"
          key={index}>
            <div className="rounded-full bg-secondary text-secondary-foreground p-1 w-fit mx-auto">
              <CheckIcon size={16}/>
            </div>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full">Get started</Button>
    </div>
  );
};

export default PlanCard;