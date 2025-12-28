import mysql from 'mysql2/promise';
import fs from 'fs';

const connection = await mysql.createConnection({
  host: 'yamabiko.proxy.rlwy.net',
  port: 22867,
  user: 'root',
  password: 'erbIuMXJWxaTOaFGJdEsDDJZcUwkAdGx',
  database: 'railway',
  ssl: { rejectUnauthorized: false },
  multipleStatements: true
});

console.log('Connected to Railway MySQL');

// Read migration files
const migration1 = fs.readFileSync('./drizzle/0000_giant_mentallo.sql', 'utf8');
const migration2 = fs.readFileSync('./drizzle/0001_funny_microchip.sql', 'utf8');

try {
  console.log('Running migration 1...');
  await connection.query(migration1);
  console.log('✓ Migration 1 complete');
  
  console.log('Running migration 2...');
  await connection.query(migration2);
  console.log('✓ Migration 2 complete');
  
  // Verify tables
  const [tables] = await connection.query('SHOW TABLES');
  console.log(`\n✓ Created ${tables.length} tables:`);
  tables.forEach(t => console.log('  -', Object.values(t)[0]));
  
} catch (error) {
  console.error('Migration error:', error.message);
  process.exit(1);
} finally {
  await connection.end();
}
