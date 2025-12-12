"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const animationPatterns = [
    { aos: "fade-up", duration: "600" },
    { aos: "fade-right", duration: "800" },
    { aos: "zoom-in", duration: "600" },
    { aos: "fade-left", duration: "800" },
    { aos: "fade-up", duration: "1000" },
    { aos: "fade-right", duration: "600" }
]

const blogPosts = [
    {
        id: 1,
        title: "¿Qué empresas usan la inteligencia artificial?",
        excerpt: "La inteligencia artificial (IA) está revolucionando el panorama empresarial, ofreciendo soluciones innovadoras que impactan en la eficiencia, la toma de decisiones y la experiencia del cliente.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221027/vectux-academy/assets/blog-1.webp",
        category: "IA",
        date: "29 de Noviembre, 2024",
        slug: "que-empresas-usan-la-inteligencia-artificial"
    },
    {
        id: 2,
        title: "¿Por qué utilizar IA en las empresas?",
        excerpt: "La inteligencia artificial (IA) se ha convertido en un recurso esencial para las empresas que aspiran a mejorar sus procesos y mantener su competitividad.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221066/vectux-academy/assets/blog-2.webp",
        category: "IA",
        date: "29 de Noviembre, 2024",
        slug: "por-que-utilizar-ia-en-las-empresas"
    },
    {
        id: 3,
        title: "¿Qué hace la inteligencia artificial en las empresas?",
        excerpt: "La inteligencia artificial (IA) está revolucionando la forma en que operan las empresas, facilitándoles la optimización de procesos y la toma de decisiones informadas.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221072/vectux-academy/assets/blog-3.webp",
        category: "IA",
        date: "29 de Noviembre, 2024",
        slug: "que-hace-la-inteligencia-artificial-en-las-empresas"
    },
    {
        id: 4,
        title: "¿Qué se necesita para aprender inteligencia artificial?",
        excerpt: "Aprender inteligencia artificial (IA) puede parecer desafiante, pero con los recursos adecuados, como cursos de IA, cualquiera puede comenzar su camino en este campo.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221077/vectux-academy/assets/blog-4.webp",
        category: "IA",
        date: "29 de Noviembre, 2024",
        slug: "que-se-necesita-para-aprender-inteligencia-artificial"
    },
    {
        id: 5,
        title: "¿Qué rama es mejor para la IA?",
        excerpt: "La inteligencia artificial (IA) se ha transformado en una disciplina amplia que abarca varios campos, cada uno con sus propios usos y ventajas particulares.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221090/vectux-academy/assets/blog-5.webp",
        category: "IA",
        date: "29 de Noviembre, 2024",
        slug: "que-rama-es-mejor-para-la-ia"
    },
    {
        id: 6,
        title: "¿Qué título se necesita para la inteligencia artificial?",
        excerpt: "La inteligencia artificial (IA) está revolucionando las industrias y remodelando el lugar de trabajo, y cada vez más expertos muestran interés en investigar esta tecnología revolucionaria.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221094/vectux-academy/assets/blog-6.webp",
        category: "IA",
        date: "29 de Noviembre, 2024",
        slug: "que-titulo-se-necesita-para-la-inteligencia-artificial"
    },
    {
        id: 7,
        title: "¿Qué se hace en un curso de inteligencia artificial?",
        excerpt: "En un mundo cada vez más impulsado por la tecnología, la inteligencia artificial (IA) se ha convertido en una de las herramientas más revolucionarias y demandadas.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221102/vectux-academy/assets/blog-7.webp",
        category: "IA",
        date: "29 de Noviembre, 2024",
        slug: "que-se-hace-en-un-curso-de-inteligencia-artificial"
    },
    {
        id: 8,
        title: "¿Qué hay que estudiar para dedicarse a la inteligencia artificial?",
        excerpt: "Para enfocarse en la inteligencia artificial, es esencial tener una base de conocimientos robusta en diferentes campos, ya que esta disciplina fusiona la programación.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221106/vectux-academy/assets/blog-8.webp",
        category: "IA",
        date: "25 de Noviembre, 2024",
        slug: "que-hay-que-estudiar-para-dedicarse-a-la-inteligencia-artificial"
    },
    {
        id: 9,
        title: "¿Quién creó la IA?",
        excerpt: "La inteligencia artificial (IA) ha fascinado a muchos, pero pocos conocen los detalles de su surgimiento y desarrollo. La inteligencia artificial, como área de estudio.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221110/vectux-academy/assets/blog-9.webp",
        category: "IA",
        date: "25 de Noviembre, 2024",
        slug: "quien-creo-la-ia"
    },
    {
        id: 10,
        title: "¿Cómo se utiliza la IA?",
        excerpt: "La inteligencia artificial (IA) está revolucionando rápidamente el entorno empresarial, transformando todo, desde el servicio al cliente hasta la mejora de procesos.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221032/vectux-academy/assets/blog-10.webp",
        category: "IA",
        date: "25 de Noviembre, 2024",
        slug: "como-se-utiliza-la-ia"
    },
    {
        id: 11,
        title: "¿Qué es la Inteligencia Artificial?",
        excerpt: "La inteligencia artificial (IA) ha ganado prominencia por su capacidad de imitar procesos humanos como el aprendizaje y la toma de decisiones.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221038/vectux-academy/assets/blog-11.webp",
        category: "IA",
        date: "10 de Octubre, 2024",
        slug: "que-es-inteligencia-artificial"
    }
]

const Blogs = () => {
    const router = useRouter()

    return (
        <section className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#343ec2] via-[#5a3db8] to-[#8d4aed]">
            <div className="max-w-[1200px] mx-auto">
                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => {
                        const pattern = animationPatterns[index % animationPatterns.length]
                        return (
                            <article
                            key={post.id}
                            data-aos={pattern.aos}
                            data-aos-duration={pattern.duration}
                            data-aos-delay={(index % 3) * 100}
                            className="group bg-black/30 backdrop-blur-sm rounded-[16px] overflow-hidden border border-[#e3e3e330] hover:border-[#4cc9f0] transition-all duration-300"
                        >
                            {/* Thumbnail */}
                            <button onClick={() => router.push(`/blog/${post.slug}`)} className="block relative aspect-[16/10] overflow-hidden w-full cursor-pointer">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Badge */}
                                <span className="absolute top-4 left-4 bg-[#4cc9f0] text-[#0a0a1a] font-Manrope font-bold text-[12px] uppercase tracking-[1px] px-3 py-1 rounded-full">
                                    {post.category}
                                </span>
                            </button>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-white font-bold text-[18px] leading-[26px] mb-3 group-hover:text-[#4cc9f0] transition-colors duration-300">
                                    <button onClick={() => router.push(`/blog/${post.slug}`)} className="cursor-pointer">
                                        {post.title}
                                    </button>
                                </h3>
                                <p className="text-white/70 font-Manrope text-[14px] leading-[22px] mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Read More */}
                                <button
                                    onClick={() => router.push(`/blog/${post.slug}`)}
                                    className="inline-block text-[#4cc9f0] font-Manrope font-semibold text-[13px] uppercase tracking-[1px] hover:text-white transition-colors duration-300 cursor-pointer"
                                >
                                    Leer
                                </button>

                                {/* Meta */}
                                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-white/50 font-Manrope text-[12px]">
                                    <span>{post.date}</span>
                                    <span>Sin comentarios</span>
                                </div>
                            </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Blogs
