import Image from "next/image";

export default function HotProduct() {
  return (
    <header className="container mx-auto px-4 py-12 lg:py-16">
         {/* Left Vertical Text Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 ">
          <div className=" flex justify-between md:flex-row items-center  h-[648px] w-[53px] bg-white">
            <p className="text-justify font-bold -rotate-180 [writing-mode:vertical-rl]">
              EXPLORE NEW AND POPULAR STYLES
            </p>
          </div>


          <div className="w-full md:w-[53%] flex flex-col md:flex-row items-center gap-4">
            <Image
              src="/03.jpg"
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src="/04.jpg"
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/01.jpg"
                alt="Gray upholstered chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/06.jpg"
                alt="Vintage white chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/01.jpg"
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
    </header>
  );
}
