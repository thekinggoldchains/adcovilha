import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-5 pb-5 mb-10 w-full justify-center flex flex-row bg-black">
      <div className='flex justify-center	 items-center ml-6'>
        <div className="w-12 h-12 items-center flex rounded-full block mx-auto mb-4 mr-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
        <p className="text-2xl dark:text-white text-center">
          <Link href="/">
            <a>{name}</a>
          </Link>
        </p>
      </div>
    </header>
  );
}
