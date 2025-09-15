import React from 'react';
import { cocktailLists } from '../../constants/index.js';
import { mocktailLists } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';


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

    });

    return (
        <section id='cocktails' className='z-10'>

            <div className="absolute h-100% inset-0 bg-black/30 backdrop-blur-[2px] -z-5 -mt-1"></div>

            <div id='leafs' className='y-'>
                <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
                <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />
            </div>


            <div className='list'>
                <div className='popular'>
                    <h2>Bebidas mais populares:</h2>

                    <ul>
                        {cocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className='md:me-28'>
                                    <h3 className='text-[#FF3333]'>{name}</h3>
                                    <p>{country} | {detail} </p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='loved'>
                    <h2>Bebidas mais amadas sem Açúcares:</h2>

                    <ul>
                        {mocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className='md:me-28'>
                                    <h3>{name}</h3>
                                    <p>{country} | {detail} </p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>


        </section>
    );
};

export default Cocktails;