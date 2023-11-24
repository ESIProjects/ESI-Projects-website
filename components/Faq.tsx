import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
    return (
        <section id="faq" className="FAQ w-full h-full flex flex-col items-center justify-center mt-64 max-sm:mt-20 mb-4">
            <div className="frame47 inline-flex flex-col items-center gap-10 w-[61%] max-sm:w-5/6">
                <div className="frame22 flex p-1 justify-center items-center gap-1">
                    <h1 className="text-5xl underline font-extrabold text-[#3d3d3d]">FAQ</h1>
                </div>
                <div className="frame45 flex flex-col gap-4 mt-[2.67rem] w-full">
                    <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="border-black border-4 border-solid flex px-5 py-4 items-center text-2xl max-sm:text-sm font-bold">
                                How will be the content of the repository updated ?
                            </AccordionTrigger>
                            <AccordionContent className="border-black border-4 border-solid border-t-0 flex py-4 px-6 justify-center items-center self-stretch text-[1rem]  max-sm:text-sm font-medium">
                                We will try to set it updated at the end of each scholar year
                                so that the next promotion can benefit from the projects of the
                                previous one.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="border-black border-4 border-solid flex px-5 py-4 items-center text-2xl max-sm:text-sm font-bold">
                                How will be the content of the repository updated ?
                            </AccordionTrigger>
                            <AccordionContent className="border-black border-4 border-solid border-t-0 flex py-4 px-6 justify-center items-center self-stretch text-[1rem]  max-sm:text-sm font-medium">
                                We will try to set it updated at the end of each scholar year
                                so that the next promotion can benefit from the projects of the
                                previous one.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="border-black border-4 border-solid flex px-5 py-4 items-center text-2xl max-sm:text-sm font-bold">
                                How will be the content of the repository updated ?
                            </AccordionTrigger>
                            <AccordionContent className="border-black border-4 border-solid border-t-0 flex py-4 px-6 justify-center items-center self-stretch text-[1rem]  max-sm:text-sm font-medium">
                                We will try to set it updated at the end of each scholar year
                                so that the next promotion can benefit from the projects of the
                                previous one.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <h1 className="text-2xl max-sm:text-xl font-semibold mt-20 max-sm:mt-10 text-center">Don’t forget to star the repo ⭐ and follow the project</h1>
        </section>
    );
}