import EventDetails from "@/components/pages/EventDetails";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const res = await fetch(`https://strapi.odinschool.com/api/events?filters[slug][$eq]=${params.slug}&populate=*`, {
    cache: 'no-store'
  });

  const data = await res.json();
  const event = data.data?.[0];

  if (!event) {
    return {
      title: 'Event Not Found | OdinSchool',
      description: 'The event you are looking for does not exist.',
    };
  }

  const title = event.seo_title || `${event.title} | OdinSchool`;
  const description = event.seo_description || event.description || 'Join this event at OdinSchool!';
  const imageUrl = event.poster_url?.[0]?.url
    ? `https://strapi.odinschool.com${event.poster_url[0].url}`
    : 'https://www.odinschool.com/images/events-og.jpg';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.odinschool.com/events/${params.slug}`,
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://www.odinschool.com/events/${params.slug}`,
    },
  };
}


// ✅ Required default export for the page
export default function EventDetailsPage() {
  return <EventDetails />;
}