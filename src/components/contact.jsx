import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 30%',
                toggleActions: 'play reverse play reverse'
            },
            ease: "power1.inOut"
        })

        timeline
            .from(titleSplit.words, {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .from('#contact h3, #contact p', {
                opacity: 0, yPercent: 100, stagger: 0.02
            })

        const latasZero = gsap.from('#cocazero', {
            opacity: 1,
            xPercent: -200,
            yPercent: 20,
            scale:1.5,
            rotate:100,
            ease: 'power1.inOut',
            duration: 5,
            scrollTrigger: {
                trigger: "#cocazero",
                start: '70% bottom',
                end: '20% 25%',
                markers: true,
                scrub:true,
                toggleActions:"play reverse play reverse"

            }
        })

        const latasCoca = gsap.from('#coca', {
            opacity: 1,
            xPercent: 200,
            yPercent: -80,
            scale:1.5,
            rotate:240,
            ease: 'power1.inOut',
            duration: 5,
            scrollTrigger: {
                trigger: "#cocazero",
                start: '65% bottom',
                end: '20% 25%',
                markers: true,
                scrub:true,
                toggleActions:"play reverse play reverse"

            }
        })

    })

    return (
        <footer id="contact" className='relative'>
            <img src="/images/coca.png" alt="coca" id="coca" className='absolute bottom-1' />
            <img src="/images/coca-zero.png" alt="coca-zero" id="cocazero" className='absolute right-1' />

            <div className="content">
                <h2 className='font-sansita text-6xl'>CONTATO</h2>

                <div>
                    <h3>Onde ficamos:</h3>
                    <p>R. Gustavo Lũders, 141 - Itoupava Norte, Blumenau - SC, 89052-010</p>
                </div>

                <div>
                    <h3>Contate-Nos</h3>
                    <p>(047) 3144-5200</p>
                    <h3>Atendimento ao Consumidor</h3>
                    <p>0800 727 1100</p>
                </div>



                <div>
                    <h3>Siga-Nos nas Redes Sociais</h3>

                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <img src={social.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact