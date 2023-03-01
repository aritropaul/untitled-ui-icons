/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconPenToolPlus: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M15 7L8.83447 8.76158C8.52956 8.8487 8.37711 8.89226 8.25117 8.97414C8.13969 9.04662 8.04379 9.1406 7.96907 9.2506C7.88466 9.37485 7.83803 9.5264 7.74477 9.82948L4 22M4 22L16.1705 18.2552C16.4736 18.162 16.6251 18.1153 16.7494 18.0309C16.8594 17.9562 16.9534 17.8603 17.0259 17.7488C17.1077 17.6229 17.1513 17.4704 17.2384 17.1655L19 11M4 22L10.586 15.4139M5 8V2M2 5H8M21.8686 7.86863L18.1314 4.13137C17.7354 3.73535 17.5373 3.53735 17.309 3.46316C17.1082 3.3979 16.8918 3.3979 16.691 3.46316C16.4627 3.53735 16.2646 3.73535 15.8686 4.13137L15.1314 4.86863C14.7354 5.26465 14.5373 5.46265 14.4632 5.69098C14.3979 5.89183 14.3979 6.10817 14.4632 6.30902C14.5373 6.53735 14.7354 6.73535 15.1314 7.13137L18.8686 10.8686C19.2646 11.2646 19.4627 11.4627 19.691 11.5368C19.8918 11.6021 20.1082 11.6021 20.309 11.5368C20.5373 11.4627 20.7354 11.2646 21.1314 10.8686L21.8686 10.1314C22.2646 9.73535 22.4627 9.53735 22.5368 9.30902C22.6021 9.10817 22.6021 8.89183 22.5368 8.69098C22.4627 8.46265 22.2646 8.26465 21.8686 7.86863ZM12 12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconPenToolPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
