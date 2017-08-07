import env from '../shared/Env';

const Author = 'Pablo Magaz';
const SiteTitle = Author; 
const SiteDescription = Author;
const BlogTitle = 'El Blog Isomórfico';
const BlogDescription = 'JavaScript, programaci&oacute;n y mas';
const numPosts = 10;
const postOpeningChars= 46;
const codeHighlightDelay = 300;
const postOpeningSplitChar = '@@@';

let HostName;
let SiteUrl;
let BlogUrl;
let GhostUrl;
let ImageUrl;
let BaseApiUrl;
let PostsApiUrl;
let clientSecret;
let PostApiUrl;
let PostsApi;
let PostApi;
let ContentPath;

if (env === 'development') {
  HostName = 'http://localhost';
  clientSecret = '285ee4eda6c3';
  SiteUrl = `${ HostName }:8000`;
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = `${ HostName }:2369`;
  ImageUrl = GhostUrl;
  BlogUrl = `${ GhostUrl }/blog/`;
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = `${ SiteUrl }/api/post/`;
  PostsApiUrl = `${ SiteUrl }/api/posts/`;
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at&order=published_at desc&limit=${numPosts}`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;
} else {
  HostName = 'http://178.62.245.4';
  clientSecret = 'eeb1f09c6698';
  SiteUrl = `${ HostName }`;
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = `${ HostName }:2369`;
  ContentPath = '/var/www/ghost/content';
  ImageUrl = HostName;
  BlogUrl = `${ GhostUrl }/blog/`;
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = `${ SiteUrl }/api/post/`;
  PostsApiUrl = `${ SiteUrl }/api/posts/`;
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at&order=published_at desc&limit=${numPosts}`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;
} 

export function getPostUrl(slug) {
  return '/blog/' + slug;
}

export const SiteConf = { Author, SiteTitle, SiteUrl, BlogDescription, BlogTitle, BlogUrl, SiteDescription, ImageUrl, ContentPath, PostApi, PostsApi, PostApiUrl, PostsApiUrl, postOpeningChars, postOpeningSplitChar, codeHighlightDelay };
