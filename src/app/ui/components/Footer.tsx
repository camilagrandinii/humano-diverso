import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#D5A867] text-[#2B2B2B] py-12">
      <div className="max-w-screen-lg mx-auto px-4 text-center space-y-4">
        <div className="flex justify-center space-x-6 text-sm font-medium">
          <Link
            href="mailto:camila.grandini@sga.pucminas.br"
            className="hover:text-white transition-colors duration-200"
          >
            Feedback
          </Link>
        </div>
        <p className="text-sm text-[#2B2B2B] mt-4">
          Sua transformação começa aqui. © {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
