/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconGridDotsTop: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M3 21H3.01M3 12H3.01M3 16.5H3.01M3 7.5H3.01M7.5 21H7.51M7.5 12H7.51M16.5 21H16.51M16.5 12H16.51M12 21H12.01M12 12H12.01M12 16.5H12.01M12 7.5H12.01M21 21H21.01M21 12H21.01M21 16.5H21.01M21 7.5H21.01M21 3H3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconGridDotsTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};