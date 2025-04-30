import React from 'react'

const PartnershipsSection: React.FC = () => {
    const partners = [
        { id: 1, name: 'Microsoft', logo: '/microsoft.svg' },
        { id: 2, name: 'Applivate', logo: '/applivate.svg' },
        { id: 3, name: 'Corent', logo: '/corent.svg' },
        { id: 4, name: 'Halicon', logo: '/halicon.svg' },
        { id: 5, name: 'Other', logo: '/other.svg' },
    ]

    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Our Partnerships & Alliances</h2>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="w-36 h-20 bg-gray-800 rounded-md flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                        >
                            {/* In production, use actual logos */}
                            <div className="text-gray-300">{partner.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PartnershipsSection 