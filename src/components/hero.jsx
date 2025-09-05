import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { gsap } from 'gsap';
import { useMediaQuery } from 'react-responsive';




gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {

    const videoRef = useRef();
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const containerRef = useRef(null);

    useGSAP(() => {

        const heroSplit = new SplitText('.title', { type: 'chars, words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
            .to('.right-leaf', { y: 250 }, 0)
            .to('.left-leaf', { y: -250 }, 0);

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true
            }
        })
        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            });
        }



    });

    return (
        <section id="hero" ref={containerRef} className="relative h-screen justify-center overflow-hidden border-0">

            <div className="absolute h-100% inset-0 bg-black/30 backdrop-blur-[2px] -z-5"></div>


            <h1 className='title'>MOJITO</h1>

            <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />

            <div className='body'>
                <div className='content'>
                    <div className='space-y-5 hidden md:block'>
                        <p>Bom, Gostoso, Clássico</p>
                        <p className='subtitle'> Saborear o espírito <br />do Verão</p>
                    </div>

                    <div className='view-cocktails overflow-hidden'>

                        <p className='subtitle transform-translate-y-1em'>
                            Cada coquetel do nosso menu é uma mistura de ingredientes premium,
                            toque criativo e receitas atemporais — elaborados para encantar seus sentidos.
                        </p>
                        <a href="#cocktails"> View Cocktails</a>
                    </div>

                </div>
            </div>




     
                <div className='video absolute  inset-0 h-[95%] -z-30'>
                    <video
                        src="/videos/output.mp4"
                        ref={videoRef}
                        muted
                        playsInline
                        preload='auto'
                        className="absolute top-20 left-0 h-full object-center -z-30"
                    />

                </div>



        </section>


    );
};

export default Hero; 