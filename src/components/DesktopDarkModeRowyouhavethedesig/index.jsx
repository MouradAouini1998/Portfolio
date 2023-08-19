import React from "react";

import { Img, Text } from "components";

const DesktopDarkModeRowyouhavethedesig = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start md:mt-0 mt-[26px]">
          {props?.greetingtext}
        </div>
        <Img
          className="h-[331px] md:h-auto rounded-[50%]"
          src="images/img_503536831.png"
          alt="503536831"
        />
      </div>
    </>
  );
};

DesktopDarkModeRowyouhavethedesig.defaultProps = {
  greetingtext: (
    <Text
      className="leading-[70.00px] sm:text-[44px] md:text-[50px] text-[58px] text-blue_gray-100 tracking-[-1.00px] w-full"
      size="txtPoppinsBold58"
    >
      <span className="text-blue_gray-100 font-poppins text-left font-bold">
        <>
          Hi 👋,
          <br />
          My name is
        </>
      </span>
      <span className="text-light_blue-500 font-poppins text-left font-bold">
        <>
          <br />
          Mourad Aouini
        </>
      </span>
      <span className="text-blue_gray-100 font-poppins text-left font-bold">
        <>
          <br />I make games
        </>
      </span>
    </Text>
  ),
};

export default DesktopDarkModeRowyouhavethedesig;
