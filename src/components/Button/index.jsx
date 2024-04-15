import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};
const variants = {
  fill: {
    gray_100: "bg-gray-100 text-gray-800",
    gray_100_01: "bg-gray-100_01",
    deep_purple_A700: "bg-deep_purple-A700 shadow-bs",
  },
  outline: {
    gray_300_01: "border-gray-300_01 border border-solid",
    gray_300: "border-gray-300 border border-solid",
  },
};
const sizes = {
  xl: "h-[49px] px-3.5 text-[22px]",
  sm: "h-[40px] px-2.5",
  lg: "h-[49px] px-[15px] text-sm",
  "2xl": "h-[54px] px-[15px]",
  xs: "h-[36px] px-[11px]",
  md: "h-[44px] px-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "deep_purple_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xl", "sm", "lg", "2xl", "xs", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_100", "gray_100_01", "deep_purple_A700", "gray_300_01", "gray_300"]),
};

export { Button };
