import githubLogo from '@/public/icons/github.svg';
import linkedInIcon from '@/public/icons/linkedIn.svg';
import mailIcon from '@/public/icons/mail.svg';
import webIcon from '@/public/icons/webIcon.svg';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#3d3d3d] w-full text-white flex justify-end flex-col h-[16rem]">
            <div className="bg-[#3d3d3d] w-full px-[3.3rem] pt-[1.5rem]">
                <div className="frame61 inline-flex justify-center items-center gap-[14.5rem]">
                    <div className="frame50 flex flex-col items-start gap-12 w-[11.1rem] max-sm:hidden">
                        <div className="frame49 flex flex-col items-start gap-3">
                            <h3 className="text-[1rem] font-semibold">Github Repository</h3>
                            <a href="https://github.com/ESIProjects/ESI-Projects" className="font-normal text-[0.83rem] transition hover:text-blue-500">Link to repository</a>
                        </div>
                        <div className="frame48 flex flex-col items-start gap-3 w-[10.1rem]">
                            <h3 className="text-[1rem] font-semibold">Contact</h3>
                            <a href="mailto:esi-projects@proton.me" className="font-normal text-[0.83rem] hover:text-blue-500">esi-projects@proton.me</a>
                        </div>
                    </div>
                    <div className="frame55 flex flex-col items-start gap-2">
                        <p className="text-[0.83rem] font-medium">This project is an open source project created by ELFARI9 student’s team from ESI-Alger, you can reach them at portfolio / email.</p>
                        <div className="frame54 flex flex-col gap-2 items-start">
                            <div className="frame51 flex items-center gap-1">
                                <Image src={githubLogo} alt="github logo" width={24} height={24}/>
                                <a href="https://github.com/ESIProjects" className="text-[0.83rem] font-normal hover:text-blue-500">Github account</a>
                            </div>
                            <div className="frame52 flex items-center gap-1">
                                <Image src={linkedInIcon} alt="github logo" width={24} height={24}/>
                                <a href="" className="text-[0.83rem] font-normal hover:text-blue-500">LinkedIn Account</a>
                                {/*  TODO: put linkedIn account  */}
                            </div>
                            <div className="frame53 flex items-center gap-1">
                                <Image src={mailIcon} alt="github logo" width={24} height={24}/>
                                <a href="mailto:esi-projects@proton.me" className="text-[0.83rem] font-normal hover:text-blue-500">esi-projects@proton.me</a>
                            </div>
                        </div>
                    </div>

                    <div className="frame60 flex flex-col items-start gap-6 max-sm:hidden">
                        <p className="text-[0.83rem] font-medium">
                            We have to precise that this is not an official project by the school ESI, but just a project kick started by a student of the school for students of the school that’s why we keep mentioning the school’s logo.
                        </p>
                        <div className="frame57 flex justify-between items-center self-stretch">
                            <div className="frmae58 flex flex-col items-start gap-[0.83rem]">
                                <div className="frame56 flex items-center gap-2 justify-center">
                                    <Image src={webIcon} alt="web icon" width={24} height={24}/>
                                    <a href="https://www.esi.dz/" className="hover:text-blue-500 text-[0.83rem]">esi.dz</a>
                                </div>
                                <div className="frame59 flex items-center gap-2 justify-center">
                                    <Image src={mailIcon} alt="github logo" width={24} height={24}/>
                                    <a href="mailto:contacts@esi.dz" className="hover:text-blue-500 text-[0.83rem]">contacts@esi.dz</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="frame64 flex w-full p-2 gap-2 items-center justify-center bg-[#333] mt-auto">
                <h3 className="text-[0.9375rem] font-normal">© 2023-2024 ESI Projects</h3>
            </div>
        </footer>
    );
}