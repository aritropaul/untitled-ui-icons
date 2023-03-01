/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconArrowNarrowUpRight: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M6 18L18 6M18 6H10M18 6V14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconArrowNarrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
