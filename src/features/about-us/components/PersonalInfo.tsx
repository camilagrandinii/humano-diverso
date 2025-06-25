'use client';
import Image from 'next/image';
import Link from 'next/link';

const PersonalInfo = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Texto */}
        <div className="w-full lg:w-1/2 text-left">
          <h3 className="text-sm font-bold text-[#D8902E] uppercase mb-2">
            Sobre nós
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Somos um time de Cientistas da Computação
          </h2>

          <div className="text-gray-700 text-base leading-relaxed space-y-4">
            <p>
              Olá! Somos <strong>Camila Grandini</strong> e <strong>Júlia Marçal Bomfá</strong>, estudantes do 7º período de Ciência da Computação na <strong>PUC Minas</strong>. Compartilhamos o interesse por tecnologia, inovação e pelo desenvolvimento de soluções digitais que fazem a diferença.
            </p>

            <p>
              Juntas, buscamos aplicar nossos conhecimentos em projetos que envolvam desenvolvimento web, inteligência artificial, experiência do usuário e acessibilidade digital. Acreditamos na colaboração como motor do aprendizado e na tecnologia como ferramenta para transformação social.
            </p>

            <p>
              Este projeto representa nosso compromisso com a construção de experiências significativas, que unem técnica, propósito e impacto.
            </p>

            <div className="space-y-2 pt-4">
              <p className="font-medium">
                📧 Camila: <a href="mailto:camila.grandini@sga.pucminas.br" className="text-[#D8902E] underline">camila.grandini@sga.pucminas.br</a>
              </p>
              <p className="font-medium">
                💼 LinkedIn: <a href="https://www.linkedin.com/in/camilagrandini/" target="_blank" className="text-[#D8902E] underline">linkedin.com/in/camilagrandini</a>
              </p>
              <p className="font-medium">
                💻 GitHub: <a href="https://github.com/camilagrandinii" target="_blank" className="text-[#D8902E] underline">github.com/camilagrandinii</a>
              </p>
              <hr />
              <p className="font-medium">
                📧 Júlia: <a href="mailto:julia.marcal@sga.pucminas.br" className="text-[#D8902E] underline">julia.marcal@sga.pucminas.br</a>
              </p>
              <p className="font-medium">
                💼 LinkedIn: <a href="https://www.linkedin.com/in/j%C3%BAlia-mar%C3%A7al-bomf%C3%A1-203558211/" target="_blank" className="text-[#D8902E] underline">linkedin.com/in/júlia-marçal-bomfá</a>
              </p>
              <p className="font-medium">
                💻 GitHub: <a href="https://github.com/juliamarcal" target="_blank" className="text-[#D8902E] underline">github.com/juliamarcal</a>
              </p>
            </div>
          </div>

          <Link
            href="mailto:camila.grandini@sga.pucminas.br"
            className="inline-block mt-6 text-base text-white bg-[#D8902E] hover:bg-[#d98c25] px-5 py-2 rounded font-medium transition"
          >
            Entrar em Contato
          </Link>
        </div>

        {/* Duas imagens lado a lado */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/camila-about.jpg"
              alt="Camila Grandini"
              fill
              className="object-cover"
            />
          </div>
          <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/camila-about.jpg"
              alt="Júlia Marçal Bomfá"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
