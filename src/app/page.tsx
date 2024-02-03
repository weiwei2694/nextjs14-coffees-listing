import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Button>Button</Button>
      <p className="text-silver dm_sans__body">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
    </div>
  );
}
