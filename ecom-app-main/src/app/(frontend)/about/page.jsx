import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div className="w-full mx-auto py-10 pt-40">
      <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
        <div className="lg:w-[50%] xs:w-full">
          <Image
            className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
            src={"/artist.jpg"}
            alt="billboard image"
            width={450}
            height={350}
          />
        </div>
        <div className="lg:w-[50%] sm:w-full xs:w-full ml-2 mb-10 ">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-4">
            About Me
          </h2>
          <p className="text-md mt-4">
            {`
            Hello! I'm Fabio, an artist with a unique vision for transforming
            the everyday into the extraordinary. My work is a fusion of
            creativity and sustainability, driven by a passion for turning
            discarded materials into captivating art. I believe that everything
            has potential, and through my art, I aim to showcase the beauty and
            value of items that are often overlooked. My Artistic Journey My
            journey as an artist began with a fascination for the stories hidden
            within forgotten objects. Growing up, I was always intrigued by the
            potential of things others considered waste. This curiosity led me
            to explore various artistic mediums and techniques, eventually
            leading to my commitment to recycling and upcycling.`}
          </p>
        </div>
      </div>

      <div className="flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
        <div className="md:hidden sm:block xs:block xs:w-full">
          <Image
            className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
            src={"/atelier.jpg"}
            alt="billboard image"
            width={500}
            height={375}
          />
        </div>

        <div className="lg:w-[50%] xs:w-full mr-10">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-12">
            My Recycling Initiative
          </h2>

          <p className="text-md mt-4">
            Hello, fellow art enthusiasts! I am an artist with a deep passion
            for turning the discarded into the divine. My artistic journey is
            guided by a profound commitment to environmental sustainability and
            creativity. Through my Recycling Initiative, I not only breathe new
            life into unwanted materials but also invite you to join me in this
            exciting and eco-friendly endeavor.
          </p>

          <button className="text-black bg-white border-black hover:bg-gray-800 hover:text-white font-medium  text-sm px-5 py-2.5 text-center mt-28 flex align-center">
            <Link href={"/donate"}>Donate</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
