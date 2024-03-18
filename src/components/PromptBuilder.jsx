import Button from './button';
import { FaPlay } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";

const CustomTextArea = () => {
    return (
        <textarea
            className="min-w-[643px] min-h-[192px] h-fill bg-white p-[16px] gap-10 border border-solid border-black rounded-[2px]"
            placeholder="Act as a flutter developer..."
        ></textarea>
    );
};

const CustomInput = () => {
    return (
        <input
            className="min-w-[395px] min-h-[52px] h-fill bg-white py-[12px] px-[16px] gap-10 border border-solid border-black rounded-[2px]"
            placeholder="Enter Value here..."
        ></input>
    );
};


const Prompt = () => {
    return (
        <div className="space-y-[4px]">
            <h1 className="text-[24px]/[30px] font-bold">Prompt Builder</h1>
            <p className="text-[16px]/[26px] font-normal text-[#6C6C6C]">Lorem ipsum dolor sit amet consectetur. Et accumsan enim orci amet eget.</p>
            <p className="text-[16px]/[24px] font-normal text-[#222225]">Enter your prompt here</p>
            <CustomTextArea />
        </div>
    )
}

const Variable = () => {
    return (
        <div className="space-y-[4px]">
            <h1 className="text-[24px]/[30px] font-bold">Variables</h1>
            <p className="text-[16px]/[26px] font-normal text-[#6C6C6C]">Lorem ipsum dolor sit amet consectetur. Et accumsan enim orci amet eget.</p>
            <p className="text-[16px]/[24px] font-normal text-[#222225]">Variable 1</p>
            <CustomInput />
        </div>
    )
}


export default function PromptBuilder() {
    return (
        <div className='flex gap-8'> 
            {/* Left */}
            <div className='space-y-[16px]'>
                <Prompt />
                <div className='space-x-4'>
                    <Button>
                        <div className='flex justify-center items-center space-x-2'>
                            <FaPlay />
                            <span>Generate Prompt</span>
                        </div>
                    </Button>
                    <Button isSaveButton={true}>
                        <div className='flex justify-center items-center space-x-2'>
                            <FaRegSave />
                            <span>Save Template</span>
                        </div>
                    </Button>
                </div>
            </div>
            {/* Right */}
            <div>
                <Variable />
            </div>
        </div>
    )
}