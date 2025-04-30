import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'News & Events | Pyramid Consulting',
    description: 'Stay updated with the latest news and upcoming events from Pyramid Consulting.',
}

type NewsEvent = {
    id: string
    title: string
    publishedAt: string
    eventType: 'news' | 'event'
    slug: string
    hero?: {
        media?: {
            url: string
            alt: string
        }
    }
}

async function getNewsEvents(): Promise<NewsEvent[]> {
    try {
        const payload = await getPayload({ config: configPromise })

        const result = await payload.find({
            collection: 'newsEvents',
            limit: 20,
            sort: '-publishedAt',
            where: {
                _status: {
                    equals: 'published',
                },
            },
        })

        return result.docs as unknown as NewsEvent[]
    } catch (error) {
        console.error('Error fetching news & events:', error)
        return []
    }
}

const NewsEventCard: React.FC<{ item: NewsEvent }> = ({ item }) => {
    const { title, publishedAt, eventType, slug, hero } = item
    const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    })

    return (
        <Link href={`/news-events/${slug}`} className="block group">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                {/* Image */}
                <div className="relative h-48 w-full">
                    {hero?.media?.url ? (
                        <Image
                            src={hero.media.url}
                            alt={hero.media.alt || title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-purple-800 flex items-center justify-center text-white">
                            {eventType === 'news' ? 'News' : 'Event'}
                        </div>
                    )}
                    <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs px-2 py-1 rounded uppercase">
                        {eventType}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <p className="text-gray-400 text-sm mb-2">{formattedDate}</p>
                    <h3 className="text-lg font-semibold text-white mb-3 transition-colors duration-300 group-hover:text-purple-400">
                        {title}
                    </h3>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-purple-400 flex items-center">
                            Read more
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
            </div>
        </Link>
    )
}

export default async function NewsEventsPage() {
    const newsEvents = await getNewsEvents()

    // Fallback data if no real data is available
    const fallbackData: NewsEvent[] = Array(6).fill(null).map((_, index) => ({
        id: String(index + 1),
        title: index % 2 === 0
            ? `Pyramid Consulting Announces New ${index + 1}`
            : `Upcoming Industry Webinar ${index + 1}`,
        publishedAt: new Date(Date.now() - index * 864000000).toISOString(), // Subtract days
        eventType: index % 2 === 0 ? 'news' : 'event',
        slug: `placeholder-${index + 1}`,
    }))

    const data = newsEvents.length > 0 ? newsEvents : fallbackData

    return (
        <div className="pt-28 pb-20 bg-gray-900 min-h-screen text-white">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">News & Events</h1>
                    <p className="text-gray-300 max-w-2xl">
                        Stay updated with the latest news and upcoming events from Pyramid Consulting.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((item) => (
                        <NewsEventCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
} 