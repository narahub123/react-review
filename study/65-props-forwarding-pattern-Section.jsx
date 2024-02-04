                                                   // rest property
export default function Section({ title, children, ...props }) {
  return (
    // spread operator
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
