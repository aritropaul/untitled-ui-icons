/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconAlignLeft: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M16 10H3M20 6H3M20 14H3M16 18H3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconAlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
