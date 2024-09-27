const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it')();

const directoryPath = path.join(__dirname, '/public'); // Ensure this path is correct
const mdFiles = fs.readdirSync(directoryPath).filter(file => file.endsWith('.md'));

let index = ""

mdFiles.forEach(file => {
  const filePath = path.join(directoryPath, file);
  const md = fs.readFileSync(filePath, 'utf8');
  const html = markdownIt.render(md);
  fs.writeFileSync(filePath.replace('.md', '.html'), html);
  index += `<a href="${file.replace('.md', '.html')}">${file.replace('.md', '')}</a><br>`;
  fs.writeFileSync(path.join(directoryPath, 'index.html'), index); 
});