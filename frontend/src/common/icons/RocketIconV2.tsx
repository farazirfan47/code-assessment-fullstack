import React from 'react';
import { IconProps } from '@frontend/common/types/icon-types';

export const RocketIcon_v2: React.FC<IconProps> = ({
  className,
  ariaLabel,
  width = 14,
  height = 14,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={className}
      role="img"
      aria-label={ariaLabel || 'Mail Icon'}
    >
      <path
        d="M2.80011 9.5998C2.21909 9.5998 1.69407 9.83781 1.31605 10.2158C0.49002 11.0419 0 14.5 0 14.5C0 14.5 3.45814 14.01 4.28417 13.1839C4.57887 12.8908 4.77981 12.5166 4.86146 12.1091C4.94312 11.7015 4.90181 11.2788 4.74278 10.8947C4.58375 10.5107 4.31418 10.1825 3.96829 9.95196C3.6224 9.7214 3.2158 9.59883 2.80011 9.5998ZM3.29713 12.1969C3.10112 12.3929 1.77807 12.7289 1.77807 12.7289C1.77807 12.7289 2.10708 11.4129 2.31009 11.2099C2.4291 11.0769 2.6041 10.9999 2.80011 10.9999C2.93871 11.0001 3.07414 11.0413 3.18935 11.1183C3.30457 11.1953 3.39441 11.3047 3.44755 11.4327C3.5007 11.5607 3.51477 11.7016 3.48801 11.8376C3.46124 11.9736 3.39482 12.0986 3.29713 12.1969ZM10.7944 8.65477C15.2466 4.20259 13.7625 0.73745 13.7625 0.73745C13.7625 0.73745 10.2974 -0.74661 5.84523 3.70557L4.10216 3.35555C3.87558 3.31205 3.64181 3.32437 3.42105 3.39145C3.20029 3.45853 2.99919 3.57836 2.83511 3.74057L0 6.58268L3.50014 8.08074L6.41926 10.9999L7.91732 14.5L10.7524 11.6649C11.0814 11.3359 11.2284 10.8599 11.1374 10.3978L10.7944 8.65477ZM3.78715 6.68069L2.4501 6.10666L3.82915 4.72761L4.83719 4.93062C4.43818 5.51164 4.08116 6.12066 3.78715 6.68069ZM8.39334 12.0499L7.81931 10.7128C8.37933 10.4188 8.98836 10.0618 9.56238 9.66281L9.76539 10.6708L8.39334 12.0499ZM9.80039 7.66773C8.87635 8.59176 7.4343 9.34779 6.97228 9.5788L4.9212 7.52772C5.14521 7.0727 5.90124 5.63065 6.83227 4.69961C10.1084 1.42348 12.5935 1.9065 12.5935 1.9065C12.5935 1.9065 13.0765 4.3916 9.80039 7.66773ZM9.10036 6.79969C9.87039 6.79969 10.5004 6.16967 10.5004 5.39964C10.5004 4.62961 9.87039 3.99958 9.10036 3.99958C8.33033 3.99958 7.70031 4.62961 7.70031 5.39964C7.70031 6.16967 8.33033 6.79969 9.10036 6.79969Z"
        fill="white"
      />
    </svg>
  );
};