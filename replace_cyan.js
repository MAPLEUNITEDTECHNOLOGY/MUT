const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Tailwind classes
    content = content.replace(/text-cyan-400/g, 'text-red-500');
    content = content.replace(/text-cyan-500/g, 'text-red-600');
    content = content.replace(/text-cyan-600/g, 'text-red-700');
    
    content = content.replace(/bg-cyan-400/g, 'bg-red-500');
    content = content.replace(/bg-cyan-500/g, 'bg-red-600');
    content = content.replace(/bg-cyan-600/g, 'bg-red-700');
    
    content = content.replace(/border-cyan-400/g, 'border-red-500');
    content = content.replace(/border-cyan-500/g, 'border-red-600');
    content = content.replace(/border-cyan-600/g, 'border-red-700');

    // Also replace indigo (it was used together with cyan for gradients)
    content = content.replace(/from-cyan-400 to-indigo-500/g, 'from-red-400 to-[#e01030]');
    content = content.replace(/from-cyan-500 to-indigo-600/g, 'from-red-500 to-[#b00c25]');
    content = content.replace(/from-cyan-600 to-indigo-600/g, 'from-red-600 to-[#b00c25]');
    
    content = content.replace(/text-indigo-400/g, 'text-red-500');
    content = content.replace(/text-indigo-500/g, 'text-red-600');

    // Hex codes
    content = content.replace(/#00E5FF/gi, '#e01030');
    content = content.replace(/#22d3ee/gi, '#e01030');

    // RGBA colors
    // rgba(0,229,255) -> rgba(224,16,48)
    content = content.replace(/rgba\(0,\s*229,\s*255\)/gi, 'rgba(224,16,48)');
    // rgba(34, 211, 238) -> rgba(224, 16, 48)
    content = content.replace(/rgba\(34,\s*211,\s*238,\s*/gi, 'rgba(224, 16, 48, ');
    // rgba(6,182,212) -> rgba(224,16,48)
    content = content.replace(/rgba\(6,\s*182,\s*212,\s*/gi, 'rgba(224, 16, 48, ');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.next') {
                walkDir(fullPath);
            }
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css') || fullPath.endsWith('.md')) {
            replaceInFile(fullPath);
        }
    }
}

walkDir('./src');
walkDir('./design_system.md');
