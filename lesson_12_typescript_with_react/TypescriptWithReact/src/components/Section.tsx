import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
