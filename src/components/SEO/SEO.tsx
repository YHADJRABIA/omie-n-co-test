import { websiteUrl } from "@/utilities/general"
import Head from "next/head"
import { FC, ReactNode } from "react"

interface PropTypes {
  title: string
  description: string
  keywords?: string
  author?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  children?: ReactNode
}

const SEO: FC<PropTypes> = ({
  title,
  description,
  keywords,
  author,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  children,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author ?? "Yacine Hadj Rabia"} />

      {/* Open Graph */}

      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={
          ogImage ??
          "https://www.omie.fr/_next/static/images/omie_logo_bleu-c3ff610a93298b2cb4efdbe64469bec3.png"
        }
      />
      <meta property="og:url" content={ogUrl ?? websiteUrl} />
      {children}
    </Head>
  )
}

export default SEO
