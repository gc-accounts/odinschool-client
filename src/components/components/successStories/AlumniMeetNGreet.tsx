import VideoComp from '@/components/components/successStories/VideoComp';
import { alumniMeetNGreet } from '@/components/data/success-stories-data/alumniMeetNGreet';
const AlumniMeetNGreet = (props) => {
  return (<div className="container mx-auto px-4 py-12">
    <div className="w-full text-center">
      <h1 className="heading-xl mb-6 font-display leading-tight font-medium">
        <span className="text-primary-600">
          Alumni Meet & Greet
        </span>{" "}
      </h1>
    </div>
    <div className="mb-16 flex grid grid-cols-1 flex-col items-center gap-8 lg:grid-cols-2">
      <VideoComp
        url={alumniMeetNGreet.url}
        thumbnail={alumniMeetNGreet.thumbnail}
      />

      <p>
        A unique opportunity to bring together the next
        generation of skilled professionals and our
        successful Alumni, OdinSchool's Alumni Meet & Greet
        sessions are conducted to foster meaningful
        connections.
        <br />
        <br />
        Alumni share their experiences, journeys, setbacks,
        victories, and valuable insights with current
        learners in these sessions. Whether it's discussing
        industry trends, career challenges, or the
        transformative power of OdinSchool, the Alumni Meet
        and Greets provide a platform for learning,
        mentorship, and inspiration!
      </p>
    </div>
  </div>);
}

export default AlumniMeetNGreet;