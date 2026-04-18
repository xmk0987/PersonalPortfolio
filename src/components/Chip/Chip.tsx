import styles from "./Chip.module.css";
import { CHIP_VARIANTS } from "../../constants/chipVariants";

type ChipVariant = keyof typeof CHIP_VARIANTS;

interface ChipProps {
  label: string;
  variant?: ChipVariant;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({
  label,
  variant = "default",
  backgroundColor,
  borderColor,
  textColor,
  className = "",
}) => {
  const variantStyles = CHIP_VARIANTS[variant];

  const style = {
    "--chip-background-color": backgroundColor ?? variantStyles.backgroundColor,
    "--chip-border-color": borderColor ?? variantStyles.borderColor,
    "--chip-text-color": textColor ?? variantStyles.textColor,
  } as React.CSSProperties;

  return (
    <span className={`${styles.chip} ${className}`.trim()} style={style}>
      {label}
    </span>
  );
};

export default Chip;
