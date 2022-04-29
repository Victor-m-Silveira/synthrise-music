import { ThreeBounce } from "better-react-spinkit";
import Image from "next/image";

function Loader() {
  return (
    <div className="h-screen bg-black">
      <div className="pt-40 flex flex-col items-center space-y-4">
        <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
          <Image
            src="https://uploaddeimagens.com.br/images/003/831/223/original/synthmusicpx.png?1650064482"
            layout="fill"
            objectFit="contain"
            className="animate-pulse"
          />
        </span>
        <ThreeBounce size={23} color="#4c1d95" />
      </div>
    </div>
  );
}

export default Loader;
