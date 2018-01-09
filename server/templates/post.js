import { SiteConf } from 'base'

export default function post(params) {
  
  const post = params.state.Post
  const state = JSON.stringify(params.state)
  const postUrl = `${ SiteConf.BlogUrl }/${ post.slug }`
  const tagList = post.tags.reduce((acc, tag) => (
    acc + `    <meta property="article:tag" content="${ tag.name }" />\n`)
    , '\n')
  const tag = post.tags[0] ? post.tags[0].name : ''

  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${ post.title } | ${ SiteConf.BlogTitle }</title>
    <meta name="theme-color" content="#f72354">
    <meta name="HandheldFriendly" content="True" />
    <meta name="referrer" content="no-referrer-when-downgrade" />
    <meta name="description" content="${ post.meta_description }" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="${ SiteConf.KeyWords }"> 
    ${ params.style }
    <link rel="icon" href="${ SiteConf.SiteUrl }/assets/images/favicon.ico"/>
    <link rel="canonical" href="${ postUrl }" />
    
    <meta property="og:locale" content="es_ES" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${ post.title }" />
    <meta property="og:site_name" content="${ SiteConf.BlogTitle }" />
    <meta property="og:url" content="${ postUrl }" />
    <meta property="og:image" content="${ SiteConf.ServerUrl }/${ SiteConf.blogTitleImage }" />
    <meta property="og:description" content="${ post.meta_description }" />
    <meta property="article:modified_time" content="${ post.updated_at }" /> 
    <meta property="article:published_time" content="${ post.published_at }" />
    ${ tagList }
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${ post.title }" />
    <meta name="twitter:url" content="${ postUrl }" />
    <meta name="twitter:label1" content="Written by" />
    <meta name="twitter:data1" content="${ SiteConf.Author }" />
    <meta name="twitter:creator" content="${ SiteConf.Author }" />
    <meta name="google-site-verification" content="WPquQ1N8IxHd4sXYLzqumAtex4IlcULtupjrsaCZT7s" />

    <script type="application/ld+json">
      {
          "@context": "https://schema.org",
          "@type": "Article",
          "publisher": {
              "@type": "Organization",
              "name": "${ SiteConf.Author }",
              "name": "${ post.meta_description }",
              "logo": "${ SiteConf.ServerUrl }/${ SiteConf.blogTitleImage }"
          },
          "author": {
              "@type": "Person",
              "name": "${ SiteConf.Author }",
              "url": "${ SiteConf.BlogUrl }",
              "sameAs": [
                  "${ SiteConf.SiteUrl }",
                  "${ SiteConf.socialLinks.twitter }",
                  "${ SiteConf.socialLinks.linkedIn }",
              ]
          },
          "headline": "${ post.title }",
          "url": "${ postUrl }",
          "datePublished": "${ post.published_at }",
          "dateModified": "${ post.updated_at }",
          "image": "${ SiteConf.ServerUrl }/${ SiteConf.blogTitleImage }",
          "keywords": "${ tag }",
          "description": "${ post.meta_description }",
          "mainEntityOfPage": {
              "@type": "WebPage",
              "name": "${ SiteConf.BlogTitle }",
              "@id": "${ SiteConf.BlogUrl }"
            }
          }
        </script>

    ${ params.vendorScript }
    </head>
    <body>
      <div id="root">${ params.container }</div>
      <script>window.$REACTBASE_STATE = ${ state }</script>
      ${ params.appScript }
    </body>
  </html>
  `
}