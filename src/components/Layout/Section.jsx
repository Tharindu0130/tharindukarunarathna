const Section = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
