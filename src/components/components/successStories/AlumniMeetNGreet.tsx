import VideoComp from '@/components/components/successStories/VideoComp';
import { alumniMeetNGreet } from '@/components/data/success-stories-data/alumniMeetNGreet';

interface AlumniMeetNGreetProps {
  sectionClass?: string;
}
const AlumniMeetNGreet = ({ sectionClass }: AlumniMeetNGreetProps) => {
  return (
    <section className={sectionClass}>
      <div className="container">
      <div className="w-full text-center">
        <h1 className="text-3xl md:text-4xl md:leading-[1.2] leading-[1.3] mb-2">
          <span className="text-primary-600">
            Alumni Meet & Greet
          </span>{" "}
        </h1>
      </div>
      <div className="flex grid grid-cols-1 flex-col items-center gap-8 lg:grid-cols-2">
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
      </div>
    </section>);
}

export default AlumniMeetNGreet;