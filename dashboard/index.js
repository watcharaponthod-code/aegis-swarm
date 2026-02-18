import React from 'react';

const Dashboard = () => {
  const agents = [
    { id: 'Guardian-1', status: 'Optimal', type: 'Security', task: 'Monitoring Swarm Health' },
    { id: 'Analyst-1', status: 'Scanning', type: 'Research', task: 'Solana Market Trends' },
    { id: 'Executor-1', status: 'Idle', type: 'Action', task: 'Waiting for Signals' },
  ];

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#38bdf8', minHeight: '100vh', padding: '2rem', fontFamily: 'monospace' }}>
      <header style={{ borderBottom: '2px solid #38bdf8', marginBottom: '2rem' }}>
        <h1>🛡️ AEGIS SWARM COMMAND CENTER</h1>
        <p style={{ color: '#94a3b8' }}>Protocol Status: <span style={{ color: '#4ade80' }}>ACTIVE (ON-CHAIN)</span></p>
      </header>

      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {agents.map((agent) => (
          <div key={agent.id} style={{ border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '8px', backgroundColor: '#1e293b' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{agent.id}</h2>
            <p><strong>Type:</strong> {agent.type}</p>
            <p><strong>Task:</strong> {agent.task}</p>
            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: agent.status === 'Optimal' ? '#4ade80' : '#fbbf24' }}></span>
              <span>{agent.status}</span>
            </div>
          </div>
        ))}
      </main>

      <section style={{ marginTop: '3rem', borderTop: '1px solid #1e293b', paddingTop: '1.5rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Global Nervous System Log</h3>
        <div style={{ backgroundColor: '#000', padding: '1rem', borderRadius: '4px', height: '200px', overflowY: 'scroll', fontSize: '0.875rem' }}>
          <p>[15:27:01] INFO: Swarm initialization complete.</p>
          <p>[15:27:05] AUDIT: Guardian-1 verified on-chain identity.</p>
          <p>[15:28:12] RESEARCH: Analyst-1 detected bullish trend in AI Agents.</p>
          <p>[15:30:45] SYSTEM: Awaiting commands from Admin (Oat)...</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
