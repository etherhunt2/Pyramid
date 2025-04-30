import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type WorkCardProps = {
    title: string
    description: string
    imageSrc: string
    link: string
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, imageSrc, link }) => {
    return (
        <Link href={link} className="block group">
            <div className="relative overflow-hidden rounded-lg">
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110"
                    />

                    {/* Overlay that appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-purple-600/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-100">
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-sm text-gray-200 mb-4">{description}</p>
                    <span className="inline-flex items-center text-sm font-medium text-white">
                        Learn more
                        <svg
                            className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    )
}

const WorkSection: React.FC = () => {
    const projects = [
        {
            title: "Demand Planning",
            description: "We helped optimize supply chain operations with advanced AI models.",
            imageSrc: "/work1.jpg", // Replace with actual image in production
            link: "/work/demand-planning"
        },
        {
            title: "Data Science",
            description: "Leveraging data insights to drive business growth and innovation.",
            imageSrc: "/work2.jpg", // Replace with actual image in production
            link: "/work/data-science"
        },
        {
            title: "Healthcare Analytics",
            description: "Transforming healthcare delivery through predictive analytics.",
            imageSrc: "/work3.jpg", // Replace with actual image in production
            link: "/work/healthcare-analytics"
        }
    ]

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Our Work</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <WorkCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            link={project.link}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/work"
                        className="inline-flex items-center px-6 py-3 rounded-md bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
                    >
                        View all case studies
                        <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WorkSection 