import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121f14] text-white py-12">
      <div className="max-w-screen-lg mx-auto px-4 text-center space-y-4">
        <div className="flex justify-center space-x-6 text-sm font-medium">
          <Link href="#feedback" className="hover:text-green-500 transition">
            Feedback
          </Link>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          Sua transformação começa aqui. © {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
