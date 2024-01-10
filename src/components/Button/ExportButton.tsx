const ExportButton = () => {
  return (
    <button
      style={{
        height: "40px",
        width: "125px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        border: "1px solid #C5C5C5",
        backgroundColor: "#fff",
        borderRadius: "5px",
      }}
    >
      <i
        className="fe-download-cloud"
        style={{ fontSize: "16px", paddingTop: "2px" }}
      ></i>
      <span style={{ fontSize: "14px" }}>Export</span>
      <i
        className="fas fa-caret-down"
        style={{ fontSize: "16px", marginLeft: "20px" }}
      ></i>
    </button>
  );
};

export default ExportButton;
