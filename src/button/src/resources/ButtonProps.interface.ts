import {
  ButtonVariant,
  ButtonSizes,
  ButtonColors,
  ButtonType,
  ButtonOpacity
} from "./ButtonAttributes.enum";

// TODO: add package for legacy interfaces
interface Clickable {
  onClick?: () => void;
}

export default interface ButtonProps extends Clickable {
  ariaLabel?: string;
  className?: string;
  ariaDescription?: string;
  variant?: ButtonVariant;
  outline?: boolean;
  color?: ButtonColors;
  opacity?: ButtonOpacity;
  size?: ButtonSizes;
  type?: ButtonType;
  block?: boolean;
  disabled?: boolean;
  icon?: React.ReactChild;
}