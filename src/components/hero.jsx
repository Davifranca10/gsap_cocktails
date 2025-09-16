import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {

	const videoRef = useRef();

	// Note: containerRef removed as it was unused

	useGSAP(() => {
		const heroSplit = new SplitText(".title", {
			type: "chars, words",
		});

		const paragraphSplit = new SplitText(".subtitle", {
			type: "lines",
		});

		// Apply text-gradient class once before animating
		heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

		gsap.from(heroSplit.chars, {
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.06,
		});

		gsap.from(paragraphSplit.lines, {
			opacity: 0,
			yPercent: 100,
			duration: 1.8,
			ease: "expo.out",
			stagger: 0.06,
			delay: 1,
		});

		gsap
			.timeline({
				scrollTrigger: {
					trigger: "#hero",
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			})
			.to(".right-leaf", { y: 200 }, 0)
			.to(".left-leaf", { y: -200 }, 0)
			.to(".arrow", { y: 100 }, 0);

		// Removed unused startValue/endValue calculations

		const videoEl = videoRef.current;
		if (videoEl) {
			// Try to autoplay when loaded; muted+playsInline allow autoplay on most browsers
			videoEl.onloadedmetadata = () => {
				videoEl.play().catch(() => {
					// Autoplay might be blocked; ensure at least it's ready
				});
				gsap.to(videoEl, {
					currentTime: videoEl.duration || 0,
					ease: "none",
					scrollTrigger: {
						trigger: "#hero",
						start: "top top",
						end: "bottom bottom",
						scrub: true,
					}
				});
			};
			// Fallback: attempt to play immediately in case metadata already loaded
			videoEl.play?.().catch(() => {});
		}
	}, []);

	return (
		<>
			<section id="hero" className="noisy">
				<h1 className="title text-[#e22a2a]">Coca-Cola</h1>

				<img
					src="/images/hero-left-leaf.png"
					alt="left-leaf"
					className="left-leaf"
				/>
				<img
					src="/images/hero-right-leaf.png"
					alt="right-leaf"
					className="right-leaf"
				/>

				<div className="body">
					{/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}

					<div className="content">
						<div className="space-y-5 hidden md:block">
							<p>Gelada. Refrescante. Inconfundível.</p>
							<p className="subtitle text-[#D70319]">
								Sinta o Sabor <br /> da Felicidade
							</p>
						</div>

						<div className="view-cocktails">
							<p className="subtitle">
								Cada produto <span className='text-[#E01D1D]'>Coca-Cola</span> é feito para trazer refrescância, sabor
								único e momentos inesquecíveis — criado para encantar todos os
								sentidos.
							</p>
							<a href="#cocktails" className='text-[#D90D0D] hover:text-[#FFFFFF] duration-200 text-2xl transition-all'>Ver produtos</a>
						</div>
					</div>
				</div>
			</section>

			<div className="video absolute inset-0">
				<video
					ref={videoRef}
					autoPlay
					muted
					playsInline
					preload="auto"
					src="/videos/output.mp4"
				/>
			</div>
		</>
	);
};

export default Hero;
