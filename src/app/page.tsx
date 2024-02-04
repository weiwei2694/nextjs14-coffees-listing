import { Button } from "@/components/ui/button";
import { Coffee } from "@/interfaces/coffee.interface";
import axios from "axios";
import Card from "@/components/coffee/card";

export default async function Home() {
  const response = await axios.get(process.env.NEXT_PUBLIC_API_COFFEE_LISTING!);
  const coffees: Coffee[] = response.data;

  return (
    <div className="flex justify-center">
      <div className="relative m-6 sm:m-14 lg:m-32 p-6 sm:p-14 lg:p-32 bg-black flex flex-col space-y-12">
        <div className="flex flex-col items-center text-center space-y-2 sm:space-y-4">
          <h1 className="dm_sans__body text-floral_white font-bold tracking-wider">Our Collection</h1>
          <p className="text-lg sm:text-2xl text-silver w-full xl:max-w-[750px]">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          <div className="flex items-center justify-center gap-x-2 pt-4">
            <Button className="bg-silver hover:bg-silver/80 text-floral_white">All Products</Button>
            <button className="h-10 px-4 py-2 text-floral_white">Available Now</button>
          </div>
        </div>
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {coffees.map(coffee => (
            <Card coffee={coffee} />
          ))}
        </div>
      </div>
    </div>
  );
}
