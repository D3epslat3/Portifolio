import { FC } from "react";
import React from 'react'
import Image from 'next/image'

const Footer: FC = () => {
  return (
    <footer className="bg-neutral-900 text-gray-200 " id="contatos">
      <div className="container mx-auto py-8 px-4">
        {/* Seção Superior: Links de Navegação */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Links principais */}
          <nav>
            <Image
              src="/deep_logo.svg"
              alt="Deep Logo"
              width={150}
              height={150}
            />
          </nav>

          {/* Seção de Contatos (vazia para personalização futura) */}
          <div  className="min-w-[500px]">        <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 text-red-500">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-sm">bash</p>
            </div>
            <div className="mt-4">
              <p className="text-green-400">miguel@admin: <span className="text-[#3d65a1]">~</span> <span className="text-white">$</span> <span className="text-neutral-100">Contatos</span></p>
              <p className="text-white"> Linkedin: <a href="https://www.linkedin.com/in/miguel-sousa-708b27333/" className="hover:underline hover:text-blue-200">Miguel Sousa</a> </p>
              <p className="text-white"> Discord: Deeplsat3 </p>
              <p className="text-white"> Instagran: <a href="https://www.instagram.com/deepslat33/" className="hover:underline hover:text-blue-200">@deepslat33</a> </p>
              <p className="text-white"> Twitter: <a href="https://x.com/Deepsl4t3" className="hover:underline hover:text-blue-200">@Deepsl4t3</a> </p>
              <p className="text-white"> Email: miguelm@miguelm.dev</p>
              <p className="text-green-400">miguel@admin: <span className="text-[#3d65a1]">~</span> <span className="text-white">$</span></p>
            </div>
          </aside></div>
        </div>

        {/* Seção Inferior: Direitos autorais */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Deepslate. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
