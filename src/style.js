const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "Oswald font-semibold xs:text-[40px] text-[40px] text-white xs:leading-[65.8px] leading-[66.8px] w-full",
  paragraph:
    "Oswald font-normal text-dimWhite text-[18px] sm:text-[30px] xs:text-[24px] lg:text-[24px] leading-[35.8px]",

  flexCenter: "flex justify-between items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-8 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-0 mr-0 md:mt-0 mt-0 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-20 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
