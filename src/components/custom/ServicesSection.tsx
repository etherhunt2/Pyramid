import React from 'react'
import Image from 'next/image'
import p1 from '../../../public/images/placeholder1.jpg'
import p2 from '../../../public/images/placeholder2.jpg'
import p3 from '../../../public/images/placeholder3.jpg'

type ServiceCardProps = {
    title: string
    description: string
    imageSrc: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg bg-gray-800">
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden transition-all duration-500 group-hover:scale-110">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:blur-sm"
                />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 transition-all duration-500">
                <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>

                {/* Description - hidden by default, shown on hover */}
                <div className="h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:h-auto group-hover:opacity-100">
                    <p className="text-gray-200">{description}</p>
                </div>
            </div>
        </div>
    )
}

const ServicesSection: React.FC = () => {
    const services = [
        {
            title: "Pyramid Talent",
            description: "Strategic workforce solutions to meet your hiring and talent needs. Lorem Ipsum",
            imageSrc: p1 // Replace with actual image in production
        },
        {
            title: "Career",
            description: "Training, career acceleration, and expert development programs.",
            imageSrc: p2 // Replace with actual image in production
        },
        {
            title: "Consulting",
            description: "Expert insights and solutions for your business challenges.",
            imageSrc: p3 // Replace with actual image in production
        }
    ]

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        We provide comprehensive solutions designed to help your business grow and succeed in today's competitive market.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            imageSrc={service.imageSrc.src}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection 