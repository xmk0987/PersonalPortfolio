import type { IconProps } from "./types";

const LinkedInIcon: React.FC<IconProps> = ({
  size = 24,
  title = "LinkedIn",
  ...props
}) => {
  const titleId = title ? "linkedin-icon-title" : undefined;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.14 3 3.25 3.9 3.25 5s.89 2 2 2 2-.9 2-2-.89-2-2-2ZM20.75 12.88c0-3.47-1.85-5.08-4.31-5.08-1.99 0-2.88 1.09-3.38 1.86V8.5H9.69c.04.77 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.13-.92.27-.68.88-1.39 1.91-1.39 1.35 0 1.89 1.03 1.89 2.54V20H20.75v-7.12Z" />
    </svg>
  );
};

export default LinkedInIcon;
