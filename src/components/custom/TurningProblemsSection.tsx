import React from 'react'

const TurningProblemsSection: React.FC = () => {
    const stats = [
        { value: '2', label: 'Years' },
        { value: '79+', label: 'Partners' },
        { value: '4', label: 'Countries' },
        { value: '16+', label: 'Solutions' },
        { value: '4083+', label: 'Consultants' },
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    {/* Logo */}
                    <div className="mb-8 md:mb-0 md:w-1/3 flex justify-center">
                        <div className="w-48 h-48 border-b-[150px] border-b-yellow-400 border-l-[75px] border-l-transparent border-r-[75px] border-r-transparent"></div>
                    </div>

                    {/* Text */}
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-8">
                            Turning<br />
                            Problems into<br />
                            Possibilities
                        </h2>

                        <p className="text-gray-300 mb-8">
                            Pyramid Consulting harnesses the collective power of our people, processes, and technologies to transform organizations. Our innovative solutions help clients meet their challenges and achieve their business goals.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold mb-8 text-center">Pyramid Consulting by the Numbers</h3>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TurningProblemsSection 