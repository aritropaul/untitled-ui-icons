/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconCurrencyPound: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M17.5 20.5H6.5C6.5 20.5 10 17.7413 10 13.5C10 10.6725 7.91376 9.66123 7.8837 7.30497C7.88566 2.64078 13.5005 2.88877 15.4521 4.74258M6.5 13.5H15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconCurrencyPound.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};