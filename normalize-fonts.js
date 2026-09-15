const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Weights
  content = content.replace(/fontWeight:\s*900/g, "fontWeight: 800");
  content = content.replace(/fontWeight:\s*800/g, "fontWeight: 700");
  
  // Title sizes
  content = content.replace(/fontSize:\s*'3\.5rem'/g, "fontSize: '2.5rem'");
  content = content.replace(/fontSize:\s*'3rem'/g, "fontSize: '2.25rem'");
  content = content.replace(/fontSize:\s*'2\.5rem'/g, "fontSize: '2rem'");
  content = content.replace(/fontSize:\s*'2\.25rem'/g, "fontSize: '1.75rem'");
  
  // Body sizes - bump tiny text up
  content = content.replace(/fontSize:\s*'0\.75rem'/g, "fontSize: '0.875rem'");
  content = content.replace(/fontSize:\s*'0\.8rem'/g, "fontSize: '0.9rem'");
  content = content.replace(/fontSize:\s*'0\.875rem'/g, "fontSize: '1rem'");
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
  }
});
