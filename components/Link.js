import NextLink from 'next/link';

// next/link with prefetching turned off. By default every link that scrolls into view fetches its
// page in the background, which on this site meant a dozen extra requests per page view. A link's
// page now loads only when it is clicked; the pages are static, so navigation stays quick.
export default function Link(props) {
  return <NextLink prefetch={false} {...props} />;
}
