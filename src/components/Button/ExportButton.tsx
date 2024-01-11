const ExportButton = () => {
  return (
    <button className="export-btn">
      <i className="fe-download-cloud fs-16 pt-2px"></i>
      <span style={{ fontSize: "14px" }}>Export</span>
      <i className="fas fa-caret-down fs-16 ml-20px"></i>
    </button>
  );
};

export default ExportButton;
