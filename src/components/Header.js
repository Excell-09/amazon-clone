import Image from 'next/image';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';

const Header = () => {
  return (
    <header>
      {/* top nav */}

      <nav className='flex items-center bg-amazon_blue flex-grow p-4 space-x-4'>
        <div className='flex- items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            alt=''
            width={100}
            height={100}
            className='object-contain cursor-pointer'
          />
        </div>

        <div className='bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer'>
          <input
            type='text'
            className='w-full p-2 h-full flex-shrink rounded-l-md focus:outline-none'
          />
          <span className='inline-block h-12 p-4 items-center justify-center '>
            <BiSearchAlt2 className='font-bold text-xl' />
          </span>
        </div>

        <div className='text-white flex items-center text-xs sm:text-sm space-x-6 whitespace-nowrap'>
          <div className='cursor-pointer link'>
            <p>hello excell</p>
            <p className='font-extrabold'>Account & List</p>
          </div>
          <div className='cursor-pointer link'>
            <p>Returns</p>
            <p className='font-extrabold'>& Orders</p>
          </div>
          <div className='cursor-pointer link relative'>
            <span className='bg-red-500 absolute rounded-full top-0 right-0 w-5 h-5 text-center'>0</span>
            <MdOutlineShoppingCart className='text-[38px]' />
          </div>
        </div>
      </nav>

      {/* button nav */}
      <nav className='flex items-center bg-amazon_blue-light text-white space-x-5 px-4 py-1 overflow-x-auto scroll-hidden overflow-hidden whitespace-nowrap'>
        <p className='link flex font-extrabold items-center'>
          {' '}
          <BiMenu className='text-[35px] mr-1' />
          All
        </p>
        <p className='link'>Today's Deals</p>
        <p className='link'>Customer Service</p>
        <p className='link'>Registry</p>
        <p className='link'>Gift Cards</p>
        <p className='link'>Sell</p>
      </nav>
    </header>
  );
};

export default Header;
