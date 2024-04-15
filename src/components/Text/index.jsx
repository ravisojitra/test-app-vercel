import React from "react";

const sizes = {
  xs: "text-sm font-medium",
  lg: "text-[38px] font-medium md:text-4xl sm:text-[34px]",
  s: "text-base font-normal",
  md: "text-lg font-medium",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-800 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
