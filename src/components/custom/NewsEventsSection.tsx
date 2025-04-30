import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

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

async function getNewsEvents(): Promise<NewsEvent[]> {
    try {
        const payload = await getPayload({ config: configPromise })

        const result = await payload.find({
            collection: 'newsEvents',
            limit: 3,
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

const NewsEventsSection = async () => {
    const newsEvents = await getNewsEvents()

    // Fallback data if no real data is available
    const fallbackData: NewsEvent[] = [
        {
            id: '1',
            title: 'Pyramid Launches New AI Solution',
            publishedAt: new Date().toISOString(),
            eventType: 'news',
            slug: 'pyramid-launches-new-ai-solution',
        },
        {
            id: '2',
            title: 'Webinar: Future of Work and Talent',
            publishedAt: new Date().toISOString(),
            eventType: 'event',
            slug: 'webinar-future-of-work',
        },
        {
            id: '3',
            title: 'Partnership Announcement with Techcorp',
            publishedAt: new Date().toISOString(),
            eventType: 'news',
            slug: 'partnership-techcorp',
        }
    ]

    const data = newsEvents.length > 0 ? newsEvents : fallbackData

    return (
        <section className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold">News & Events</h2>
                    <Link
                        href="/news-events"
                        className="text-purple-400 hover:text-purple-300 flex items-center transition-colors duration-300"
                    >
                        All News & Events
                        <svg
                            className="ml-1 w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((item) => (
                        <NewsEventCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewsEventsSection 