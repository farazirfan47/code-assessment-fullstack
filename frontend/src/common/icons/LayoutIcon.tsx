import React from 'react';

export const LayoutIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="40" height="40" fill="url(#pattern0_55_4141)" />
      <defs>
        <pattern
          id="pattern0_55_4141"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_55_4141" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_55_4141"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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BIAAQACAABAAAkAAIABAAAgAASAAEAAIAAEgAASAAEAAIAAEgAAQACAAEAAIAAEAAgABgAAQACAAEAAIAAEAAgABgAAQACAAEAACAAEAAgABIAAQACAAEAACAAGAADBICAABgABAAIAAEAACQAAgAEAACAABIAAQACAABIAAEAAIABAAAkAACAAEAAgAASAABAACAASAABAAAgABAAJAAAgAAYAAQAAIAAEgAAQAAgABIAAEgAAAAYAAQAAIABAACAAEgAAAAYAAQAAIABAACAAEgAAAAYAAEAAIABAACAABgAAAAYAAEAAIAASAAEAACAAEAAIABIAAEAACAAEAAkAACAABgAAAASAABIAAQACAABAAAkAAIABAAAgAASAAEAAgAASAABAACAAQAAJAAAgABAACQAAIAAEgABAACAABIAAEgFFCACAAEAACAAQAAgABIABAACAAEAACAAQAAgABIABAACAABAACAAQAAkAAIABAACAABAACAAQAAkAAIAAQACAABIAAEAAIABAAAkAACAAEAAgAASAABAACAASAABAAAgABAAJAAAgAAYAAAAEgAASAAEAAgAAQAAJAACAAEAACQAAIAAGAAEAACAABIAAEAAIAAYAAEAAgABAACAABAAIAAYAAEAAgABAACAABAAIAASAADLkAAAGAABAACAAQAAgAAYAAAAGAABAACAAEAAgAASAABAACAASAABAAAgABAAJAAAgAAYAAAAEgAASAAEAAgAAQAAJAACAAQAAIAAEgABAAIAAEgAAQAAgABIAAEAACQAAgABAAAkAACAABgABAABhyASAAQAAgABAAAgAEAAIAASAAQAAgABAAAgAEAAJAABhxAQACAAEgABAAIAAQAAIAAQACAAEgABAACAAQAAIAAYAAAAEgAASAAEAAgAAQAAJAACAAQAAIAAEgABAAIAAEgAAQAAgAEAACQAAIAAQACAABIAAEAAIABIAAEAACAAGAABAAAkAACAAEAAJAAAgAAQACAAGAABAAIAAQAAgAAQACAAGAABAAIAAQAAgAAQACAAEgABAAIAAQAAIAAQACAAEgABAACACDhAAQAAgABAAIAAEgAAQAAgAEgAAQAAIAAQACQAAIAAGAAAABIAAEgABAAIAAEAACQAAgAEAACAABIAAQACAABIAAEAAIAASAABAAAkAAIAAQ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gDbZHIwqugBIXNXr5sbb+n3owIIAADrk1aC84AMgcUXPLzd8q+9bDisIACCj5gU9CzIAwr/6r/Z3fhAAQFa/H/DXBRUAddeeOPHg2NMdVBAAQHbFg8vyHgCpn/bV39B7iUMKAgDIqR929CeDHXl63+cbvtV3ryMKAgDIi18Ex+U0AMK//LulHiPqgIIAAPIq9djh0pwFQP2NfTY4niAAgIIwIycBkHpRj8MJAgAoKLdmNQDqru5118F7HU0QAECBaQgGZyUAUm/vS959WtLRBAEAFKR9bXm7YGu/8d+98bve4AcCAChwm4JuGQuA+tG9FzqWIACAonB3RgIgcUXP05Lf99E/CACgSHwQdO9wANSP6bPKoQQBABSVSR0KgMSVPc89eI9n/IMAAIpMXdCv3QHQcPPJOx1JEABAUXq8XQGQer2vAwkCAChayaO9Pvhoj/td60CCAACKWlWbAiD1mt/knac2OJAgAICitrel1wa39PH/tY4jCAAgEs5sdQDU39D7ZccRBAAQCeNaHQCN/9C/1nEEAQBEwtpWBUDiyp6DHEYQAECk9E8bAHXfPGmewwgCAIiU76QNgPobT97oMIIAACJlZtoAaLil7zsOIwgAIFKeShsAjd/pF3cYQQAAkbIybQAk7zyt0WEEAQBEyttHDYDEZT26HrzXUQQBAERMY1DScgBc0fNMRxEEABBJJ7YcAFf1us5RBAEARNLftBgAdVf3uttRBAEARNKFLQfANb3GOoogAIBIGiIAAAEAAkAAgAAABICjCAIAEACAAAAEACAAAAEACABAAAACABAAgAAABAAgAAABAAgAQAAAAgAQAIAAAAQAIAAAAQAIAEAAAAIAEACAAAAEACAAAAEACAAQAAIABAAgAAQACABAAAACABAAgAAABAAgAAABAAgAQAAAAgAQAIAAAAQAIAAAAQAIAEAAAAIAEACAAAAEACAAAAEACABAAAACABAAgAAABAAgAEAACAAQAIAAEAAgAAABAAgAQAAAAgAQAIAAAAQAIAAAAQAIAEAAAAIAEACAAAAEACAAAAEACABAAAACABAAgAAABAAgAICOBkDiql43OYogAIBI+nrLAXBlz4GOIggAIJJOaTkALu9xgqMIAgCIpGNbDICU5N2nJR1GEABApOz75N5/KgAab+9f6zCCAAAiZV3aAGi49ZT3HUYQAECkLEobAPV/d/JWhxEEABApP00fADf0/rXDCAIAiJQfpA2AxFW9RjuMIACASDkrfQBc1qNL8s5TGx1HEABAJLwVHJM2AJr+DHBjn/WOIwgAIBKmH2nrjxgAddeceI/jCAIAiISLWh0Aict7HJ/8/ukeCAQCAChuB4JYqwOg6XkAN/fd7UCCAACK2n+0tPMtBkDdtSeOdyBBAABFbUSbAyD1a4DG2/p95EiCAACK0rIjffs/bQA0RcDVvW5zJEEAAEXp3KNt/FEDoOm7ALf0fcehBAEAFJUF6fY9bQAk/mfPSw/e61CCAACKRGPwpQ4HgBcEgQAAivvFP+0OgMSVPc86OPZ0BxMEAFDYqoPeGQuA5p8FTnAwQQAABSsZjGrtrrc6AJr+FDC69/OOJggAoCDd25ZNb1MA/OEJgSfvcjhBAAAF5edt3fM2B0Di8h4nNH6nX7XjCQIAKAjLg2OzHgBNEXBFz68k7zy10QEFAQDk1X8Gvdqz5e0KgObnAwxPfu/UekcUBACQFzuCM9q74+0OgOZPAr7Q8O1T9jukIACAnFoSfK4jG96hAGh+aVC3+hv7bHBMQQAAOTEjKO3ofnc4AA49J+D6k57wyGAQAEDW1Ae3ZGq3MxYATRFwda/v+XIgCAAgK1/2Oz+Tm53RAGj+mWD3+tG9Fye/f3rSgQUBAHTIgWBs0C3Te53xADj8C4L1Y/q8cfAe7xAAAQC0UV0wpaNf9MtLABz2IqFBDTf33e3YggAAWuWJoH+29znrAXBYCAyp/2bvZxpv6/ehwwsCAPgvL/F5LbgzOD1Xu5yzAPjEnwf+su66k37WcEvfd/2JAAQAdEKJ4OlgTNAjH1uclwD4xJcGe9Rd3euOum+cNLt+dO+F9WP6rG74Vt+9qU8Kknec2iAQQABAkf4Nf1fzv+x/GUwN7g6uCy4I/jTf+/v/AIfeXWrr7yMRAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};