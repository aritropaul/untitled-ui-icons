/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconStars03: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M18.5 8V3M5.5 21V16M16 5.5H21M3 18.5H8M6.5 2L5.71554 3.56892C5.45005 4.09989 5.31731 4.36538 5.13997 4.59545C4.98261 4.79959 4.79959 4.98261 4.59545 5.13997C4.36538 5.31731 4.0999 5.45005 3.56892 5.71554L2 6.5L3.56892 7.28446C4.0999 7.54995 4.36538 7.68269 4.59545 7.86003C4.79959 8.01739 4.98261 8.20041 5.13997 8.40455C5.31731 8.63462 5.45005 8.9001 5.71554 9.43108L6.5 11L7.28446 9.43108C7.54995 8.9001 7.68269 8.63462 7.86003 8.40455C8.01739 8.20041 8.20041 8.01739 8.40455 7.86003C8.63462 7.68269 8.9001 7.54995 9.43108 7.28446L11 6.5L9.43108 5.71554C8.9001 5.45005 8.63462 5.31731 8.40455 5.13997C8.20041 4.98261 8.01739 4.79959 7.86003 4.59545C7.68269 4.36538 7.54995 4.0999 7.28446 3.56892L6.5 2ZM17 12L16.0489 13.9022C15.7834 14.4332 15.6506 14.6987 15.4733 14.9288C15.3159 15.1329 15.1329 15.3159 14.9288 15.4733C14.6987 15.6506 14.4332 15.7834 13.9023 16.0489L12 17L13.9023 17.9511C14.4332 18.2166 14.6987 18.3494 14.9288 18.5267C15.1329 18.6841 15.3159 18.8671 15.4733 19.0712C15.6506 19.3013 15.7834 19.5668 16.0489 20.0977L17 22L17.9511 20.0978C18.2166 19.5668 18.3494 19.3013 18.5267 19.0712C18.6841 18.8671 18.8671 18.6841 19.0712 18.5267C19.3013 18.3494 19.5668 18.2166 20.0977 17.9511L22 17L20.0977 16.0489C19.5668 15.7834 19.3013 15.6506 19.0712 15.4733C18.8671 15.3159 18.6841 15.1329 18.5267 14.9288C18.3494 14.6987 18.2166 14.4332 17.9511 13.9023L17 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconStars03.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
