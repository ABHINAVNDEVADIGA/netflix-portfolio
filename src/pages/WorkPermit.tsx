import React, { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';

const WorkPermit: React.FC = () => {
  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);

  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }
    fetchWorkPermitData();
  }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Authorization</h2>

        <p className="work-permit-summary">
          <strong>Indian Citizen 🇮🇳</strong> — No visa or work permit is required to work in India.
          I am legally authorized to work anywhere within the country.
        </p>

        <p className="additional-info">
          📍 Currently based in <strong>Bengaluru</strong><br />
          🏡 Native of <strong>Kundapur, Udupi</strong>
        </p>
      </div>
    </div>
  );
};

export default WorkPermit;
