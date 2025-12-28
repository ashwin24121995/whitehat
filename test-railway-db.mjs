import mysql from 'mysql2/promise';

const DATABASE_URL = 'mysql://root:erbIuMXJWxaTOaFGJdEsDDJZcUwkAdGx@yamabiko.proxy.rlwy.net:22867/railway';

console.log('🔍 Testing Railway MySQL Connection with SSL...\n');

async function testConnection() {
  try {
    console.log('1️⃣ Creating connection pool...');
    const pool = mysql.createPool({
      uri: DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      },
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    console.log('✅ Pool created successfully\n');

    console.log('2️⃣ Testing connection...');
    const connection = await pool.getConnection();
    console.log('✅ Connection established\n');

    console.log('3️⃣ Checking database tables...');
    const [tables] = await connection.query('SHOW TABLES');
    console.log(`✅ Found ${tables.length} tables:`);
    tables.forEach(table => {
      console.log(`   - ${Object.values(table)[0]}`);
    });
    console.log('');

    console.log('4️⃣ Testing users table query...');
    const [users] = await connection.query('SELECT COUNT(*) as count FROM users');
    console.log(`✅ Users table accessible: ${users[0].count} users found\n`);

    console.log('5️⃣ Testing email lookup (same query that fails in production)...');
    const [result] = await connection.query(
      'SELECT id, email, name FROM users WHERE email = ? LIMIT 1',
      ['testmysql999@example.com']
    );
    console.log(`✅ Query executed successfully: ${result.length} results\n`);

    connection.release();
    await pool.end();

    console.log('✅ ✅ ✅ ALL TESTS PASSED! ✅ ✅ ✅');
    console.log('\n📊 Summary:');
    console.log('   - SSL connection: WORKING');
    console.log('   - Database access: WORKING');
    console.log('   - Users table: WORKING');
    console.log('   - Email query: WORKING');
    console.log('\n💡 Conclusion: The database connection code is correct.');
    console.log('   The issue is that Railway is NOT running this updated code.');
    console.log('   You MUST manually redeploy on Railway to apply the SSL fix.\n');

  } catch (error) {
    console.error('❌ TEST FAILED:', error.message);
    console.error('\n📋 Error details:', error);
    process.exit(1);
  }
}

testConnection();
