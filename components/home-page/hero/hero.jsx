import Button from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/public/images/searching-talent@2x.webp";
export default function Hero() {
  return (
    <div className="flex justify-between py-11  ">
      <div className="flex flex-col w-1/2 sm:w-1/2 space-y-7  lg:w-1/2  ">
        <h1 className="text-5xl text-textGreen sm:text-6xl md:text-7xl lg:text-8xl   font-serif">
          How work should work
        </h1>
        <p className="text-2xl font-semibold w-[80%] text-gray-600 ">
          Forget the old rules. You can have the best people. Right now. Right
          here.
        </p>
        <div className="pt-2">
          <Button className={"text-xl font-semibold"}>Get started</Button>
        </div>
      </div>
      <div className="hidden sm:block w-[370px] lg:w-[440px] xl:mr-36 self-center">
        <Image
          src={heroImage}
          alt="image showcasing searching talent"
          width={440}
          height={300}
        ></Image>
      </div>
    </div>
  );
}
