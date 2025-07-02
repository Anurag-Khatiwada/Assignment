import { Link } from 'react-router-dom';
import './CTASection.css';

const CTASection = () => (
  <div className="cta">
    <h2>We’re <span className="highlight">Hiring</span></h2>
    <p>Join a team where your ideas matter, your growth is supported, and your impact is real. </p>
    <Link to='/carers'>
    <button className='cta-btn'>Apply Now</button>

    </Link>
  </div>
);

export default CTASection;
