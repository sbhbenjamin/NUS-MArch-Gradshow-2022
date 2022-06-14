import React, { useState } from 'react';
import { supervisors } from '../../data/supervisors';
import { clusters } from '../../data/clusters';

import styles from '../../styles/Index.module.css';

const Options = () => {
  const [query, setQuery] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [cluster, setCluster] = useState('');

  const handleSupervisorChange = (value) => {
    setSupervisor(value);
  };

  const handleClusterChange = (value) => {
    setCluster(value);
  };

  return (
    <div className={styles.controlGroup}>
      <div>
        <input
          className={styles.searchbar}
          value={query}
          type="text"
          placeholder="Search for a student or project..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className={styles.optionGroup}>
        <select onChange={handleSupervisorChange} className={styles.option}>
          {supervisors.map((supervisor) => (
            <option key={supervisor.value} value={supervisor.value}>
              {supervisor.label}
            </option>
          ))}
        </select>
        <select onChange={handleSupervisorChange} className={styles.option}>
          {clusters.map((cluster) => (
            <option key={cluster.label} value={cluster.value}>
              {cluster.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Options;
