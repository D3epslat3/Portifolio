'use client'

import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

export default function Home() {

  return (
    <div className="bg-neutral-950 h-full w-full">
      <div className="bg-grid-1 h-screen w-full ocult z-20">
        <div className="grid grid-cols-2 grid-rows-1 pt-[64px] z-10">
          <div className="flex flex-col items-center justify-center">
            <p className="text-white">Seja muito bem vindo a meu portifolio</p>
            <h1 className="text-white text-3xl font-semibold capitalize max-w-md text-center pt-3 z-10">
              <Typewriter
                options={{
                  strings: [
                    "Olá, eu sou o Deep, Desenvolvedor Front-End & UX/UI Designer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h1>
            <p className="text-white max-w-md pt-3 z-10">
              <Typewriter
                onInit={(instance) => {
                  instance
                    .pauseFor(4575)
                    .typeString(
                      "Olá, sou o Deep, Desenvolvedor Front-End & UX/UI Designer. Crio experiências web dinâmicas e intuitivas utilizando as tecnologias mais modernas, como Next.js, React, Vite e TypeScript. Tenho experiência em desenvolvimento de interfaces com Shadcn/UI e Tailwind CSS, sempre focando em performance e design responsivo. Além disso, também exploro o desenvolvimento de pequenas aplicações em Lua. Se você busca soluções criativas e eficientes para a web, está no lugar certo!"
                    )
                    .start();
                }}
                options={{
                  delay: 10,
                }}
              />
            </p>
          </div>
          <div className="flex items-center justify-center z-10">
            <Image
              src="/foto_deep_ssBG.png"
              alt="Deep Foto"
              className="updown mt-10 rounded-xl border border-white shadow-[0px_0px_40px_rgba(255,255,255,0.1)] shadow-white"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <section id="skills" className="bg-grid-2 h-screen w-full justify-center items-center ocult2">
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <div className="z-20 bg-neutral-900 rounded-2xl flex flex-col w-[65%] h-3/4 justify-center items-center">
            <h1 className="text-transparent text-5xl font-semibold capitalize max-w-md text-center p-3 bg-gradient-to-r from-purple-500 to-indigo-900 bg-clip-text">
              Skills
            </h1>
            <p className="text-white max-w-md p-3">
              <Typewriter
                onInit={(instance) => {
                  instance
                    .typeString("Todas as Minhas Skills de Programação.")
                    .start();
                }}
              />
            </p>
            <div className="grid grid-rows-2 grid-cols-5 items-center justify-center gap-2">
              <div className="flex flex-col items-center gap-2 bg-slate-800 p-3 rounded-lg">
                <Image src="/html.svg" alt="HTML" width={50} height={50} />
                <p className="text-white m-2">HTML</p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-slate-800 p-3 rounded-lg">
                <Image src="/css3.svg" alt="HTML" width={50} height={50} />
                <p className="text-white m-2">CSS</p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-slate-800 p-3 rounded-lg">
                <Image src="/js.svg" alt="HTML" width={50} height={50} />
                <p className="text-white m-2">JavaScript</p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-slate-800 p-3 rounded-lg">
                <Image src="/typescript.svg" alt="HTML" width={50} height={50} />
                <p className="text-white m-2">TypeScript</p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-slate-800 p-3 rounded-lg">
                <Image src="/vite.svg" alt="HTML" width={50} height={50} />
                <p className="text-white m-2">Vite</p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-slate-800 p-3 rounded-lg">
                <Image src="/nextjs.svg" alt="HTML" width={50} height={50} />
                <p className="text-white m-2">Next.js</p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-slate-800 p-3 rounded-lg">
                <Image src="/react.svg" alt="HTML" width={50} height={50} />
                <p className="text-white m-2">React</p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-slate-800 p-3 rounded-lg">
                <Image src="/Lua-Logo.svg" alt="HTML" width={50} height={50} />
                <p className="text-white m-2">Lua</p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-slate-800 p-3 rounded-lg">
                <Image src="/love.svg" alt="HTML" width={50} height={50} />
                <p className="text-white m-2">Löve 2D</p>
              </div>
              <div className="flex flex-col items-center gap-2 bg-slate-800 p-3 rounded-lg">
                <Image src="/tailwindcss.svg" alt="HTML" width={50} height={50} />
                <p className="text-white m-2">Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projetos" className="bg-grid-2 h-screen w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-transparent text-5xl font-semibold capitalize max-w-md text-center p-3 bg-gradient-to-r from-purple-500 to-indigo-900 bg-clip-text">
            Projetos
          </h1>
          <p className="text-white py-5">
            <Typewriter
              onInit={(instance) => {
                instance
                  .typeString("Todos os meus projeos de Front-End e em Lua.")
                  .start();
              }}
            />
          </p>

          <div className="grid grid-cols-3 grid-rows-2 gap-5">
            <div className="w-[375px] h-[250px] bg-gradient-to-br from-violet-600 to-indigo-800 rounded-2xl flex flex-col justify-center items-center">
              <div className="bg-neutral-800 w-[97%] h-[95%] rounded-xl flex flex-col px-3 py-5">

                <div className="flex mb-3">
                <span className="bg-red-500 rounded-full p-[6px] mx-2"></span>
                <span className="bg-yellow-500 rounded-full p-[6px] mx-2"></span>
                <span className="bg-green-500 rounded-full p-[6px] mx-2"></span>
                </div>

                <div className="flex flex-col">
                  <h1 className="text-white font-bold text-xl mb-2">Registro RPG</h1>
                  <p className="text-white">No projeto foi feito um formulario que pode ser utilizado para criação de fichas de RPG posteriormente.</p>
                </div>

                <div className="flex justify-center relative ">
                  <button 
                    onClick={() => window.location.href = 'https://rrpg.miguelm.dev'}
                    aria-label="Assesar"
                    className="absolute top-[11px] mt-3 px-4 py-1 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl focus:outline-none"
                  >
                    Assesar
                  </button>
                </div>

              </div>
            </div>

            <div className="w-[375px] h-[250px] bg-gradient-to-br from-violet-600 to-indigo-800 rounded-2xl flex flex-col justify-center items-center ocult3">
              <div className="bg-neutral-800 w-[97%] h-[95%] rounded-xl flex flex-col px-3 py-5">

                <div className="flex mb-3">
                <span className="bg-red-500 rounded-full p-[6px] mx-2"></span>
                <span className="bg-yellow-500 rounded-full p-[6px] mx-2"></span>
                <span className="bg-green-500 rounded-full p-[6px] mx-2"></span>
                </div>

                <div className="flex flex-col">
                  <h1 className="text-white font-bold text-xl mb-2">Maze</h1>
                  <p className="text-white">No projeto foi feito o labirinto com o uso de JavaScript e HTML, que roda em navegadador.</p>
                </div>

                <div className="flex justify-center relative ">
                  <button 
                    onClick={() => window.location.href = 'https://maze.miguelm.dev'}
                    aria-label="Assesar"
                    className="absolute top-[35px] mt-3 px-4 py-1 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl focus:outline-none"
                  >
                    Assesar
                  </button>
                </div>
              </div>
            </div>
            
            <div className="w-[375px] h-[250px] bg-gradient-to-br from-violet-600 to-indigo-800 rounded-2xl flex flex-col justify-center items-center ocult3">
              <div className="bg-neutral-800 w-[97%] h-[95%] rounded-xl flex flex-col px-3 py-5">

                <div className="flex mb-3">
                <span className="bg-red-500 rounded-full p-[6px] mx-2"></span>
                <span className="bg-yellow-500 rounded-full p-[6px] mx-2"></span>
                <span className="bg-green-500 rounded-full p-[6px] mx-2"></span>
                </div>

                <div className="flex flex-col">
                  <h1 className="text-white font-bold text-xl mb-2">Portifolio</h1>
                  <p className="text-white">No projeto foi feito um portifolio de programação (Meu antigo portiflio).</p>
                </div>

                <div className="flex justify-center relative ">
                  <button 
                    onClick={() => window.location.href = 'https://old.miguelm.dev'}
                    aria-label="Assesar"
                    className="absolute top-[35px] mt-3 px-4 py-1 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl focus:outline-none"
                  >
                    Assesar
                  </button>
                </div>
              </div>
            </div>
            
            <div className="w-[375px] h-[250px] bg-gradient-to-br from-violet-600 to-indigo-800 rounded-2xl flex flex-col justify-center items-center ocult3">
              <div className="bg-neutral-800 w-[97%] h-[95%] rounded-xl flex flex-col px-3 py-5">

                <div className="flex mb-3">
                <span className="bg-red-500 rounded-full p-[6px] mx-2"></span>
                <span className="bg-yellow-500 rounded-full p-[6px] mx-2"></span>
                <span className="bg-green-500 rounded-full p-[6px] mx-2"></span>
                </div>

                <div className="flex flex-col">
                  <h1 className="text-white font-bold text-xl mb-2">Target</h1>
                  <p className="text-white">Target é um jogo em lua que tem o obijetivo de acertar um alvo.</p>
                </div>

                <div className="flex justify-center relative ">
                  <button 
                    onClick={() => window.location.href = 'https://github.com/D3epslat3/Target'}
                    aria-label="Assesar"
                    className="absolute top-[35px] mt-3 px-4 py-1 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-indigo-600 hover:shadow-indigo-500/50 hover:shadow-2xl focus:outline-none"
                  >
                    Assesar Git
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}