import React from "react";
import IconWrapper from "./components/icon-wrapper/IconWrapper";
import ButtonProps from "./resources/ButtonProps.interface";
import {
  // ButtonVariant,
  ButtonSizes,
  ButtonType
} from "./resources/ButtonAttributes.enum";

/**
 * @visibleName Buttons
 * @version 1.0.0
 * @author [Rankmi](https://github.com/Rankmi)
 */

const Button: React.FC<ButtonProps> = ({
  type = ButtonType.Button,
  // variant = ButtonVariant.Primary,
  size = ButtonSizes.Medium,
  ariaLabel = "string",
  // block = false,
  disabled = false,
  // outline = false,
  // color = null,
  // opacity = null,
  children,
  // className,
  onClick,
  icon
}) => {
  // const [buttonVariant, setButtonVariant] = useState("");
  // const [buttonSize, setButtonSize] = useState([`button${size}`]);
  // const [buttonBlock, setButtonBlock] = useState(false);
  // const [buttonColor, setButtonColor] = useState("");
  // const [classNames, setClassNames] = useState("");
  // useLayoutEffect(() => {
  //   setButtonSize([`button${size}`]);
  // }, [size]);

  // useLayoutEffect(() => {
  //   if (block) {
  //     setButtonBlock([`buttonBlock`]);
  //   } else {
  //     setButtonBlock(false);
  //   }
  // }, [block]);

  // // set color and opacity-brighness variant for className
  // useLayoutEffect(() => {
  //   setButtonColor([`button${color}`]);
  //   const outlineTag = outline ? "Outline" : "";
  //   if (color) {
  //     setButtonVariant("");
  //     setButtonColor([`button${color}${outlineTag}`]);
  //     if (opacity) {
  //       setButtonColor([`button${color}${outlineTag}${opacity}`]);
  //     }
  //   } else {
  //     setButtonVariant([`button${variant}${outlineTag}`]);
  //   }
  // }, [variant, opacity, color, outline]);
  // useLayoutEffect(() => {
  //   setClassNames(
  //     [
  //       buttonSize,
  //       buttonVariant,
  //       buttonBlock,
  //       buttonColor,
  //       className
  //     ]
  //       .filter(item => item)
  //       .join(" ")
  //   );
  // }, [buttonVariant, buttonBlock, buttonSize, buttonColor, className]);

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      className="BUTTON"
      onClick={onClick}
    >
      {icon && <IconWrapper icon={icon} sizes={size} />}
      {children}
    </button>
  );
};

export default Button;
export * from "../src/resources/ButtonAttributes.enum";
