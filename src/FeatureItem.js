// Reusable component for displaying a single feature
const FeatureItem = ({ title, desc, logo, image, backgroundColor }) => {
  return (
    <div className="feature-item" style={{ backgroundColor }}>
      <div>
        <div className="content">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            style={{ width: "50px" }}
          />
          <h2 className="title">{title}</h2>
          <p className="description">{desc}</p>
        </div>
      </div>
      <div className="imgArea">
        <img src={image} alt="Phone" className="phone-image" />
      </div>
    </div>
  );
};

export default FeatureItem;
