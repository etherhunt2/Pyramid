import React from 'react'

const ClientsSection: React.FC = () => {
    const clients = [
        { id: 1, name: 'Client 1', logo: '/client1.svg' },
        { id: 2, name: 'Client 2', logo: '/client2.svg' },
        { id: 3, name: 'Client 3', logo: '/client3.svg' },
        { id: 4, name: 'Client 4', logo: '/client4.svg' },
        { id: 5, name: 'Client 5', logo: '/client5.svg' },
        { id: 6, name: 'Client 6', logo: '/client6.svg' },
    ]

    return (
        <section className="py-16 bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Our Clients</h2>

                <div className="flex items-center justify-center mb-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-4">
                            <span className="text-lg font-bold block">4</span>
                            <span className="text-sm text-gray-400">Top U.S. airlines</span>
                        </div>
                        <div className="p-4">
                            <span className="text-lg font-bold block">4</span>
                            <span className="text-sm text-gray-400">of the top 5 P&C insurance providers</span>
                        </div>
                        <div className="p-4">
                            <span className="text-lg font-bold block">3</span>
                            <span className="text-sm text-gray-400">of the top 5 retail banks</span>
                        </div>
                        <div className="p-4">
                            <span className="text-lg font-bold block">5</span>
                            <span className="text-sm text-gray-400">leading automotive manufacturers</span>
                        </div>
                    </div>
                </div>

                {/* Logo marquee - slow moving carousel effect */}
                <div className="relative overflow-hidden">
                    <div className="animate-marquee flex space-x-12 py-8">
                        {[...clients, ...clients].map((client, index) => (
                            <div
                                key={`${client.id}-${index}`}
                                className="flex-shrink-0 w-32 h-12 bg-gray-700 rounded flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                            >
                                {/* In production, use actual logos */}
                                <div className="text-gray-300">{client.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Add this to your globals.css file:
// @keyframes marquee {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }
// .animate-marquee {
//   animation: marquee 30s linear infinite;
// }

export default ClientsSection 