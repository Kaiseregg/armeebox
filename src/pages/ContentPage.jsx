import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { fetchPage } from '../lib/api'
import { slugTitle } from '../lib/utils'

export default function ContentPage({ slug }) {
  const [page, setPage] = useState(null)
  useEffect(() => { fetchPage(slug).then(setPage).catch(console.error) }, [slug])
  return (
    <Layout>
      <Seo title={`ARMEEBOX – ${slugTitle(slug)}`} description={`ARMEEBOX Seite ${slugTitle(slug)}`} />
      <section className='panel stack'>
        <h1>{page?.title_de || slugTitle(slug)}</h1>
        <div className='contentText'>{page?.content_de || 'Inhalt folgt.'}</div>
      </section>
    </Layout>
  )
}
