import BGShape from "./ProfileBG";

export default function About() {
  return (
    <>
      <section id="about" className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="heading relative text-center text-5xl font-bold tracking-wider">
          About Me
        </h2>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-center justify-start lg:justify-center lg:p-8">
            <div className="z-10 mx-auto aspect-square w-3/6 overflow-hidden rounded-full bg-amber-300 sm:w-2/6 lg:w-3/6">
              <img
                src="prembg2.png"
                alt=""
                className="relative left-2 top-6 w-full object-cover"
              />
            </div>
            <BGShape className="absolute z-0 h-full w-full opacity-40" />
            {/* <img
              src="prembg2.png"
              alt=""
              className="mx-auto aspect-square w-4/6 bg-red-500 object-cover grayscale lg:w-1/2"
            /> */}
          </div>
          <div className="flex items-center justify-center pt-10 text-lg leading-loose tracking-wider text-white/90 lg:p-8">
          I&apos;am a Frontend Web Developer with over 2 years of experience in building responsive, user-friendly, and visually engaging websites. Along with strong expertise in frontend technologies, I have solid knowledge of full-stack development using HTML, CSS, JavaScript, React, Node.js, Python, and SQL. I enjoy creating efficient, scalable solutions and collaborating with teams to deliver innovative products.
          </div>
        </div>
      </section>
    </>
  );
}
