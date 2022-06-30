import React, { useState } from 'react';
import { supervisors } from '../../data/supervisors';
import { clusters } from '../../data/clusters';

import styles from '../../styles/Index.module.css';

const Options = ({
  query,
  setQuery,
  supervisor,
  setSupervisor,
  cluster,
  setCluster,
}) => {
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
        <select
          className={styles.option}
          defaultValue={supervisors[0]}
          value={supervisor}
          onChange={(e) => setSupervisor(e.target.value)}
        >
          {supervisors.map((supervisor) => (
            <option key={supervisor.supervisor} value={supervisor.sid}>
              {supervisor.supervisor}
            </option>
          ))}
        </select>
        <select
          className={styles.option}
          defaultValue={clusters[0]}
          value={cluster}
          onChange={(e) => setCluster(e.target.value)}
        >
          {clusters.map((cluster) => (
            <option key={cluster.cluster} value={cluster.cid}>
              {cluster.cluster}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Options;
