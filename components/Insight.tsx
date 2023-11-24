import gitBranch from "@/public/icons/gitBranch.png";
import gitStar from "@/public/icons/gitStar.png";
import dotImages from "@/public/icons/dots.svg";
import Image from "next/image";

export default function Insight() {
  return (
    <section id="insights" className="Insight w-full h-full flex flex-col items-center justify-center max-sm:mt-20">
      <div className="frame22 mt-[8.79rem]">
        <h1 className="text-5xl font-extrabold underline text-[#3D3D3D]">
          Insights
        </h1>
      </div>
      <div className="frame40 inline-flex max-sm:flex-col items-start max-sm:items-center gap-[16.25rem] max-sm:gap-8 mt-[5.35rem] max-sm:mt-6">
        <div className="frame35 flex flex-col items-start justify-center gap-6">
          <h1 className="text-2xl font-extrabold underline text-[#3D3D3D]">
            Projects per year
          </h1>
          <div className="frame29 w-[18.3rem] h-[13.7rem] relative">
            <Image src={dotImages} alt="dots" width={180} height={96} className="absolute  right-[-7rem] max-sm:right-0 bottom-[-5rem] -z-10"/>
            <Image src={dotImages} alt="dots" width={180} height={96} className="absolute  left-[-7rem] top-[-0.5rem] -z-10"/>
            <table className="w-full border-4 border-black border-sold shadow-buttonShadow bg-[#FFF8EE]">
              <thead>
                <tr className="bg-[#3d3d3d] text-white border-4 border-black border-sold">
                  <th className="py-2 px-[2.6rem] text-center w-1/2 text-xl">Year</th>
                  <th className="py-2 px-[2.6rem] text-center w-1/2 text-xl">Projects</th>
                </tr>
              </thead>
              <tbody className="text-xl font-extrabold">
                <tr className="border-none relative">
                  <td className="py-2 px-4 border-none text-center">
                    1CP
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                  </td>
                  <td className="py-2 px-4 border-none text-center">
                    12
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                  </td>
                </tr>
                <tr className="border-none relative">
                  <td className="py-2 px-4 border-none text-center">
                    2CP
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                  </td>
                  <td className="py-2 px-4 border-none text-center">
                    12
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                  </td>
                </tr>
                <tr className="border-none relative">
                  <td className="py-2 px-4 border-none text-center">
                    1CS
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                  </td>
                  <td className="py-2 px-4 border-none text-center">
                    123
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                  </td>
                </tr>
                <tr className="border-none relative">
                  <td className="py-2 px-4 border-none text-center">
                    2CS
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                  </td>
                  <td className="py-2 px-4 border-none text-center">
                    1234
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                  </td>
                </tr>
                <tr className="border-none relative">
                  <td className="py-2 px-4 border-none text-center">
                    3CS
                  </td>
                  <td className="py-2 px-4 border-none text-center">
                    12345
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="frame39 flex flex-col items-start gap-[1.33rem]">
          <div className="frame37 flex flex-col items-start gap-6">
            <h2 className="text-2xl font-extrabold underline text-[#3d3d3d]">
              Total Contributions
            </h2>
            <div className="frame36 flex py-2 px-12 justify-center items-center gap-8 border-4 border-black border-solid shadow-buttonShadowGreen">
              <p className="text-[4rem] font-extrabold">40</p>
              <Image src={gitBranch} alt="git branch" width={40} height={40} />
              {/*TODO: Get data dynamically*/}
            </div>
          </div>
          <div className="frame38 flex flex-col items-start gap-6">
            <h2 className="text-2xl font-extrabold underline text-[#3d3d3d]">
              Total Stars
            </h2>
            <div className="frame36 flex py-2 px-12 justify-center items-center gap-8 border-4 border-black border-solid shadow-buttonShadowRed">
              <p className="text-[4rem] font-extrabold">40</p>
              <Image src={gitStar} alt="git star" width={50} height={50} />
              {/*TODO: Get data dynamically*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
