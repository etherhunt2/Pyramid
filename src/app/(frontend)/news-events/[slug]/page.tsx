import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const newsEvent = await getNewsEvent(params.slug)

    if (!newsEvent) {
        return {
            title: 'Not Found',
            description: 'The page you are looking for does not exist.',
        }
    }

    return generateMeta({ doc: newsEvent })
}

async function getNewsEvent(slug: string) {
    try {
        const { isEnabled: draft } = await draftMode()
        const payload = await getPayload({ config: configPromise })

        const result = await payload.find({
            collection: 'newsEvents',
            limit: 1,
            where: {
                slug: {
                    equals: slug,
                },
            },
            draft,
        })

        return result.docs[0] || null
    } catch (error) {
        console.error('Error fetching news event:', error)
        return null
    }
}

export default async function NewsEventPage({ params }: { params: { slug: string } }) {
    const { isEnabled: draft } = await draftMode()
    const newsEvent = await getNewsEvent(params.slug)

    if (!newsEvent) {
        return notFound()
    }

    const { title, eventType, publishedAt, hero, layout } = newsEvent

    const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <article className="pt-28 pb-20 bg-gray-900 min-h-screen text-white">
            {draft && <LivePreviewListener />}

            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link
                        href="/news-events"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6"
                    >
                        <svg
                            className="mr-2 w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to News & Events
                    </Link>

                    <div className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded uppercase mb-4">
                        {eventType}
                    </div>

                    <h1 className="text-4xl font-bold mb-4">{title}</h1>
                    <p className="text-gray-400">{formattedDate}</p>
                </div>

                <RenderHero {...hero} />
                <RenderBlocks blocks={layout} />
            </div>
        </article>
    )
} 