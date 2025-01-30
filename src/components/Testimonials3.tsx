import Image from "next/image";
import { StaticImageData } from "next/image";
import config from "@/config";

// The list of your testimonials. It needs 3 items to fill the row.

const list: {
  username?: string;
  name: string;
  text: string;
  img?: string | StaticImageData;
}[] = [
  {
    // Optional, use for social media like Twitter. Does not link anywhere but cool to display
    username: "dennis",
    // REQUIRED
    name: "Dennis Babych",
    // REQUIRED
    text: "Absolutely love the simplicity and flexibility of these components! The documentation is clear and concise, making it easy to customize and integrate into any project. A real time-saver!",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: "https://pbs.twimg.com/profile_images/1514863683574599681/9k7PqDTA_400x400.jpg",
  },
  {
    username: "olivia",
    name: "Olivia",
    text: "This boilerplate has been a game-changer for my development workflow. The pre-built components are not only beautifully designed but also highly responsive. Can't recommend it enough!",
  },
  {
    username: "Noah",
    name: "Noah",
    text: "Building complex UIs has never been this straightforward. The wide range of components provided are intuitive and blend seamlessly with my design aesthetics. Great job! :D",
  },
];

// A single testimonial, to be rendered in  a list

const Testimonial = ({ i }: { i: number }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative max-w-lg h-full p-6 md:p-10 dark:bg-[#141414] bg-[#e4e4e4] rounded-2xl max-md:text-sm flex flex-col">
        <blockquote className="relative flex-1">
          <p className="dark:text-white text-black1 leading-relaxed">
            {testimonial.text}
          </p>
        </blockquote>

        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 md:gap-8 md:pt-8 md:mt-8 border-t border-base-content/5">
          <div className="w-full flex items-center justify-between gap-2">
            <div>
              <div className="font-medium dark:text-white text-black1 md:mb-0.5">
                {testimonial.name}
              </div>

              {testimonial.username && (
                <div className="mt-0.5 text-sm dark:text-white text-black1">
                  @{testimonial.username}
                </div>
              )}
            </div>

            <div className="overflow-hidden rounded-full shrink-0">
              {testimonial.img ? (
                <Image
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  src="https://res.cloudinary.com/spadasoft/image/upload/v1720100586/Avatar_284fa21ce8.png"
                  alt={`${list[i].name}'s testimonial for ${config.appName}`}
                  width={48}
                  height={48}
                />
              ) : (
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center text-lg font-medium dark:bg-white bg-black1 dark:text-black1 text-white">
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials3 = () => {
  return (
    <section id="testimonials">
      <div className="py-24 sm:py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold dark:text-white text-black1">
              212 makers are already shipping faster!
            </h2>
          </div>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-white text-black1">
            Don&apos;t take our word for it. Here&apos;s what they have to say
            about MicroSassFast.
          </p>
        </div>

        <ul
          role="list"
          className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
        >
          {[...Array(3)].map((e, i) => (
            <Testimonial key={i} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials3;
