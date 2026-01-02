// Node 22 has native fetch, no import needed

const CRICKET_API_KEY = process.env.CRICKET_API_KEY;
const CRICKET_API_URL = process.env.CRICKET_API_URL;

async function debugCricketAPI() {
  try {
    console.log('Fetching current matches from Cricket API...\n');
    
    const response = await fetch(`${CRICKET_API_URL}/currentMatches?apikey=${CRICKET_API_KEY}&offset=0`);
    const data = await response.json();
    
    console.log(`Total matches returned: ${data.data?.length || 0}\n`);
    
    // Group matches by status
    const statusGroups = {};
    const matchStartedGroups = { true: [], false: [], undefined: [] };
    const matchEndedGroups = { true: [], false: [], undefined: [] };
    
    data.data?.forEach(match => {
      // Group by status
      const status = match.status || 'NO_STATUS';
      if (!statusGroups[status]) {
        statusGroups[status] = [];
      }
      statusGroups[status].push(match);
      
      // Group by matchStarted
      const started = match.matchStarted === true ? 'true' : match.matchStarted === false ? 'false' : 'undefined';
      matchStartedGroups[started].push(match);
      
      // Group by matchEnded
      const ended = match.matchEnded === true ? 'true' : match.matchEnded === false ? 'false' : 'undefined';
      matchEndedGroups[ended].push(match);
    });
    
    console.log('=== MATCHES BY STATUS ===');
    Object.entries(statusGroups).forEach(([status, matches]) => {
      console.log(`\n"${status}": ${matches.length} matches`);
      if (matches.length <= 3) {
        matches.forEach(m => {
          console.log(`  - ${m.name} (matchStarted: ${m.matchStarted}, matchEnded: ${m.matchEnded})`);
        });
      }
    });
    
    console.log('\n\n=== MATCHES BY matchStarted FLAG ===');
    console.log(`matchStarted=true: ${matchStartedGroups.true.length} matches`);
    console.log(`matchStarted=false: ${matchStartedGroups.false.length} matches`);
    console.log(`matchStarted=undefined: ${matchStartedGroups.undefined.length} matches`);
    
    console.log('\n\n=== MATCHES BY matchEnded FLAG ===');
    console.log(`matchEnded=true: ${matchEndedGroups.true.length} matches`);
    console.log(`matchEnded=false: ${matchEndedGroups.false.length} matches`);
    console.log(`matchEnded=undefined: ${matchEndedGroups.undefined.length} matches`);
    
    // Show sample upcoming match
    console.log('\n\n=== SAMPLE UPCOMING MATCH (matchStarted=false) ===');
    const sampleUpcoming = matchStartedGroups.false[0];
    if (sampleUpcoming) {
      console.log(JSON.stringify(sampleUpcoming, null, 2));
    }
    
    // Show sample live match
    console.log('\n\n=== SAMPLE LIVE MATCH (matchStarted=true, matchEnded=false) ===');
    const sampleLive = data.data?.find(m => m.matchStarted === true && m.matchEnded === false);
    if (sampleLive) {
      console.log(JSON.stringify(sampleLive, null, 2));
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

debugCricketAPI();
