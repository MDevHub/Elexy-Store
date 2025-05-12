import { FaStar } from 'react-icons/fa';

export default function InfiniteScrollText() {
  return (
    <div className="w-full bg-black py-9 text-white overflow-hidden mb-20">
      <div className="flex animate-marquee-wrapper">
        <div className="flex animate-marquee text-[27px] whitespace-nowrap font-bold">
          <p className="flex items-center gap-2 px-4 font-serif">
            Shop More, Save More! <FaStar className='inline-flex' />
          </p>
          <p className="flex items-center gap-2 px-4 font-sans text-[#cecacad5]">
            Welcome to our Store <FaStar className='inline-flex' />
          </p>
          <p className="flex items-center gap-2 px-4 font-mono">
            Unbeatable Deals Awaits <FaStar className='inline-flex' />
          </p>
          <p className="flex items-center gap-2 px-4 font-serif text-[#cecacad5]">
            Unbeatable Discounts <FaStar className='inline-flex' />
          </p>
        </div>
        {/* Duplicate Content for Seamless Effect */}
        <div className="flex animate-marquee text-[27px] whitespace-nowrap font-bold">
          <p className="flex items-center gap-2 px-4 font-serif">
            Shop More, Save More! <FaStar className='inline-flex' />
          </p>
          <p className="flex items-center gap-2 px-4 font-sans text-[#cecacad5]">
            Welcome to our Store <FaStar className='inline-flex' />
          </p>
          <p className="flex items-center gap-2 px-4 font-mono">
            Unbeatable Deals Awaits <FaStar className='inline-flex' />
          </p>
          <p className="flex items-center gap-2 px-4 font-serif text-[#cecacad5]">
            Unbeatable Discounts <FaStar className='inline-flex' />
          </p>
        </div>
      </div>
      <style jsx>{`
        .animate-marquee-wrapper {
          display: flex;
          width: 100%;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
