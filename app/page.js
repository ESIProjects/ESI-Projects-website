import logo from "../public/logo.png"
import goalIcon from "../public/icons/targetArrow.svg"
import codeIcon1 from "../public/codeIcons/code1.png"
import codeIcon2 from "../public/codeIcons/code2.png"
import EsiLogo from "../public/EsiLogo.png"
import menu from "../public/icons/menu.png"
import scroll from "../public/icons/arrowDown.png"
import qstMark from "../public/icons/question.png"
import warning from "../public/icons/danger.png"
import gitBranch from "../public/icons/gitBranch.png"
import gitStar from "../public/icons/gitStar.png"
import codeBlock from "../public/codeIcons/codeBlock.png"
import Image from 'next/image'
import LastRepos from "./component/lastRepos"



const fetchRepositories = async () => {
  try {
    const organization = 'ESIProjects';
    const token = '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'; 
  const response = await fetch(
    `https://api.github.com/orgs/${organization}/repos`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache:'no-store',
    }
  );

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    // Repositories=data;
  } else {
    console.error('Error fetching repositories:', response.statusText);
  }
} catch (error) {
  console.error('Error fetching repositories:', error);
}
};

export default function Home() {
  fetchRepositories();
  return (
    <main className="min-h-screen w-full overflow-hidden scroll-smooth">
      {/* <div className="fixed bottom-3 left-0 right-0 flex items-center justify-center lg:hidden">
        <Image src={scroll} className=" animate-bounce w-11"></Image>
      </div> */}
      <div className='m-auto  container'>
        <div className='navbar m-auto w-5/6 mt-4 rounded-full h-16 flex items-center justify-between mediumShadow border-solid border-black border-2  '>
          <Image src={logo} className="w-16 ml-10"></Image>
          <p className="monaSans hidden md:block font-bold hover:font-black text-xl hover:text-2xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg">FAQ</p>
          <p className="monaSans hidden md:block font-bold hover:font-black text-xl hover:text-2xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg">Overview</p>
          <p className="monaSans hidden md:block font-bold hover:font-black text-xl hover:text-2xl transition-all duration-500 cursor-pointer hover:drop-shadow-lg">Insight</p>
          <button className=" monaSans hidden md:block bg-neutral-800 text-white p-1 mx-4 rounded-xl border-solid border-black border-4 font-bold hover:drop-shadow-lg hover:p-2  transition-all duration-500 hover:bg-orange-200 hover:text-black"> contribute </button>
          <button className="bg-orange-200 rounded-lg border-solid border-black border-2 p-1 mr-6 md:hidden">
            <Image src={menu} className="w-8"></Image>
          </button>
        </div>
      </div>

      <div className="container m-auto flex flex-col lg:flex-row items-center ">

        <div className="container px-6 lg:px-20 py-11 basis-2/3  ">

          <div className=" monaSans text-5xl md:text-7xl font-black flex flex-row items-center">
            <div className=" EsiTitle mx-2 md:mx-4 rounded-3xl border-solid border-black border-4 px-3 py-1">
              <h1>ESI</h1>
            </div> 
            <span>Projects</span>
          </div>

          <h1 className="hubotSans mx-9 text-xl md:text-2xl font-bold md:mx-5 my-3 ">
            Empowering Your Coding Odyssey: Discover, 
            Learn, and Excel through a Treasury of Student
            Projects and Assignments.
          </h1>

          <div className="hubotSans mx-1 md:mx-5 text-base md:text-xl font-semibold flex flex-row items-center">
            <Image src={goalIcon} className="w-8 h-8 lg:h-11  lg:w-11 mx-2"></Image>
            <div className=" mx-1 md:mx-2 bg-green-300 px-1 md:px-2 py-1 rounded-3xl border-solid border-black border">
              <h1>Explore</h1>
            </div> 
            <span>different assignments and Projects.</span>
          </div>

          <div className="hubotSans mx-1 md:mx-5 text-base md:text-xl font-semibold flex flex-row items-center">
            <Image src={goalIcon} className="w-8 h-8 lg:h-11  lg:w-11 mx-2"></Image>
            <div className=" mx-1 md:mx-2 bg-red-300 px-1 md:px-2 py-1 rounded-3xl border-solid border-black border">
              <h1>Understand</h1>
            </div> 
            <span>how other students developed it. </span>
          </div>

          <div className="hubotSans mx-1 md:mx-5 text-base md:text-xl font-semibold flex flex-row items-center">
            <Image src={goalIcon} className="w-8 h-8 lg:h-11 lg:w-11 mx-2"></Image>
            <div className=" mx-1 md:mx-2 bg-blue-300 px-1 md:px-2 py-1 rounded-3xl border-solid border-black border">
              <h1>Develop</h1>
            </div> 
            <span>your own amazing projects .</span>
          </div>

        </div>
        <div className="lg:container basis-1/3 relative flex items-center lg:m-0 m-auto  ">
          <Image src={EsiLogo} className="relative z-10 w-44 md:w-72 topDownAnimation" ></Image>
          <Image src={codeIcon1} className="absolute scale-110 lg:scale-100 left-16 top-20 lg:left-0  lg:-top-10"></Image>
          <Image src={codeIcon1} className="absolute scale-110 lg:scale-100 right-16 bottom-28 lg:right-24 lg:-bottom-5"></Image>
        </div>
      </div>

      <div className="relative z-10 m-auto flex justify-center items-center w-fit lg:w-1/2 hubotSans h-10  bg-neutral-700 text-sm px-4 lg:px-0 lg:text-lg text-white font-bold rounded-full border-2 border-solid">
          <p>This project is made by students & for students.  </p>
      </div>

      <div className=" container m-auto my-28 w-2/3 lg:w-1/2 relative ">
        <div className="m-auto relative">
          <div className="firstColor border-solid border-2 border-black rounded-lg extraShadow relative z-10">
            <div className="monaSans firstColor text-2xl lg:text-3xl font-extrabold underline underline-offset-8 relative bottom-5 w-fit px-5 m-auto rounded-lg"> ESI Projects</div>
            <p className="hubotSans font-semibold px-4 pb-2 lg:px-10  lg:pb-4 text-sm lg:text-lg">
              It is the place where you can find previous projects
              x developed by students for different assignments
              and labs in the computer science engineering
              classes taken at Higher National School of
              Computer Science (Ecole Nationale Supérieure
              d'Informatique (Ex. INI)).
            </p>
          </div>
          <Image src={codeIcon2} className="absolute  bottom-28 right-20 md:scale-75 md:right-32 lg:right-96 lg:bottom-20 "></Image>
          <Image src={codeIcon2} className="absolute  top-28 left-20 md:scale-75 md:left-32  lg:left-96 lg:top-20"></Image>
        </div>

        <div className="container m-auto my-8 firstColor rounded-lg relative z-10">
          <h1 className="monaSans text-lg lg:text-2xl font-extrabold underline">GITHUB repository</h1>
          <div className=" flex lg:flex-row flex-col items-center">
            <div className=" lg:basis-3/4 hubotSans text-sm lg:text-lg font-semibold ">
              Simply the projects are for now organized
              in a GitHub repository where projects aka
              TPs are organized by level and by course.
            </div>
            <div className=" lg:basis-1/4">
              <button className="monaSans md:block bg-neutral-800 text-white p-2 my-3 lg:my-0 lg:mx-4 rounded-xl border-solid border-black border-4 font-bold hover:drop-shadow-lg hover:p-3  transition-all duration-500 hover:bg-orange-200 hover:text-black">Explore</button>
            </div>
          </div>
        </div>

        <div className="container m-auto my-8 firstColor rounded-lg relative z-10">
          <h1 className="monaSans text-lg lg:text-2xl font-extrabold underline">Contribution</h1>
          <div className=" flex lg:flex-row flex-col items-center">
            <div className=" lg:basis-3/4 hubotSans text-sm lg:text-lg font-semibold ">
              If you have a project or “Tp” and you
              want to share it with us through google form
            </div>
            <div className=" lg:basis-1/4">
              <button className="monaSans md:block bg-neutral-800 text-white p-2 my-3 lg:my-0 lg:mx-4 rounded-xl border-solid border-black border-4 font-bold hover:drop-shadow-lg hover:p-3  transition-all duration-500 hover:bg-orange-200 hover:text-black">Contribute</button>
            </div>
          </div>
        </div>

      </div>

      <div className="container m-auto my-28 w-2/3 relative">
        <div className="monaSans firstColor text-2xl lg:text-3xl font-extrabold underline underline-offset-8 relative bottom-5 w-fit px-5 m-auto rounded-lg">
          <h1>Insights</h1>
        </div>
        <div className=" container flex flex-row justify-between ">

          <div className="flex space-y-5 flex-col items-center">
            <h1 className=" font-bold underline text-xl monaSans"> Recently added</h1>

            <div className=" z-10 pb-2 firstColor extraShadow flex flex-col space-y-2 rounded-xl border-solid border-black border-4 ">
                <div className="text-2xl footerColor rounded-t-lg space-x-20 w-full p-4 flex flex-row justify-around items-center">
                    <h1 className=" font-black text-white monaSans">Year</h1>
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <h3 className="font-black  text-white monaSans">Projects</h3>
                    </div>
                </div>
                <div className=" mt-2 text-xl  rounded-t-lg space-x-20 w-full px-5 flex flex-row justify-around items-center">
                  <h1 className=" font-extrabold text-black  hubotSans">1 CP</h1>
                  <div className="flex flex-row justify-center items-center space-x-2">
                    <h3 className="font-extrabold text-black hubotSans">12</h3>
                  </div>
                </div>
                <hr className=" border-solid border-1 border-neutral-500 w-4/5 m-auto"></hr>
                <div className=" text-xl  rounded-t-lg space-x-20 w-full px-5 flex flex-row justify-around items-center">
                  <h1 className=" font-extrabold text-black  hubotSans">2 CP</h1>
                  <div className="flex flex-row justify-center items-center space-x-2">
                    <h3 className="font-extrabold text-black hubotSans">8</h3>
                  </div>
                </div>
                <hr className=" border-solid border-1 border-neutral-500 w-4/5 m-auto"></hr>
                <div className=" text-xl  rounded-t-lg space-x-20 w-full px-5 flex flex-row justify-around items-center">
                  <h1 className=" font-extrabold text-black  hubotSans">1 CS</h1>
                  <div className="flex flex-row justify-center items-center space-x-2">
                    <h3 className="font-extrabold text-black hubotSans">3</h3>
                  </div>
                </div>
                <hr className=" border-solid border-1 border-neutral-500 w-4/5 m-auto"></hr>
                <div className=" text-xl  rounded-t-lg space-x-20 w-full px-5 flex flex-row justify-around items-center">
                  <h1 className=" font-extrabold text-black  hubotSans">2 CS</h1>
                  <div className="flex flex-row justify-center items-center space-x-2">
                    <h3 className="font-extrabold text-black hubotSans">15</h3>
                  </div>
                </div>
                <hr className=" border-solid border-1 border-neutral-500 w-4/5 m-auto"></hr>
                <div className=" text-xl  rounded-t-lg space-x-20 w-full px-5 flex flex-row justify-around items-center">
                  <h1 className=" font-extrabold text-black  hubotSans">3 CS</h1>
                  <div className="flex flex-row justify-center items-center space-x-2">
                    <h3 className="font-extrabold text-black hubotSans">2</h3>
                  </div>
                </div>
            </div>
            <Image src={codeBlock} className="absolute w-1/2 h-3/4 bottom-0"></Image>
          </div>

          <div className="flex flex-col space-y-3 ">
            <div className="flex justify-center flex-col firstColor">
              <h1 className=" m-auto font-bold underline text-xl monaSans"> Total contributions</h1>
              <div className=" flex flex-row items-center justify-between space-x-8 px-9 py-3 my-5 m-auto extraShadow border-solid border-4 border-black rounded-lg firstColor">
                <h1 className=" font-black text-6xl monaSans">16</h1>
                <Image src={gitBranch} className=" "></Image>
              </div>
            </div>
            <div className="flex justify-center flex-col firstColor">
              <h1 className=" m-auto font-bold underline text-xl monaSans"> Total Stars</h1>
              <div className=" flex flex-row items-center justify-between space-x-8 px-9 py-3 my-5 m-auto extraShadow border-solid border-4 border-black rounded-lg firstColor">
                <h1 className=" font-black text-6xl monaSans">10</h1>
                <Image src={gitStar} className=" "></Image>
              </div>
            </div>
          </div>

        </div>
      </div>  

      <div className="container m-auto my-28 w-2/3 relative">
        <div className="monaSans firstColor text-2xl lg:text-3xl font-extrabold underline underline-offset-8 relative bottom-5 w-fit px-5 m-auto rounded-lg">
          <h1>FAQ</h1>
        </div>

        <div className="firstColor my-10 border-solid border-2 border-black rounded-lg mediumShadow relative z-10">
          <div className="monaSans firstColor text-base lg:text-xl relative bottom-3 w-fit px-3 rounded-lg">
            <Image src={qstMark} className="w-5 h-5 md:w-8 md:h-8 mr-3 inline"></Image> <span className="font-extrabold">Why</span> <span className=" font-base">ESI Projects</span> <span className="font-extrabold">while we already have</span> <span className=" font-base"> Tresor ESI</span>
          </div>
          
          <p className="hubotSans font-semibold px-4 pb-2 lg:px-10  lg:pb-4 text-sm lg:text-lg">
            Organizing all the projects in a GitHub repository will be
            much effective since most of the project are already shared
            in GitHub repositories and it also encourages students to
            start using GitHub as a contribution tool, and a Hub for us
            developers.
          </p>
        </div>

        <div className="firstColor my-10 border-solid border-2 border-black rounded-lg mediumShadow relative z-10">
          <div className="monaSans firstColor text-base lg:text-xl relative bottom-3 w-fit px-3 rounded-lg">
            <Image src={qstMark} className="w-5 h-5 md:w-8 md:h-8 mr-3 inline"></Image> <span className="font-extrabold">How will be the content of the repository updated ?</span>
          </div>
          
          <p className="hubotSans font-semibold px-4 pb-2 lg:px-10  lg:pb-4 text-sm lg:text-lg">
            We will try to set it updated at the end of each scholar year
            so that the next promo can benefit from the projects of the
            previous one.
          </p>
        </div>

        <div className="items-center lg:items-start warningColor my-10 border-solid border-2 border-black rounded-lg mediumShadow relative z-10 flex flex-row space-x-3 justify-around">
          <Image src={warning} className=" mx-1 w-6 h-6 md:w-8 md:h-8 my-3 md:mx-4"></Image>
          <p className="hubotSans font-semibold py-2  lg:pb-4 text-xs lg:text-lg">
            <span className=" font-black">This is only a first launch version of the project : </span>
            We kickstarted this project with a basic setup, as you've
            seen on our GitHub repository. After launch, we'll evaluate
            and enhance it, growing our team for future versions. 
          </p>
        </div>
        <Image src={codeIcon2} className=" absolute scale-125 -left-44 top-8"></Image>
        <Image src={codeIcon2} className=" absolute scale-125 -right-44 bottom-8 "></Image>

      </div>
      <div className="container flex justify-center mb-5">
        <p className=" monaSans font-extrabold text-xs lg:text-xl">Don’t forget to star the repo ⭐  and follow the project .</p>
      </div>
      <footer className=" w-screen footerColor border-t-4 border-solid border-black ">

      <div className="container py-2 mx-auto">
        <div className="flex flex-col items-center text-center">

            <p className="monaSans text-xs md:text-base font-semibold max-w-xl mx-auto mt-2 text-white">We have to precise that this is not an official project by the school ESI, but just a project kick started by a student of the school for students of the school that is why we keep mentioning the school is logo.</p>

            <div className="flex flex-col mt-2 sm:flex-row sm:items-center sm:justify-center space-y-3 sm:space-y-0">
                <button className=" monaSans bg-neutral-800 text-white p-1 mx-4 rounded-xl border-solid border-black border-4 font-bold hover:drop-shadow-lg hover:p-2  transition-all duration-500 hover:bg-orange-200 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline mx-1 w-6 h-6 md:w-10 md:h-10" width="26" height="26" viewBox="0 0 16 16"><path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7ZM13 8V4.5A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5V8h2.5a.5.5 0 0 1 .5.5c0 .052.008.162.032.308c.041.247.115.493.228.718c.308.618.843.974 1.74.974s1.432-.356 1.74-.974c.113-.225.187-.47.228-.718c.024-.146.032-.256.032-.308a.5.5 0 0 1 .41-.492L10.5 8H13Z"/></svg>
                  <span className="mx-1">Reach us on email</span>
                </button>

                <button className=" monaSans bg-neutral-800 text-white p-1 mx-4 rounded-xl border-solid border-black border-4 font-bold hover:drop-shadow-lg hover:p-2  transition-all duration-500 hover:bg-orange-200 hover:text-black">
                <div className="inline">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline mx-2 w-6 h-6 md:w-10 md:h-10" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                </div>
                  github profile
                </button>
            </div>
        </div>

        <hr className="my-4 border-black border-2 " />

        <div className=" flex items-center justify-center ">
            <p className="text-sm text-white font-bold">© 2023-2024 ESI Projects</p>
        </div>
    </div>
      </footer>
    </main>
  )
}
