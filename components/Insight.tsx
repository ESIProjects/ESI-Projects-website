import gitBranch from "@/public/icons/gitBranch.png";
import gitStar from "@/public/icons/gitStar.png";
import dotImages from "@/public/icons/dots.svg";
import Image from "next/image";

interface Repo {
  name: string;
  // Add other properties as needed
}

interface RepoWithTP {
  repoName: string;
  tpRepos: Repo[];
}

const fetchRepositories = async () => {
  try {
    const organization = 'ESIProjects';
    const token = process.env.GITHUB_TOKEN;
    const repoNames = ['1st year - 1CP', '3rd year - 1CS', '2nd year - 2CP', '4th year - 2CS-SIL', '4th year - 2CS-SID', '4th year - 2CS-SIQ', '4th year - 2CS-SIT'];
    const reposWithTP: RepoWithTP[] = [];

    for (const repoName of repoNames) {
      const response: Response = await fetch(
          "https://api.github.com/repos/${organization}/${repoName}/contents",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: 'no-store',
      }
    );

      if (response.ok) {
        const data: Repo[] = await response.json();
        const tpRepos: Repo[] = data.filter((repo: Repo) => repo.name.startsWith('[TP]'));
        reposWithTP.push({ repoName, tpRepos });
      } else {
        console.error(`Error fetching repositories for ${repoName}:`, response.statusText);
      }
    }

    console.log(reposWithTP);
    return reposWithTP;
  } catch (error) {
    console.error('Error fetching repositories:', error);
  }
};

export default function Insight() {
  fetchRepositories();
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
            <Image src={dotImages} alt="dots" width={180} height={96} className="absolute  right-[-7rem] max-sm:right-[-2rem] bottom-[-5rem] -z-10"/>
            <Image src={dotImages} alt="dots" width={180} height={96} className="absolute  left-[-7rem] max-sm:left-[-2rem] top-[-0.5rem] -z-10"/>
            <table className="w-full border-4 border-black border-sold shadow-buttonShadow bg-[#F9F7F6]">
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
                    16
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
                    7
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                  </td>
                </tr>
                <tr className="border-none relative">
                  <td className="py-2 px-4 border-none text-center">
                    1CS
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                  </td>
                  <td className="py-2 px-4 border-none text-center">
                    1
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                  </td>
                </tr>
                <tr className="border-none relative">
                  <td className="py-2 px-4 border-none text-center">
                    2CS
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                  </td>
                  <td className="py-2 px-4 border-none text-center">
                    0
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/6 h-1 bg-black" />
                  </td>
                </tr>
                <tr className="border-none relative">
                  <td className="py-2 px-4 border-none text-center">
                    3CS
                  </td>
                  <td className="py-2 px-4 border-none text-center">
                    1
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
            <div className="frame36 flex py-2 px-12 justify-center items-center gap-8 border-4 border-black border-solid shadow-buttonShadowGreen bg-[#F9F7F6]">
              <p className="text-[4rem] font-extrabold">25</p>
              <Image src={gitBranch} alt="git branch" width={40} height={40} />
              {/*TODO: Get data dynamically*/}
            </div>
          </div>
          <div className="frame38 flex flex-col items-start gap-6">
            <h2 className="text-2xl font-extrabold underline text-[#3d3d3d]">
              Total Stars
            </h2>
            <div className="frame36 flex py-2 px-12 justify-center items-center gap-8 border-4 border-black border-solid shadow-buttonShadowRed bg-[#F9F7F6]">
              <p className="text-[4rem] font-extrabold">1</p>
              <Image src={gitStar} alt="git star" width={50} height={50} />
              {/*TODO: Get data dynamically*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
