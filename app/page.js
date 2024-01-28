import { toNextMetadata } from "react-datocms";

import { performRequest } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";

import { PostIndex } from "@/components/post-index";

const PAGE_CONTENT_QUERY = `
{
  site: _site {
    favicon: faviconMetaTags {
      ...metaTagsFragment
    }
  }
  blog {
    seo: _seoMetaTags {
      ...metaTagsFragment
    }
  }
  allPosts(orderBy: date_DESC, first: 20) {
    title
    slug
    excerpt
    date
    coverImage {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
        ...responsiveImageFragment
      }
    }
    postAuthor {
      name
      picture {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100}) {
          ...responsiveImageFragment
        }
      }
    }
  }
}

${metaTagsFragment}
${responsiveImageFragment}
`;

function getPageRequest() {
  return { query: PAGE_CONTENT_QUERY, includeDrafts: false };
}

export async function generateMetadata() {
  const a = await performRequest(getPageRequest());
  const { site, blog } = await performRequest(getPageRequest());

  return toNextMetadata([...site.favicon, ...blog.seo]);
}

export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);

  return <PostIndex data={data} />;
}
