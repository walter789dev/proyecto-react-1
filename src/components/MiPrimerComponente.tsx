import { FC } from "react";

interface PropsComponent {
  text: string;
  color: string;
  fontSize: number;
}

export const MiPrimerComponente: FC<PropsComponent> = ({
  text,
  color,
  fontSize,
}) => {
  return (
    <div style={{ color: color, fontSize: `${fontSize || 1}rem` }}>
      <p>{text}</p>
    </div>
  );
};
