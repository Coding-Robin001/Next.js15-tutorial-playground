"use client"

import Link from 'next/link'
import React from 'react'
import { use } from 'react'

const NewsArticle = ({ params, searchParams }: {
    params: Promise<{ articlesId: string }>
    searchParams: Promise<{ lang?: "en" | "fr" | "es" }>
}) => {

    const { articlesId } =  use(params)
    const { lang = "en" } = use(searchParams)

    return (
        <div className='h-[60vh]'>
            <h2
                className='text-[2rem] text-center my-[3rem] '
            >
                News article: <span className='text-[chocolate]'> {articlesId}</span>
            </h2>
            <p
                className='text-center my-[3rem] text-[1.5rem]'
            >
                Reading News in: <span className='text-[chocolate]'>{lang}</span> 
            </p>
            <div className='flex justify-center gap-6'>
                <Link
                    className='anchorTags'
                    href={`/articles/${articlesId}?lang=en`}
                >
                    ENGLISH
                </Link>
                <Link
                    className='anchorTags'
                    href={`/articles/${articlesId}?lang=es`}
                >
                    SPANISH
                </Link>
                <Link
                    className='anchorTags'
                    href={`/articles/${articlesId}?lang=fr`}
                >
                    FRENCH
                </Link>
            </div>
        </div>
    )
}

export default NewsArticle
