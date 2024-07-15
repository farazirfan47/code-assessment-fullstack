import React from 'react';

interface Props {
  className?: string;
}

export const SchoolIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path fill="url(#pattern0_1_5601)" d="M0 0H40V40H0z"></path>
      <defs>
        <pattern
          id="pattern0_1_5601"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00444)" xlinkHref="#image0_1_5601"></use>
        </pattern>
        <image
          id="image0_1_5601"
          width="225"
          height="225"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
};