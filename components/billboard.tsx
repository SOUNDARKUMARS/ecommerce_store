import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return ( 
    <div className="p-4 sm:p-6 lg:p-8  rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold drop-shadow-lg shadow-black p-0 text-black text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            <h1 className='drop-shadow-2xl hidden lg:block bg-slate-400 bg-opacity-60 rounded-lg  shadow-green-600'>{data?.label}</h1>
          </div>
        </div>
      </div>
    </div>
   );
};

export default Billboard;
