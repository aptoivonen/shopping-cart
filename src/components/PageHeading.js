const PageHeading = ({ children, ...props }) => {
  return (
    <h1 className="display-5 fw-bold lh-1 mb-3" {...props}>
      {children}
    </h1>
  );
};

export default PageHeading;
