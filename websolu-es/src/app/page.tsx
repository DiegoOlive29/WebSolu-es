import StarRating from "@/components/StarRating";
import Image from "next/image";


const products = [
  {
    id: 1,
    name: 'Mini Cooper 2020',
    image: 'https://revistacarro.com.br/wp-content/uploads/2019/10/Mini-Countryman_1.jpg',
    date: '01/15',
    status: 'Avalible',
    rating: 1.7,
  },
  {
    id: 2,
    name: 'Mini Cooper 2020',
    image: 'https://revistacarro.com.br/wp-content/uploads/2019/10/Mini-Countryman_1.jpg',
    date: '02/01',
    status: 'Avalible',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Mini Cooper 2020',
    image: 'https://revistacarro.com.br/wp-content/uploads/2019/10/Mini-Countryman_1.jpg',
    date: '03/10',
    status: 'Avalible',
    rating: 3.2,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
       <div>
      <table className="min-w-full lg:border">
        <thead>
          <tr className="bg-gray-50 hidden lg:table-row ">
            <th className=" p-4 uppercase  text-gray-400 font-semibold text-xs text-start">Car</th>
            <th className=" p-4 uppercase  text-gray-400 font-semibold text-xs text-start">Next Reservation</th>
            <th className=" p-4 uppercase  text-gray-400 font-semibold text-xs text-start">Status</th>
            <th className=" p-4 uppercase  text-gray-400 font-semibold text-xs text-start">Rating</th>
            <th className=" p-4 uppercase  text-gray-400 font-semibold text-xs text-start">Actions</th>
          </tr> 
        </thead>
        <tbody className="">
          {products.map((product) => (
            <tr key={product.id}>
              <td className=" border-b lg:min-w-60 relative lg:px-4 flex flex-row text-center ">
                <img src={product.image} alt={product.name} className="w-20 h-w-20 lg:w-14 lg:h-14  " />
                <div className={`bg-green-500 rounded-full w-4 h-4 absolute top-1 left-1 flex items-center justify-center text-white text-xs  lg:hidden`}>✔</div>
                <div className="lg:p-4 px-2 font-bold lg:font-normal text-sm text-gray-500 flex flex-col text-start justify-between h-full gap-2 "><span>{product.name}</span>
                <span className="text-xs lg:hidden font-normal">Next reservation: {product.date}</span>
                <span className="lg:hidden  font-normal"><StarRating rating={product.rating} /> </span></div>
              </td>
              <td className=" border-b hidden lg:table-cell lg:min-w-60 px-4 text-sm text-gray-500">{product.date}</td>
              <td className=" border-b hidden lg:table-cell lg:min-w-60 px-4 text-sm text-gray-500"><span className="bg-green-100 p-2 text-green-800">{product.status}</span></td>
              <td className=" border-b hidden lg:table-cell lg:min-w-60 px-4 text-sm text-gray-500">
                <StarRating rating={product.rating} />
              </td>
              <td className=" border-b w-10 px-4 text-end">
                <div className="relative group inline-block">
                  <button className="lg:hidden text-black py-2 px-4 absolute left-0 bottom-0 rounded ml-2 transform rotate-90 font-bold">
                   ...
                  </button>
                  <button className="hidden lg:flex text-black py-2 rounded ml-2 transform rotate-90 font-bold">
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
