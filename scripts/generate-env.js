const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const dotenvPath = path.join(projectRoot, '.env');
const targetPath = path.join(projectRoot, 'src', 'assets', 'env-config.js');

function parseDotenv(content) {
  const env = {};
  content.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const idx = trimmed.indexOf('=');
    if (idx === -1) return;
    const key = trimmed.substring(0, idx);
    let val = trimmed.substring(idx + 1);
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.substring(1, val.length - 1);
    }
    env[key] = val;
  });
  return env;
}

let env = {};
if (fs.existsSync(dotenvPath)) {
  const content = fs.readFileSync(dotenvPath, 'utf8');
  env = parseDotenv(content);
}

const js = 'window.__env = ' + JSON.stringify(env, null, 2) + ';';
fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.writeFileSync(targetPath, js, 'utf8');
console.log('Wrote runtime env to', targetPath);
