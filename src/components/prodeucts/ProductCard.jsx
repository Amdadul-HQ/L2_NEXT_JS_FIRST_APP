import Image from "next/image";
import Link from "next/link";

const ProductCard = ({product}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-52 object-contain">
                <Image
                src={product.image}
                alt={product.productName}
                width={1500}
                height={800}
                className="rounded-t-lg h-56"
                />
            </div>
            <div className="p-6">
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-gray-800">{product.productName}</h2>
                    <span className="ml-4 bg-blue-100 text-xs tracking-wide py-1 px-3 rounded-lg">{product.category}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">Brand<span className="font-medium">{product.brand}</span></p>
                <p className="text-xl font-bold text-blue-600 mt-4">{product.price}</p>
                <div>
                    <Link
                    href={`/product/${product.id}`}
                    className="bg-black text-white py-2 px-5 rounded-lg"
                    >See Details</Link>
                    <button className="bg-black text-white py-2 px-5 rounded-lg">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;