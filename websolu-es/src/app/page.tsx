import StarRating from "@/components/StarRating";
import Image from "next/image";


const products = [
  {
    id: 1,
    name: 'Mini Cooper 2020',
    image: 'https://revistacarro.com.br/wp-content/uploads/2019/10/Mini-Countryman_1.jpg',
    date: '01-15',
    status: 'Avalible',
    rating: 1.7,
  },
  {
    id: 2,
    name: 'Mini Cooper 2020',
    image: 'https://revistacarro.com.br/wp-content/uploads/2019/10/Mini-Countryman_1.jpg',
    date: '02-01',
    status: 'Avalible',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Mini Cooper 2020',
    image: 'https://revistacarro.com.br/wp-content/uploads/2019/10/Mini-Countryman_1.jpg',
    date: '03-10',
    status: 'Avalible',
    rating: 3.2,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
       <div>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-50">
            <th className=" p-4 uppercase text-gray-400 font-semibold text-xs text-start">Car</th>
            <th className=" p-4 uppercase text-gray-400 font-semibold text-xs text-start">Next Reservation</th>
            <th className=" p-4 uppercase text-gray-400 font-semibold text-xs text-start">Status</th>
            <th className=" p-4 uppercase text-gray-400 font-semibold text-xs text-start">Rating</th>
            <th className=" p-4 uppercase text-gray-400 font-semibold text-xs text-start">Actions</th>
          </tr> 
        </thead>
        <tbody className="">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border-b md:min-w-60 px-4 flex flex-row text-center ">
                <img src={product.image} alt={product.name} className="w-14 h-14" /><span className="p-4 text-sm text-gray-500">{product.name}</span>
              </td>
              <td className="border-b md:min-w-60 px-4 text-sm text-gray-500">{product.date}</td>
              <td className="border-b md:min-w-60 px-4 text-sm text-gray-500"><span className="bg-green-100 p-2 text-green-800">{product.status}</span></td>
              <td className="border-b md:min-w-60 px-4 text-sm text-gray-500">
                <StarRating rating={product.rating} />
              </td>
              <td className="border-b  px-4">
                <div className="relative group inline-block">
                  <button className=" text-black py-2 px-4 rounded ml-2">
                   ...
                  </button>
               
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </main>
  );
}
