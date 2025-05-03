import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'
import type { Page } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Logo } from '@/components/Logo/Logo'
import HeroSection from '@/components/custom/HeroSection'
import ServicesSection from '@/components/custom/ServicesSection'
import ClientsSection from '@/components/custom/ClientsSection'
import WorkSection from '@/components/custom/WorkSection'
import AwardsSection from '@/components/custom/AwardsSection'
import PartnershipsSection from '@/components/custom/PartnershipsSection'
import NewsEventsSection from '@/components/custom/NewsEventsSection'
import TurningProblemsSection from '@/components/custom/TurningProblemsSection'

export default async function HomePage() {
    const { isEnabled: draft } = await draftMode()
    const slug = 'home'
    let page = await queryPageBySlug({ slug })

    // Remove this code once your website is seeded
    if (!page) {
        page = homeStatic as any
    }

    const { hero, layout } = page || {}
    return (
        <article className="bg-[#1c1c1c] text-white">
            {draft && <LivePreviewListener />}

            {/* Custom Hero Section */}
            {/* Hero Section */}
            <HeroSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Clients Section */}
            <ClientsSection />

            {/* Work Section */}
            {/* <WorkSection /> */}
            {/* <WorkSection /> */}

            {/* Awards Section */}
            {/* <AwardsSection /> */}

            {/* Partnerships Section */}
            {/* <PartnershipsSection /> */}

            {/* News & Events Section */}
            {/* <NewsEventsSection /> */}

            {/* Turning Problems into Possibilities Section */}
            <TurningProblemsSection />
        </article>
    )
}

export async function generateMetadata(): Promise<Metadata> {
    const slug = 'home'
    const page = await queryPageBySlug({ slug })

    return {
        title: 'STELIOS - Talent, Tech & Training Solutions',
        description: 'Supercharge your future with innovative talent, technology and training solutions. We transform business challenges into opportunities.',
        ...generateMeta({ doc: page }),
    }
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
        collection: 'pages',
        draft,
        limit: 1,
        pagination: false,
        overrideAccess: draft,
        where: {
            slug: {
                equals: slug,
            },
        },
    })

    return result.docs?.[0] || null
})
