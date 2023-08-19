import React from "react";

import { Img, Line, Text } from "components";
import DesktopDarkModeRowyouhavethedesig from "components/DesktopDarkModeRowyouhavethedesig";

const DesktopDarkModePage = () => {
  function handleNavigate() {
    const win = window.open(
      "https://www.linkedin.com/in/mourad-aouini/",
      "_blank",
    );
    win.focus();
  }
  function handleNavigate1() {
    const win = window.open(
      "https://www.linkedin.com/in/mourad-aouini/",
      "_blank",
    );
    win.focus();
  }
  function handleNavigate2() {
    const win = window.open("https://gitlab.com/mourad.aouini", "_blank");
    win.focus();
  }
  function handleNavigate3() {
    const win = window.open("https://gitlab.com/mourad.aouini", "_blank");
    win.focus();
  }
  function handleNavigate4() {
    const win = window.open(
      "https://drive.google.com/drive/folders/1U3_bGzjTFynJNYVo3rsaw87A7ltcAtof?usp=drive_link",
      "_blank",
    );
    win.focus();
  }
  function handleNavigate5() {
    const win = window.open(
      "https://drive.google.com/drive/folders/1_OJLE-Oz2TrlD7ceQtgFQnZucteE9ViT?usp=sharing",
      "_blank",
    );
    win.focus();
  }
  function handleNavigate6() {
    const win = window.open(
      "https://drive.google.com/file/d/1WOz1d44_Bs2gEdr3y_5o2z0qHKNuNqL8/view?usp=sharing",
      "_blank",
    );
    win.focus();
  }
  function handleNavigate7() {
    const win = window.open(
      "https://gitlab.com/mourad.aouini/unity-miniprojet/-/tree/Alpha?ref_type=heads",
      "_blank",
    );
    win.focus();
  }
  function handleNavigate8() {
    const win = window.open(
      "https://drive.google.com/file/d/1fcejwd2TZep9Xt9X0CyTG7rfJu4Slt4v/view?usp=sharing",
      "_blank",
    );
    win.focus();
  }
  function handleNavigate9() {
    const win = window.open(
      "https://gitlab.com/mourad.aouini/metavent-pfe",
      "_blank",
    );
    win.focus();
  }
  function handleNavigate10() {
    const win = window.open(
      "https://drive.google.com/file/d/16EoPiTMwv1EC-uBGLLB-1DprdrIURYsu/view?usp=sharing",
      "_blank",
    );
    win.focus();
  }
  function handleNavigate11() {
    const win = window.open(
      "https://drive.google.com/file/d/1w-S-N2vNc9iWmDJXUNQifFRi5m_D4vHx/view?usp=sharing",
      "_blank",
    );
    win.focus();
  }
  function handleNavigate12() {
    const win = window.open(
      "https://gitlab.com/Bedis/pi-gaming/-/tree/Across_the_seasons?ref_type=heads",
      "_blank",
    );
    win.focus();
  }

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-end mx-auto p-[60px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col justify-start max-w-[1241px] mt-[120px] mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[69px] justify-start md:ml-[0] ml-[7px] w-[98%] md:w-full">
            <DesktopDarkModeRowyouhavethedesig
              className="flex md:flex-col flex-row md:gap-10 items-start justify-between pt-[19px] w-full"
              greetingtext={
                <Text className="font-bold leading-[70.00px] sm:text-[44px] md:text-[50px] text-[58px] text-blue_gray-100 tracking-[-1.00px]">
                  <span className="text-blue_gray-100 font-poppins text-left">
                    <>
                      Hi 👋,
                      <br />
                      My name is
                    </>
                  </span>
                  <span className="text-light_blue-500 font-poppins text-left">
                    <>
                      <br />
                      Mourad Aouini
                    </>
                  </span>
                  <span className="text-blue_gray-100 font-poppins text-left">
                    <>
                      <br />I make games
                    </>
                  </span>
                </Text>
              }
            />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[967px] w-[11%] md:w-full">
              <div className="flex flex-row gap-5 items-start justify-between w-full">
                <Img
                  className="common-pointer h-[29px] mt-0.5 w-[30px]"
                  src="images/img_user.svg"
                  alt="user"
                  onClick={handleNavigate2}
                />
                <Img
                  className="h-[30px] mb-0.5 w-[30px]"
                  src="images/img_antdesigntwit.svg"
                  alt="antdesigntwit"
                />
                <Img
                  className="common-pointer h-[30px] mt-0.5 w-[30px]"
                  src="images/img_entyposociall.svg"
                  alt="entyposociall"
                  onClick={handleNavigate1}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start md:ml-[0] ml-[260px] mt-[246px]">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-100_01 text-center"
              size="txtPoppinsBold48"
            >
              My Tech Stack
            </Text>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-500"
              size="txtPoppinsRegular32"
            >
              {" "}
              Technologies I’ve been working with recently
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[58px] mt-[118px] w-[90%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                <Img
                  className="h-[116px] sm:h-auto md:mt-0 mt-[3px] object-cover w-[10%] md:w-full"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
                <Img
                  className="h-[103px] sm:h-auto md:ml-[0] ml-[166px] md:mt-0 mt-[7px] object-cover w-[10%] md:w-full"
                  src="images/img_image3.png"
                  alt="imageThree"
                />
                <Img
                  className="h-[113px] sm:h-auto md:ml-[0] ml-[136px] md:mt-0 mt-0.5 object-cover w-[11%] md:w-full"
                  src="images/img_image6.png"
                  alt="imageSix"
                />
                <Img
                  className="h-28 sm:h-auto md:ml-[0] ml-[87px] object-cover w-[13%] md:w-full"
                  src="images/img_image5.png"
                  alt="imageFive"
                />
                <Img
                  className="h-[129px] sm:h-auto md:ml-[0] ml-[91px] object-cover w-[13%] md:w-full"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[98%] md:w-full">
                <Img
                  className="h-[107px] sm:h-auto md:mt-0 mt-[15px] object-cover w-1/5 md:w-full"
                  src="images/img_image2.png"
                  alt="imageTwo"
                />
                <Img
                  className="h-[105px] mb-2.5 md:ml-[0] ml-[99px] md:mt-0 mt-[7px] w-[105px]"
                  src="images/img_logosgiticon.svg"
                  alt="logosgiticon"
                />
                <Img
                  className="h-[120px] mb-0.5 md:ml-[0] ml-[127px] w-[120px]"
                  src="images/img_vscodeiconsfi.svg"
                  alt="vscodeiconsfi"
                />
                <Img
                  className="h-28 mb-[3px] md:ml-[0] ml-[99px] md:mt-0 mt-[7px] w-28"
                  src="images/img_vscodeiconsfiletypevscode.svg"
                  alt="vscodeiconsfile"
                />
                <Img
                  className="h-[88px] md:ml-[0] ml-[127px] md:mt-0 my-[17px] w-[88px]"
                  src="images/img_akariconsgithubfill.svg"
                  alt="akariconsgithub"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[13px] items-center justify-start md:ml-[0] ml-[432px] mt-[184px]">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-100_01 text-center"
              size="txtPoppinsBold48"
            >
              Projects
            </Text>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-500"
              size="txtPoppinsRegular32"
            >
              Things I’ve built so far
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start ml-5 md:ml-[0] mt-[81px] w-[99%] md:w-full">
            <div className="gap-12 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="md:h-[599px] h-[604px] relative w-full">
                <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-7 sm:px-5 rounded-[20px] shadow-bs w-full">
                  <div className="flex flex-col gap-9 justify-start mb-2 mt-[244px] w-full">
                    <Text
                      className="ml-3.5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-100_01 text-center"
                      size="txtPoppinsMedium28"
                    >
                      Across the seasons
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="leading-[26.00px] text-[17px] text-blue_gray-100_01 text-center w-full"
                        size="txtPoppinsLight17"
                      >
                        In the Gamix project, we crafted a multiplayer Norse
                        mythology game, offering players an adventurous
                        role-playing experience with integrated blockchain-based
                        NFT trading.
                      </Text>
                      <Text
                        className="leading-[26.00px] mt-14 text-blue_gray-100_01 text-sm w-full"
                        size="txtPoppinsLight14"
                      >
                        <span className="text-blue_gray-100_01 font-poppins text-left text-base font-normal">
                          Tech stack :
                        </span>
                        <span className="text-blue_gray-100_01 font-poppins text-left font-light">
                          {" "}
                        </span>
                        <span className="text-blue_gray-100_01 font-poppins text-left font-light">
                          Unity , Node js , mongo db , docker , c# , photon .
                        </span>
                      </Text>
                      <div className="flex flex-row items-center justify-start w-[93%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_link.svg"
                          alt="link"
                        />
                        <Text
                          className="common-pointer ml-2.5 text-base text-white-A700_01 underline"
                          size="txtPoppinsRegular16"
                          onClick={handleNavigate11}
                        >
                          Live Preview
                        </Text>
                        <Img
                          className="h-5 ml-12 w-5"
                          src="images/img_akariconsgithubfill_white_a700_01.svg"
                          alt="akariconsgithub"
                        />
                        <Text
                          className="common-pointer ml-3 text-base text-white-A700_01 underline"
                          size="txtPoppinsRegular16"
                          onClick={handleNavigate12}
                        >
                          View Code
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[260px] inset-x-[0] mx-auto object-cover rounded-tl-[20px] rounded-tr-[20px] top-[0] w-full"
                  src="images/img_rectangle18.png"
                  alt="rectangleEighteen"
                />
              </div>
              <div className="md:h-[593px] h-[601px] relative w-full">
                <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 rounded-[20px] shadow-bs w-full">
                  <div className="flex flex-col gap-[9px] items-center justify-start mb-1.5 mt-[248px] w-[99%] md:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-100_01 text-center"
                      size="txtPoppinsMedium28"
                    >
                      Metavent
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="leading-[22.00px] text-[17px] text-blue_gray-100_01 text-center w-full"
                        size="txtPoppinsLight17"
                      >
                        <>
                          During my final internship, I contributed to an
                          innovative metaverse project creating an immersive
                          platform for ESPRIT&#39;s &quot;Project Ball&quot;
                          event, enhancing digital event experiences.
                        </>
                      </Text>
                      <div className="h-14 md:h-[79px] mt-[26px] relative w-full">
                        <Text
                          className="absolute inset-x-[0] leading-[26.00px] mx-auto text-blue_gray-100_01 text-sm top-[0] w-full"
                          size="txtPoppinsLight14"
                        >
                          <span className="text-blue_gray-100_01 font-poppins text-left text-base font-normal">
                            Tech stack :
                          </span>
                          <span className="text-blue_gray-100_01 font-poppins text-left font-light">
                            {" "}
                          </span>
                          <span className="text-blue_gray-100_01 font-poppins text-left font-light">
                            Unity , Node js , mongo db , docker , c# , mirror ,
                            vivox.
                          </span>
                        </Text>
                        <Img
                          className="absolute bottom-[0] h-5 left-[0] w-5"
                          src="images/img_link.svg"
                          alt="link"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[3px] w-[83%] md:w-full">
                        <Text
                          className="common-pointer text-base text-white-A700_01 underline"
                          size="txtPoppinsRegular16"
                          onClick={handleNavigate10}
                        >
                          Live Preview
                        </Text>
                        <Img
                          className="h-5 ml-12 w-5"
                          src="images/img_akariconsgithubfill_white_a700_01.svg"
                          alt="akariconsgithub"
                        />
                        <Text
                          className="common-pointer ml-3 text-base text-white-A700_01 underline"
                          size="txtPoppinsRegular16"
                          onClick={handleNavigate9}
                        >
                          View Code
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[260px] inset-x-[0] mx-auto object-cover rounded-tl-[20px] rounded-tr-[20px] top-[0] w-full"
                  src="images/img_rectangle16.png"
                  alt="rectangleSixteen"
                />
              </div>
              <div className="md:h-[599px] h-[604px] relative w-full">
                <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-7 sm:px-5 rounded-[20px] shadow-bs w-full">
                  <div className="flex flex-col gap-3 justify-start mb-[7px] mt-[244px] w-full">
                    <Text
                      className="md:ml-[0] ml-[49px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-100_01 text-center"
                      size="txtPoppinsMedium28"
                    >
                      Kite and smite
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="leading-[26.00px] text-[17px] text-blue_gray-100_01 text-center w-full"
                        size="txtPoppinsLight17"
                      >
                        <>
                          Our Unity mobile game &quot;Kite and Smite&quot;
                          features tactical gameplay, allowing players to make
                          strategic decisions as they advance through levels.
                        </>
                      </Text>
                      <Text
                        className="mt-[41px] text-blue_gray-100_01 text-sm"
                        size="txtPoppinsLight14"
                      >
                        <span className="text-blue_gray-100_01 font-poppins text-left text-base font-normal">
                          Tech stack :
                        </span>
                        <span className="text-blue_gray-100_01 font-poppins text-left font-light">
                          {" "}
                        </span>
                        <span className="text-blue_gray-100_01 font-poppins text-left font-light">
                          {" "}
                          Unity , c#{" "}
                        </span>
                      </Text>
                      <div className="flex flex-row items-center justify-start mt-[22px] w-[93%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_link.svg"
                          alt="link"
                        />
                        <Text
                          className="common-pointer ml-2.5 text-base text-white-A700_01 underline"
                          size="txtPoppinsRegular16"
                          onClick={handleNavigate8}
                        >
                          Live Preview
                        </Text>
                        <Img
                          className="h-5 ml-12 w-5"
                          src="images/img_akariconsgithubfill_white_a700_01.svg"
                          alt="akariconsgithub"
                        />
                        <Text
                          className="common-pointer ml-3 text-base text-white-A700_01 underline"
                          size="txtPoppinsRegular16"
                          onClick={handleNavigate7}
                        >
                          View Code
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[260px] inset-x-[0] mx-auto object-cover rounded-tl-[20px] rounded-tr-[20px] top-[0] w-full"
                  src="images/img_rectangle8.png"
                  alt="rectangleEight"
                />
              </div>
              <div className="md:h-[602px] h-[607px] relative w-full">
                <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-7 sm:px-5 rounded-[20px] shadow-bs w-full">
                  <div className="flex flex-col gap-[9px] justify-start mb-[35px] mt-[247px] w-full">
                    <Text
                      className="md:ml-[0] ml-[19px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-100_01 text-center"
                      size="txtPoppinsMedium28"
                    >
                      tresoria adventure
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="leading-[26.00px] text-[17px] text-blue_gray-100_01 text-center w-full"
                        size="txtPoppinsLight17"
                      >
                        <>
                          Tresoria Adventure&quot; is a mobile casual game that
                          highlights voxel art, beautifully portraying the
                          wonders of ancient Egypt in this distinctive style.
                        </>
                      </Text>
                      <Text
                        className="mt-4 text-blue_gray-100_01 text-sm"
                        size="txtPoppinsLight14"
                      >
                        <span className="text-blue_gray-100_01 font-poppins text-left text-base font-normal">
                          Tech stack :
                        </span>
                        <span className="text-blue_gray-100_01 font-poppins text-left font-light">
                          {" "}
                        </span>
                        <span className="text-blue_gray-100_01 font-poppins text-left font-light">
                          Unity , c#{" "}
                        </span>
                      </Text>
                      <div className="flex flex-row items-center justify-start mt-[22px] w-[93%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_link.svg"
                          alt="link"
                        />
                        <Text
                          className="common-pointer ml-2.5 text-base text-white-A700_01 underline"
                          size="txtPoppinsRegular16"
                          onClick={handleNavigate6}
                        >
                          Live Preview
                        </Text>
                        <Img
                          className="h-5 ml-12 w-5"
                          src="images/img_akariconsgithubfill_white_a700_01.svg"
                          alt="akariconsgithub"
                        />
                        <Text
                          className="ml-3 text-base text-white-A700_01 underline"
                          size="txtPoppinsRegular16"
                        >
                          View Code
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[260px] inset-x-[0] mx-auto object-cover rounded-tl-[20px] rounded-tr-[20px] top-[0] w-full"
                  src="images/img_rectangle24.png"
                  alt="rectangleTwentyFour"
                />
              </div>
              <div className="md:h-[599px] h-[604px] relative w-full">
                <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-7 sm:px-5 rounded-[20px] shadow-bs w-full">
                  <div className="flex flex-col items-start justify-start mb-8 mt-[251px] w-full">
                    <Text
                      className="md:ml-[0] ml-[5px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-100_01 text-center"
                      size="txtPoppinsMedium28"
                    >
                      hyper casual games
                    </Text>
                    <Text
                      className="leading-[26.00px] mt-[31px] text-blue_gray-100_01 text-center text-lg w-full"
                      size="txtPoppinsLight18"
                    >
                      i had worked on more than 30 hyper casual games with
                      multiple clients on upwork{" "}
                    </Text>
                    <Text
                      className="mt-[42px] text-blue_gray-100_01 text-sm"
                      size="txtPoppinsLight14"
                    >
                      <span className="text-blue_gray-100_01 font-poppins text-left text-base font-normal">
                        Tech stack :
                      </span>
                      <span className="text-blue_gray-100_01 font-poppins text-left font-light">
                        {" "}
                      </span>
                      <span className="text-blue_gray-100_01 font-poppins text-left font-light">
                        Unity , c#{" "}
                      </span>
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[22px] w-[93%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_link.svg"
                        alt="link"
                      />
                      <Text
                        className="common-pointer ml-2.5 text-base text-white-A700_01 underline"
                        size="txtPoppinsRegular16"
                        onClick={handleNavigate5}
                      >
                        Live Preview
                      </Text>
                      <Img
                        className="h-5 ml-12 w-5"
                        src="images/img_akariconsgithubfill_white_a700_01.svg"
                        alt="akariconsgithub"
                      />
                      <Text
                        className="ml-3 text-base text-white-A700_01 underline"
                        size="txtPoppinsRegular16"
                      >
                        View Code
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[260px] inset-x-[0] mx-auto object-cover rounded-tl-[20px] rounded-tr-[20px] top-[0] w-full"
                  src="images/img_rectangle23.png"
                  alt="rectangleTwentyThree"
                />
              </div>
              <div className="md:h-[602px] h-[607px] relative w-full">
                <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[19px] rounded-[20px] shadow-bs w-full">
                  <div className="flex flex-col gap-[19px] items-center justify-start mb-11 mt-[259px] w-[97%] md:w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-100_01 text-center"
                      size="txtPoppinsMedium28"
                    >
                      physics and researchs
                    </Text>
                    <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                      <Text
                        className="leading-[26.00px] text-blue_gray-100_01 text-center text-lg w-full"
                        size="txtPoppinsLight18"
                      >
                        this section contain different research on physics
                        engine and different work tools like path finding
                      </Text>
                      <Text
                        className="mt-[29px] text-blue_gray-100_01 text-sm"
                        size="txtPoppinsLight14"
                      >
                        <span className="text-blue_gray-100_01 font-poppins text-left text-base font-normal">
                          Tech stack :
                        </span>
                        <span className="text-blue_gray-100_01 font-poppins text-left font-light">
                          {" "}
                        </span>
                        <span className="text-blue_gray-100_01 font-poppins text-left font-light">
                          Unity , c#{" "}
                        </span>
                      </Text>
                      <div className="flex flex-row items-center justify-start mt-[22px] w-[93%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_link.svg"
                          alt="link"
                        />
                        <Text
                          className="common-pointer ml-2.5 text-base text-white-A700_01 underline"
                          size="txtPoppinsRegular16"
                          onClick={handleNavigate4}
                        >
                          Live Preview
                        </Text>
                        <Img
                          className="h-5 ml-12 w-5"
                          src="images/img_akariconsgithubfill_white_a700_01.svg"
                          alt="akariconsgithub"
                        />
                        <Text
                          className="ml-3 text-base text-white-A700_01 underline"
                          size="txtPoppinsRegular16"
                        >
                          View Code
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[260px] inset-x-[0] mx-auto object-cover rounded-tl-[20px] rounded-tr-[20px] top-[0] w-full"
                  src="images/img_rectangle22.png"
                  alt="rectangleTwentyTwo"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-dmsans md:gap-5 items-start justify-start mt-[196px] w-[95%] md:w-full">
            <div className="flex flex-col items-center justify-start md:mt-0 mt-[5px] pb-[7px] px-[7px] w-[31%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-500"
                  size="txtDMSansRegular36"
                >
                  +216 58402995
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start md:ml-[0] ml-[31px] md:mt-0 mt-2 p-[3px] w-[39%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-[19px] mr-[21px]">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-500"
                  size="txtDMSansRegular32"
                >
                  mourad.aouini@esprit.tn
                </Text>
              </div>
            </div>
            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[158px] w-[16%] md:w-full">
              <Img
                className="common-pointer h-[42px] mt-0.5 w-[43px]"
                src="images/img_user.svg"
                alt="user_One"
                onClick={handleNavigate3}
              />
              <Img
                className="h-[43px] mb-0.5 w-[43px]"
                src="images/img_antdesigntwit.svg"
                alt="antdesigntwit_One"
              />
              <Img
                className="common-pointer h-[43px] mt-0.5 w-[43px]"
                src="images/img_entyposociall.svg"
                alt="entyposociall_One"
                onClick={handleNavigate}
              />
            </div>
          </div>
          <div className="flex flex-col font-dmsans gap-[59px] items-start justify-start ml-4 md:ml-[0] mt-[76px] w-[98%] md:w-full">
            <Line className="bg-blue_gray-700_75 h-[5px] w-full" />
            <div className="flex sm:flex-col flex-row gap-[52px] items-start justify-start w-[46%] md:w-full">
              <Text className="text-gray-500 text-lg" size="txtDMSansRegular18">
                Home
              </Text>
              <Text className="text-gray-500 text-lg" size="txtDMSansRegular18">
                About
              </Text>
              <Text className="text-gray-500 text-lg" size="txtDMSansRegular18">
                Technologies
              </Text>
              <Text className="text-gray-500 text-lg" size="txtDMSansRegular18">
                Projects
              </Text>
              <Text className="text-gray-500 text-lg" size="txtDMSansRegular18">
                Contact
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopDarkModePage;
