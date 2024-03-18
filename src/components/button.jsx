

import classNames from "classnames";

const Button = ({ children, onClick, isSaveButton = false }) => {
    const classes = classNames("min-w-[176px] min-h-[48px] p-[12px] border border-solid border-black rounded-[2px] shadow-[4px_4px_0px_0px_#1a202c] text-[16px]/[24px]",
    {
      "bg-[#43E3B3]": !isSaveButton,
      "bg-[#FFFFFF]": isSaveButton,
    }
    )
    return (
      <button
        className={classes}
        onClick={onClick}
      > 
        {children}
      </button>
    );
  };
  
  export default Button;