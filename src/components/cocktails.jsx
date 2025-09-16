import React from 'react';
import { cocktailLists } from '../../constants/index.js';
import { mocktailLists } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';



const Cocktails = () => {

    useGSAP(() => {

        const letrasCom = new SplitText("#com", {
            type: "chars",
        });

        const letrasSem = new SplitText("#sem", {
            type: "chars",
        });

        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
                markers: false
            }
        });

        parallaxTimeline.from('#c-left-leaf', {
            x: -100, y: 100
        }).from('#c-right-leaf', {
            x: 100, y: 100
        });


        const listaBebidas = new SplitText(".coca", {
            type: "lines",
        });

        const cocasLataFrom = gsap.from(listaBebidas.lines, {
            xPercent: 70,
            opacity: 0,
            scale: 0.5,
            duration: 2,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".coca",
                start: "78% 70%",
                end: "center 10%",
                markers: false,
                toggleActions: "play reverse play reverse"
            }

        });

        const lataNormal = gsap.from("#latanormal", {
            opacity: 0,
            rotate: -90,
            scale: 2.5,
            xPercent: -100,
            duration: 1.5,
            scrollTrigger: {
                trigger: "#latanormal",
                start: "5% 30%",
                end: "85% center",
                markers: false,
                toggleActions: "play reverse play reverse"

            }

        });

        const lataZero = gsap.from("#latazero", {
            opacity: 0,
            rotate: 90,
            scale: 2.5,
            xPercent: 200,
            duration: 1.5,
            scrollTrigger: {
                trigger: "#latazero",
                start: "5% 30%",
                end: "85% center",
                markers: false,
                toggleActions: "play reverse play reverse"

            }

        });

        const logo = gsap.fromTo("#logococa", {
            opacity: 0,
            xPercent: -50,
            yPercent: -60,
            scale: 0.80
        }, {
            opacity: 1,
            scale: 0.45,
            duration: 1.5,
            yPercent: -35,
            xPercent: -210,

            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: "#logococa",
                start: "190% 90%",
                end: "bottom top",
                markers: false,
                toggleActions: "play reverse play reverse"


            }
        });

        const logoZero = gsap.fromTo("#logococazero", {
            opacity: 0,
            xPercent: -50,
            yPercent: -60,
            scale: 0.80
        }, {
            opacity: 1,
            scale: 0.45,
            duration: 1.5,
            yPercent: -35,
            xPercent: 30,

            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: "#logococa",
                start: "190% 90%",
                end: "bottom top",
                markers: false,
                toggleActions: "play reverse play reverse"


            }
        });

        const comAcucar = gsap.fromTo(letrasCom.chars, {
            opacity: 0,
            yPercent: 50
        }, {
            opacity: 1,
            duration: 1.5,
            yPercent: 400,

            scrollTrigger: {
                trigger: "#com",
                start: "100% 30%",
                end: "190% top",
                markers: false,
                toggleActions: "play reverse play reverse"


            }
        });

        const semAcucar = gsap.fromTo(letrasSem.chars, {
            opacity: 0,
            yPercent: 50
        }, {
            opacity: 1,
            duration: 1.5,
            yPercent: 400,

            scrollTrigger: {
                trigger: "#sem",
                start: "100% 30%",
                end: "190% top",
                markers: false,
                toggleActions: "play reverse play reverse"


            }
        });

        gsap.from("#produto", {
            opacity: 0,
            filter:"blur(4px)",
            yPercent:60,
            duration: 2,
            scrollTrigger: {
                trigger: "#produto",
                start: "top 90%",
                end: "300% top",
                markers: false,
                scrub:true,
                toggleActions: "play reverse play reverse"

            }
        });

       


    });

    return (
        <section id='cocktails' className='z-10'>

            <div className="absolute h-100% inset-0 bg-black/30 backdrop-blur-[2px] -z-5 -mt-1"></div>

            <div id='leafs' className='y-'>
                <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
                <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />
            </div>

            <div>
                <h1 id='produto' className='blur-0 font-sansita absolute left-1/2 top-25 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-center'><span className='text-[#F01616]'>PRO</span>DUTOS</h1>
                <img id='logococa' src="/images/coca-logo.png" alt="coca-logo" className='absolute left-1/2 top-40 transform -translate-x-1/2 -translate-y-1/2' />
                <h2 id='com' className='text-4xl font-bold text-center font-sansita absolute left-40 top-20'>Com Açúcares</h2>
                <h2 id='sem' className='text-4xl font-bold text-center font-sansita absolute right-60 top-20 z-10'>Sem Açúcares</h2>
                <img id='logococazero' src="/images/coca-logo.png" alt="coca-logo" className='absolute left-1/2 top-40 transform -translate-x-1/2 -translate-y-1/2' />
            </div>


            <div className="list space-y-16 top-40">

                {/* Bebidas mais populares */}
                <div className="popular relative flex items-start">
                    <img id='latanormal'
                        src="/images/coca.png"
                        alt="coca"
                        className="absolute -left-48 -top-20 w-[500px] h-auto z-0"
                    />

                    <div className="coca relative z-10 ml-[140px]">
                        <h2 className='text-[#FF3333]'>Bebidas mais populares:</h2>
                        <ul className="space-y-2">
                            {cocktailLists.map(({ name, country, detail, price }) => (
                                <li key={name}>
                                    <div className="md:me-28">
                                        <h3 className="text-[#FFFFFF]">{name}</h3>
                                        <p className='text-[#FF3333]'>{country} | {detail}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bebidas sem Açúcares */}
                <div className="loved relative flex items-start">
                    <img id='latazero'
                        src="/images/coca-zero.png"
                        alt="coca-zero"
                        className="absolute -left-50 -top-24 w-[600px] h-auto z-0"
                    />

                    <div className="coca relative z-10 ml-[140px]">
                        <h2>Bebidas mais amadas sem Açúcares:</h2>
                        <ul className="space-y-2">
                            {mocktailLists.map(({ name, country, detail, price }) => (
                                <li key={name} className="mb-4">
                                    <div className="md:me-28">
                                        <h3 className='text-[#B70A20]'>{name}</h3>
                                        <p>{country} | {detail}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>



        </section>
    );
};

export default Cocktails;