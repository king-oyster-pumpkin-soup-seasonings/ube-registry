export default function Footer() {
  return (
    <footer className="flex h-fit w-full flex-col border-t-2 border-t-amber-300/50 bg-amber-200 p-10 xl:pr-60 xl:pl-60">
      <div className="hidden md:flex">
        <section className="w-3/4 p-4">
          <h1 className="mb-2 text-xl tracking-widest">About this project</h1>
          <p className="tracking-tight text-mauve-800">
            UBE Registry is a simple project dedicated to cataloging and sharing
            information about unidentified brainrot entities.
          </p>
          <p className="tracking-tight text-mauve-800">
            The goal is to create a comprehensive database that can be used by
            researchers, enthusiasts, and anyone interested in the mysteries of
            these mindblowing entities.
          </p>
          <p className="tracking-tight text-mauve-800">
            We welcome contributions and encourage collaboration to expand our
            knowledge and understanding of these enigmatic entities.
          </p>
        </section>
        <section className="w-1/4 p-4">
          <h1 className="mb-2 text-xl tracking-widest">More</h1>
          <p>
            <a
              href="https://github.com/king-oyster-pumpkin-soup-seasonings/ube-registry"
              className="text-orange-600 hover:text-orange-400 hover:underline"
            >
              Project&apos;s GitHub repository
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com/watch?v=KZoipAb2fo4&list=RD3AsydLuHTz8&start_radio=1"
              className="text-orange-600 hover:text-orange-400 hover:underline"
            >
              OG Italian BR Anime Opening (No Ads)
            </a>
          </p>
        </section>
      </div>
      <p className="flex justify-center text-center text-sm text-yellow-800 md:mt-8">
        &copy; {new Date().getFullYear()} UBE Registry.{" "}
        <br className="md:hidden" />
        All rights reserved.
      </p>
    </footer>
  );
}
