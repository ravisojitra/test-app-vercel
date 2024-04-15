import React from "react";

const sizes = {
  xl: "text-5xl font-semibold md:text-[44px] sm:text-[38px]",
  s: "text-lg font-semibold",
  md: "text-xl font-semibold",
  xs: "text-base font-semibold",
  lg: "text-[38px] font-semibold md:text-4xl sm:text-[34px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
