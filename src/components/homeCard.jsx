
import PromptBuilder from './PromptBuilder';

const VariableInjectorContent = () => {
    return (
        <div>
            <h1 className="text-[28px]/[40px] font-bold">Variable Injector</h1>
            <p className="text-[16px]/[26px] font-normal text-[#6C6C6C]">Lorem ipsum dolor sit amet consectetur. Et accumsan enim orci amet eget. Pretium arcu odio pellentesque enim suspendisse nisi. Nisl tortor bibendum eget consequat gravida.</p>
        </div>
    )
}

const Divider = () => {
    return (
      <div className="w-full h-[2px] bg-black"></div>
    );
};

const HowToContent = () => {
    return (
        <div>
            <h1 className="text-[20x]/[30px] font-bold">How to use variable injector?</h1>
            <p className="text-[16px]/[20px] font-normal text-[#1F4036]">Lorem ipsum dolor sit amet consectetur. Et accumsan enim orci amet eget. Pretium arcu odio pellentesque enim suspendisse nisi. Nisl tortor bibendum eget consequat gravida.Lorem ipsum dolor sit amet consectetur. Et accumsan enim orci amet eget. Pretium arcu odio pellentesque enim suspendisse nisi. Nisl tortor bibendum eget consequat gravida.Lorem ipsum dolor sit amet consectetur. Et accumsan enim orci amet eget. </p>
        </div>
    )
}


// PARENT COMPONENT
const HomeCard = () => {
    return (
        <div className="px-8 py-8">
            <div className="border-black border text-black rounded-xl shadow-[8px_8px_0px_0px_#1a202c] ">
                <div className="px-6 py-6">
                    <VariableInjectorContent />
                </div>
                <Divider />
                <div className="px-6 py-6 bg-[#43E3B333]">
                    <HowToContent />
                </div>
                <Divider />
                <div className="px-6 py-6">
                    <PromptBuilder />
                </div>


            </div>
        </div>
    )
}

export default HomeCard