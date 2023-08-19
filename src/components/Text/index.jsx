import React from "react";

const sizeClasses = {
  txtPoppinsBold48: "font-bold font-poppins",
  txtPoppinsRegular32: "font-normal font-poppins",
  txtPoppinsLight14: "font-light font-poppins",
  txtPoppinsLight18: "font-light font-poppins",
  txtPoppinsLight17: "font-light font-poppins",
  txtDMSansRegular32: "font-dmsans font-normal",
  txtDMSansRegular36: "font-dmsans font-normal",
  txtPoppinsMedium28: "font-medium font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtDMSansRegular18: "font-dmsans font-normal",
  txtPoppinsBold58: "font-bold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
