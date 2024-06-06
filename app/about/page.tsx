import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import {
  CastleIcon,
  DatabaseIcon,
  DrillIcon,
  SprayCanIcon,
} from "lucide-react";

const About = () => {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Om Essence
              </h1>
              <p className="mt-4 text-gray-500 max-w-[600px] md:text-xl/relaxed">
                Denna hemsida är skapat under mitt examensarbete vårterminen -24
                och avslutar en 2årig utbildning till Webbutvecklare med React.
                Detta projekt planeras utvecklas mer i framtiden!
              </p>
            </div>
            <Image
              src="/essencelogo.png"
              alt="essence logo"
              width={600}
              height={400}
              priority={true}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Teknikstack</h2>
              <p className="mt-4 text-gray-500 max-w-[600px] md:text-xl">
                Denna hemsida är skapat med Next.js, som använder en
                PostgreSQL-databas. Projektet är stylat med Tailwind CSS och
                använder Zod för datavalidering, Next-Auth för autentisering,
                samt komponenter från Shadcn/ui.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-4">
                <CastleIcon className="h-8 w-8 text-gray-500" />
                <h3 className="mt-2 text-lg font-medium">Next.js</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Byggt med App Router.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-4">
                <DatabaseIcon className="h-8 w-8 text-gray-500" />
                <h3 className="mt-2 text-lg font-medium">PostgreSQL</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Säkert och stabilt.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-4">
                <SprayCanIcon className="h-8 w-8 text-gray-500" />
                <h3 className="mt-2 text-lg font-medium">Tailwind CSS</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Har vunnit mitt hjärta.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-4">
                <DrillIcon className="h-8 w-8 text-gray-500" />
                <h3 className="mt-2 text-lg font-medium">Shadcn/ui</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Slipper uppfinna alla hjul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Möt personen bakom detta
          </h2>
          <p className="mt-4 text-gray-500 max-w-[600px] md:text-xl/relaxed">
            Lorem Ipsum och så vidare.....
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-4 flex flex-col items-center">
              <Image src="/essencelogo.png" alt="derp" width={80} height={80} />
              <h3 className="mt-4 text-lg font-medium">Emma</h3>
              <p className="mt-1 text-sm text-gray-500">CEO and Co-founder</p>
              <p className="mt-4 text-sm text-gray-500">
                Emma är visonären bakom Essence som driver detta projekt framåt.
                Fylld med kaffe och lo-fi musik.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-4 flex flex-col items-center">
              <Image src="/essencelogo.png" alt="derp" width={80} height={80} />
              <h3 className="mt-4 text-lg font-medium">Emma</h3>
              <p className="mt-1 text-sm text-gray-500">Head of Design</p>
              <p className="mt-4 text-sm text-gray-500">
                Emma är den som spenderar all vaken tid på hur mycket knapparnas
                hörn ska vara rundade.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-4 flex flex-col items-center">
              <Image src="/essencelogo.png" alt="marp" width={80} height={80} />
              <h3 className="mt-4 text-lg font-medium">Emma</h3>
              <p className="mt-1 text-sm text-gray-500">Head of Development</p>
              <p className="mt-4 text-sm text-gray-500">
                Med fin feedback och stöttning från vänner och kilometer av
                dokumentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
