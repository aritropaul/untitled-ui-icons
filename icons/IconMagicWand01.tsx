/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconMagicWand01: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M13.0001 14L10.0001 11M15.0104 3.5V2M18.9498 5.06066L20.0104 4M18.9498 13L20.0104 14.0607M11.0104 5.06066L9.94979 4M20.5104 9H22.0104M6.13146 20.8686L15.3687 11.6314C15.7647 11.2354 15.9627 11.0373 16.0369 10.809C16.1022 10.6082 16.1022 10.3918 16.0369 10.191C15.9627 9.96265 15.7647 9.76465 15.3687 9.36863L14.6315 8.63137C14.2354 8.23535 14.0374 8.03735 13.8091 7.96316C13.6083 7.8979 13.3919 7.8979 13.1911 7.96316C12.9627 8.03735 12.7647 8.23535 12.3687 8.63137L3.13146 17.8686C2.73545 18.2646 2.53744 18.4627 2.46325 18.691C2.39799 18.8918 2.39799 19.1082 2.46325 19.309C2.53744 19.5373 2.73545 19.7354 3.13146 20.1314L3.86872 20.8686C4.26474 21.2646 4.46275 21.4627 4.69108 21.5368C4.89192 21.6021 5.10827 21.6021 5.30911 21.5368C5.53744 21.4627 5.73545 21.2646 6.13146 20.8686Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconMagicWand01.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
