import { programHighlights } from "@/components/pages/dataScienceCourse/data";

const ProgramHighlights = (props) => {
  return ( 
<section
                    className={`${"bg-primary-50 px-5 py-12 md:px-8 md:py-16"}`}
                >
                    <div className="container mx-auto">
                        {/* Header */}
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-3 font-display text-3xl leading-tight md:text-5xl">
                                <span className="text-primary-600 font-bold">
                                    Program Highlights
                                </span>
                            </h2>
                        </div>

                        <div className="border-primary-600 rounded-lg border p-8">
                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                                <div className="flex flex-col gap-6">
{programHighlights.left.map(i => (
<div className="flex flex-col items-center justify-center">
                                        <p className="text-md text-primary-600 border-primary-600 border-b-2 font-bold">
                                            {i.text}
                                        </p>
                                        <div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                                            {i.features.map((i) => (
                                                <div className="border-primary-600 w-max-sm flex flex-col rounded-lg border-2 text-center">
                                                    <div className="bg-primary-600 w-full text-center">
                                                        <img
                                                            style={{
                                                                width: "75px",
                                                                height: "75px",
                                                            }}
                                                            src={i.url}
                                                            alt="Projects-1"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <p className="text-md p-4 font-bold">
                                                        {i.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
))}
                                </div>

                                <div className="flex flex-col items-center justify-center">
                                    <div className="border-primary-600 w-max-sm flex flex-col rounded-lg border-2 text-center">
                                        <img
                                            style={{
                                                width: "75px",
                                                height: "75px",
                                            }}
                                            src={programHighlights.center.url}
                                            alt="Projects-1"
                                            loading="lazy"
                                        />
                                        <p className="w-max-[200px] p-4 text-lg font-bold">
                                            A Complete 360°
                                            <br /> Learning Experience!
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
{programHighlights.right.map(i => (
<div className="flex flex-col items-center justify-center">
                                        <p className="text-md text-primary-600 border-primary-600 border-b-2 font-bold">
                                            {i.text}
                                        </p>
                                        <div className="my-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                                            {i.features.map((i) => (
                                                <div className="border-primary-600 w-max-sm flex flex-col rounded-lg border-2 text-center">
                                                    <div className="bg-primary-600 w-full text-center">
                                                        <img
                                                            style={{
                                                                width: "75px",
                                                                height: "75px",
                                                            }}
                                                            src={i.url}
                                                            alt="Projects-1"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <p className="text-md p-4 font-bold">
                                                        {i.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
))}
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
   );
}
 
export default ProgramHighlights;