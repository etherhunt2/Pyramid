import React from 'react'

const AwardsSection: React.FC = () => {
  const awards = [
    { id: 1, name: 'Award 1', logo: '/award1.svg' },
    { id: 2, name: 'Award 2', logo: '/award2.svg' },
    { id: 3, name: 'Award 3', logo: '/award3.svg' },
    { id: 4, name: 'Award 4', logo: '/award4.svg' },
    { id: 5, name: 'Award 5', logo: '/award5.svg' },
  ]

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Awards & Recognition</h2>

        {/* Logo carousel - alternate implementation */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {awards.map((award) => (
            <div
              key={award.id}
              className="w-32 h-16 bg-gray-700 rounded-md flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              {/* In production, use actual logos */}
              <div className="text-gray-300">{award.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AwardsSection 