"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
        title: "Which companies use artificial intelligence?",
        excerpt: "Artificial intelligence (AI) is revolutionizing the business landscape, offering innovative solutions that impact efficiency, decision-making, and the customer experience.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221027/vectux-academy/assets/blog-1.webp",
        category: "AI",
        date: "November 29, 2024",
        slug: "que-empresas-usan-la-inteligencia-artificial"
    },
    {
        id: 2,
        title: "Why use AI in business?",
        excerpt: "Artificial intelligence (AI) has become an essential resource for companies that aspire to improve their processes and maintain their competitiveness.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221066/vectux-academy/assets/blog-2.webp",
        category: "AI",
        date: "November 29, 2024",
        slug: "por-que-utilizar-ia-en-las-empresas"
    },
    {
        id: 3,
        title: "What does artificial intelligence do in companies?",
        excerpt: "Artificial intelligence (AI) is revolutionizing the way companies operate, making it easier for them to optimize processes and make informed decisions.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221072/vectux-academy/assets/blog-3.webp",
        category: "AI",
        date: "November 29, 2024",
        slug: "que-hace-la-inteligencia-artificial-en-las-empresas"
    },
    {
        id: 4,
        title: "What is needed to learn artificial intelligence?",
        excerpt: "Learning artificial intelligence (AI) might seem challenging, but with the right resources, such as AI courses, anyone can begin their journey in the field.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221077/vectux-academy/assets/blog-4.webp",
        category: "AI",
        date: "November 29, 2024",
        slug: "que-se-necesita-para-aprender-inteligencia-artificial"
    },
    {
        id: 5,
        title: "Which branch is best for AI?",
        excerpt: "Artificial intelligence (AI) has transformed into a broad discipline encompassing various fields, each with its own particular uses and advantages.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221090/vectux-academy/assets/blog-5.webp",
        category: "AI",
        date: "November 29, 2024",
        slug: "que-rama-es-mejor-para-la-ia"
    },
    {
        id: 6,
        title: "What degree is needed for artificial intelligence?",
        excerpt: "Artificial intelligence (AI) is revolutionizing industries and reshaping the workplace, and more and more experts are showing interest in researching this revolutionary technology.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221094/vectux-academy/assets/blog-6.webp",
        category: "AI",
        date: "November 29, 2024",
        slug: "que-titulo-se-necesita-para-la-inteligencia-artificial"
    },
    {
        id: 7,
        title: "What do you do in an artificial intelligence course?",
        excerpt: "In a world increasingly driven by technology, artificial intelligence (AI) has become one of the most revolutionary and in-demand tools.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221102/vectux-academy/assets/blog-7.webp",
        category: "AI",
        date: "November 29, 2024",
        slug: "que-se-hace-en-un-curso-de-inteligencia-artificial"
    },
    {
        id: 8,
        title: "What do you need to study to work in artificial intelligence?",
        excerpt: "To focus on artificial intelligence, it is essential to have a robust knowledge base in different fields, since this discipline merges programming.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221106/vectux-academy/assets/blog-8.webp",
        category: "AI",
        date: "November 25, 2024",
        slug: "que-hay-que-estudiar-para-dedicarse-a-la-inteligencia-artificial"
    },
    {
        id: 9,
        title: "Who created AI?",
        excerpt: "Artificial intelligence (AI) has fascinated many, yet few know the details of its emergence and development. Artificial intelligence, as an area of study.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221110/vectux-academy/assets/blog-9.webp",
        category: "AI",
        date: "November 25, 2024",
        slug: "quien-creo-la-ia"
    },
    {
        id: 10,
        title: "How is AI used?",
        excerpt: "Artificial intelligence (AI) is rapidly revolutionizing the business environment, transforming everything from customer service to process improvement.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221032/vectux-academy/assets/blog-10.webp",
        category: "AI",
        date: "November 25, 2024",
        slug: "como-se-utiliza-la-ia"
    },
    {
        id: 11,
        title: "What is Artificial Intelligence?",
        excerpt: "Artificial intelligence (AI) has gained prominence for its ability to mimic human processes such as learning and decision-making.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221038/vectux-academy/assets/blog-11.webp",
        category: "AI",
        date: "October 10, 2024",
        slug: "que-es-inteligencia-artificial"
    }
]

const Blogs = () => {
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
                            <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
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
                            </Link>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-white font-bold text-[18px] leading-[26px] mb-3 group-hover:text-[#4cc9f0] transition-colors duration-300">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-white/70 font-Manrope text-[14px] leading-[22px] mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Read More */}
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-block text-[#4cc9f0] font-Manrope font-semibold text-[13px] uppercase tracking-[1px] hover:text-white transition-colors duration-300"
                                >
                                    Read
                                </Link>

                                {/* Meta */}
                                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-white/50 font-Manrope text-[12px]">
                                    <span>{post.date}</span>
                                    <span>No comments</span>
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
