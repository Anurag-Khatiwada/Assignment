import './PartnerCard.css';

const PartnerCard = ({ name, role, image }) => (
  <div className="card">
    <img src={image} alt={name} className="card-img" />
    <div className="card-info">
      <h4 className="member-name">{name}</h4>
      <p className="member-role">{role}</p>
    </div>
  </div>
);

export default PartnerCard;
