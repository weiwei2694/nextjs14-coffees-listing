import { Coffee } from '@/interfaces/coffee.interface'
import Image from 'next/image'
import { Button } from '../ui/button'

type Props = {
    coffee: Coffee
}

export default function Card({ coffee }: Props) {
    return (
        <div className="flex flex-col space-y-4" key={coffee.id}>
            <div className="relative">
                {coffee.popular && (
                    <div className="absolute top-4 left-4">
                        <div className="rounded-full text-black bg-maize py-1 px-5 font-bold">Popular</div>
                    </div>
                )}
                <Image
                    src={coffee.image}
                    alt={coffee.name}
                    width={400}
                    height={300}
                    className="object-contain rounded-xl"
                />
            </div>
            <div className="flex justify-between items-center">
                <h3 className="text-floral_white font-medium text-xl">{coffee.name}</h3>
                <Button className="bg-granny_smith hover:bg-granny_smith text-black font-extrabold" size="sm">{coffee.price}</Button>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                    {coffee.rating
                        ? (
                            <>
                                <Image
                                    src="/Star_fill.svg"
                                    alt="Star Fill Svg"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                                <p className="text-floral_white font-bold text-xl">
                                    {coffee.rating}
                                </p>
                                <p className="text-silver font-bold text-xl">({coffee.votes} votes)</p>
                            </>
                        )
                        : (
                            <>
                                <Image
                                    src="/Star.svg"
                                    alt="Star Svg"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                                <p className="text-silver font-bold text-xl">No ratings</p>
                            </>
                        )}
                </div>
                {!coffee.available && (
                    <p className="text-rusty_red font-bold text-xl">Sold out</p>
                )}
            </div>
        </div>
    )
}
