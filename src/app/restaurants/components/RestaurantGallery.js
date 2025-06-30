import Image from "next/image";

export default function RestaurantGallery({ mainImage, images }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 mb-12" style={{ height: 450 }}>
            <div className="relative sm:col-span-2 lg:col-span-3 h-full">
                <Image
                    src={mainImage}
                    alt="Main Image"
                    fill
                    className="object-cover rounded-xl"
                />
            </div>

            <div
                className="h-full overflow-y-auto custom-scrollbar pr-1 hidden sm:hidden md:hidden lg:block xl:block  space-y-4">
                {images.map((img, i) => (
                    <div key={i} className="min-w-[300px] h-48 relative flex-shrink-0">
                        <Image src={img} alt={`Image ${i}`} fill className="object-cover rounded-xl" />
                    </div>
                ))}
            </div>
        </div>
    );
}
