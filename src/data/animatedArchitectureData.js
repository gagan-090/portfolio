export const auraGraph = {
  nodes: [
    { id: 'client', label: 'Flutter App', icon: 'smartphone', x: 15, y: 50 },
    { id: 'api', label: 'Node.js Gateway', icon: 'api', x: 45, y: 50 },
    { id: 'db', label: 'PostgreSQL', icon: 'database', x: 80, y: 20 },
    { id: 'payment', label: 'Razorpay', icon: 'payments', x: 80, y: 50 },
    { id: 'maps', label: 'Google Maps', icon: 'map', x: 80, y: 80 }
  ],
  edges: [
    { source: 'client', target: 'api' },
    { source: 'api', target: 'db' },
    { source: 'api', target: 'payment' },
    { source: 'api', target: 'maps' }
  ]
};

export const glowcartGraph = {
  nodes: [
    { id: 'client', label: 'Flutter UI', icon: 'smartphone', x: 15, y: 50 },
    { id: 'state', label: 'Riverpod Core', icon: 'memory', x: 45, y: 50 },
    { id: 'db', label: 'Firebase Data', icon: 'cloud', x: 80, y: 25 },
    { id: 'cdn', label: 'Global CDN', icon: 'dns', x: 80, y: 75 }
  ],
  edges: [
    { source: 'client', target: 'state' },
    { source: 'state', target: 'db' },
    { source: 'state', target: 'cdn' },
    { source: 'cdn', target: 'client' }
  ]
};

export const hashkartGraph = {
  nodes: [
    { id: 'client', label: 'Flutter UI', icon: 'smartphone', x: 15, y: 50 },
    { id: 'node', label: 'Node API', icon: 'api', x: 45, y: 25 },
    { id: 'rust', label: 'Rust Engine', icon: 'settings_b_roll', x: 45, y: 75 },
    { id: 'master', label: 'PG Master', icon: 'database', x: 75, y: 25 },
    { id: 'replica', label: 'PG Replica', icon: 'dataset', x: 75, y: 75 },
    { id: 'payment', label: 'Razorpay', icon: 'payments', x: 90, y: 50 }
  ],
  edges: [
    { source: 'client', target: 'node' },
    { source: 'client', target: 'rust' },
    { source: 'node', target: 'master' },
    { source: 'rust', target: 'replica' },
    { source: 'master', target: 'replica' },
    { source: 'node', target: 'payment' },
    { source: 'rust', target: 'node' }
  ]
};

export const truckmitrGraph = {
  nodes: [
    { id: 'client', label: 'React Native', icon: 'smartphone', x: 15, y: 50 },
    { id: 'vault', label: 'SQLite Vault', icon: 'sd_storage', x: 45, y: 25 },
    { id: 'sync', label: 'Sync Engine', icon: 'sync', x: 45, y: 75 },
    { id: 'cloud', label: 'Cloud DB', icon: 'cloud', x: 85, y: 50 }
  ],
  edges: [
    { source: 'client', target: 'vault' },
    { source: 'client', target: 'sync' },
    { source: 'vault', target: 'sync' },
    { source: 'sync', target: 'cloud' }
  ]
};

export const tmconnactGraph = {
  nodes: [
    { id: 'task', label: 'Flutter BG Task', icon: 'background_replace', x: 15, y: 50 },
    { id: 'ws', label: 'WebSockets', icon: 'wifi_tethering', x: 50, y: 25 },
    { id: 'sms', label: 'Cellular SMS', icon: 'cell_tower', x: 50, y: 75 },
    { id: 'core', label: 'Logistics Core', icon: 'dns', x: 85, y: 50 }
  ],
  edges: [
    { source: 'task', target: 'ws' },
    { source: 'task', target: 'sms' },
    { source: 'ws', target: 'core' },
    { source: 'sms', target: 'core' }
  ]
};

export const hrmsGraph = {
  nodes: [
    { id: 'client', label: 'React Native', icon: 'smartphone', x: 15, y: 50 },
    { id: 'gw', label: 'API Gateway', icon: 'router', x: 45, y: 50 },
    { id: 'hr', label: 'HR Service', icon: 'group', x: 75, y: 15 },
    { id: 'crm', label: 'CRM Service', icon: 'support_agent', x: 75, y: 50 },
    { id: 'payroll', label: 'Payroll Service', icon: 'payments', x: 75, y: 85 }
  ],
  edges: [
    { source: 'client', target: 'gw' },
    { source: 'gw', target: 'hr' },
    { source: 'gw', target: 'crm' },
    { source: 'gw', target: 'payroll' }
  ]
};
