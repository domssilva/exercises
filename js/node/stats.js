const os = require('os');
const { freemem, totalmem } = os;

setInterval(() => {
	displayMemoryStats();
}, 1000);

function displayMemoryStats() {
	// Show on screen the memory stats
	// updated by every second.
	const total = parseInt(totalmem() / 1024 / 1024);
    const mem = parseInt(freemem() / 1024 / 1024);
    const percents = parseInt((mem / total) * 100);
  
    const stats = {
      free: `${mem} MB`,
      total: `${total} MB`,
      usage: `${percents} %`,
    };
  
    console.clear();
    console.log('=== PC STATS ===');
    console.table(stats);
}
