import { BtnDefault } from "./style";

const Button = ({
  text,
  borderRadius,
  color,
  padding,
  fontWeight,
  width,
  fontSize,
  className,
  onClick,
  disabled,
}) => {
  return (
    <BtnDefault
      disabled={disabled}
      color={color}
      width={width}
      fontWeight={fontWeight}
      fontSize={fontSize}
      className={className}
      onClick={onClick}
      padding={padding}
      borderRadius={borderRadius}
    >
      {text}
    </BtnDefault>
  );
};

export default Button;
