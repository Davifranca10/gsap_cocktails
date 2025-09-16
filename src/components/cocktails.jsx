import React from 'react';
import { cocktailLists } from '../../constants/index.js';
import { mocktailLists } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';



const Cocktails = () => {

    useGSAP(() => {



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
            scale: 1.6,
            xPercent: 100,
            duration: 1.5,
            scrollTrigger: {
                trigger: "#latanormal",
                start: "10% 30%",
                end: "85% center",
                markers: true,
                toggleActions: "play reverse play reverse"

            }

        });

        const lataZero = gsap.from("#latazero", {
            scale:1.6,
            xPercent: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: "#latanormal",
                start: "10% 30%",
                end: "85% center",
                markers: false,
                toggleActions: "play reverse play reverse"

            }

        })

    });

    return (
        <section id='cocktails' className='z-10'>

            <div className="absolute h-100% inset-0 bg-black/30 backdrop-blur-[2px] -z-5 -mt-1"></div>

            <div id='leafs' className='y-'>
                <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
                <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />
            </div>

            <div id='logo-coca' className=''>
                <img src="/images/coca-logo.png" alt="coca-logo" className='absolute left-1/2 top-40 transform -translate-x-1/2 -translate-y-1/2' />
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