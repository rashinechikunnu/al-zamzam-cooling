type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use "light" on dark (navy) backgrounds */
  tone?: "dark" | "light";
};

/** The small label + big heading + intro text used at the top of each section. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const centered = align === "center";
  const light = tone === "light";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className={`eyebrow ${centered ? "justify-center" : ""} ${light ? "text-yellow" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "!text-white" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/75" : "text-body/80"}`}>{description}</p>
      )}
    </div>
  );
}
