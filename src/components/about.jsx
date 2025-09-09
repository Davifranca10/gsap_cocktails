import React from 'react';

const About = () => {
    return (
        <div id='about'>
            <div className='mb-16 md:px-0 px-5'>
                <div className='content'>
                    <div className='md:col-span-8'>
                        <p className='badge'>Melhores Refris</p>
                        <h2>
                            Onde cada detalhe importa <span className='text-white'>-</span>
                            Do sabor ao amor
                        </h2>

                        <div className='sub-content'>
                            <p>
                                Todos os coquetéis servem para a reflexão da sua obsessão por sabores únicos e
                                experiências memoráveis. Cada gole é uma celebração da arte de misturar ingredientes de alta qualidade,
                                criando bebidas que não são apenas deliciosas, mas também visualmente deslumbrantes. Nossa paixão é
                                proporcionar momentos inesquecíveis, onde cada coquetel conta uma história e cada sabor desperta emoções.
                            </p>

                            <div>
                                <p className='md:text-3xl text-xl font-bold '>
                                    <span>4.5</span>/5
                                </p>
                                <p className='text-sm text-white-100'>
                                    Mais de 10.000 avaliações no Google
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='top-grid'>
                    <div className='md:col-span-3'>
                        <div className='noisy' />
                        <img src="/images/abt1.png" alt="grid-img-1" />
                    </div>


                    <div className='md:col-span-6'>
                        <div className='noisy' />
                        <img src="/images/abt2.png" alt="grid-img-2" />
                    </div>

                    <div className='md:col-span-3'>
                        <div className='noisy' />
                        <img src="/images/abt5.png" alt="grid-img-5" />
                    </div>

                </div>

                <div className='bottom-grid'>
                    <div className='md:col-span-8'>
                        <div className='noisy' />
                        <img src="/images/abt3.png" alt="grid-img-3" />
                    </div>
                    <div className='md:col-span-4'>
                        <div className='noisy' />
                        <img src="/images/abt4.png" alt="grid-img-4" />

                    </div>

                </div>


            </div>
        </div >
    );
};

export default About;