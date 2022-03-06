import React, { Children, FC, ReactNode } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface Props {
  width: string;
  height: string;
  onClick: (num: number) => void;
  variant: CardVariant;
}

const Card: FC<Props> = ({ width, onClick, variant, height, children }) => {
  return (
    <button
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "5px solid #A9A9A9" : "none",
        background: variant === CardVariant.primary ? "#A9A9A9" : "",
      }}
      onClick={() => onClick(5)}
    >
      {children}
    </button>
  );
};
export default Card;
