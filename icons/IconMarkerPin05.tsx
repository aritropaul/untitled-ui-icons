/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconMarkerPin05: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M16 13.3744C19.5318 14.0688 22 15.6547 22 17.5C22 19.9853 17.5228 22 12 22C6.47715 22 2 19.9853 2 17.5C2 15.6547 4.46819 14.0688 8 13.3744M12 17V3L17.3177 6.27244C17.7056 6.51114 17.8995 6.63049 17.9614 6.78085C18.0154 6.912 18.0111 7.0599 17.9497 7.18771C17.8792 7.33426 17.6787 7.44222 17.2777 7.65815L12 10.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconMarkerPin05.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};