/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconCloudSun03: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M3.15003 11C3.05165 10.5153 3 10.0137 3 9.5C3 5.35786 6.35786 2 10.5 2C14.3031 2 17.445 4.83064 17.9339 8.5M6 22C3.79086 22 2 20.2091 2 18C2 15.7909 3.79086 14 6 14C6.11333 14 6.22556 14.0047 6.3365 14.014C7.15622 11.6763 9.38235 10 12 10C14.2248 10 16.1668 11.2109 17.2029 13.0097C17.3011 13.0033 17.4002 13 17.5 13C19.9853 13 22 15.0147 22 17.5C22 19.9853 19.9853 22 17.5 22C13.7633 22 10.0546 22 6 22Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconCloudSun03.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
