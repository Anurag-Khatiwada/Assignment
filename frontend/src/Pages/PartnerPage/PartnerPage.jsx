import './PartnerPage.css';
import CTASection from '../../components/CTASection/CTASection';
import PartnerCard from '../../components/PartnerSection/PartnerCard';
import { partners } from '../../data';


function PartnerPage() {
  return (
    <div className="partner-page">
        <div className='page-header'>
            <h1>The Builders Behind the <span>Mission</span></h1>
            <p className='para'>Meet the leaders powering every milestone.</p>
        </div>
      

      <div className="partner-grid">
        {partners.map((member, i) => (
          <PartnerCard key={i} {...member} />
        ))}
      </div>

      <CTASection />
    </div>
  );
}
export default PartnerPage