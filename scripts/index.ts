#!/usr/bin/env node

import { execSync } from 'child_process';
import * as readline from 'readline';

// Display a simple menu to choose a script
console.log('BitSix Marketing Website Generator Tools\n');
console.log('1. Generate Page');
console.log('2. Exit\n');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Choose an option (1-2): ', (option: string) => {
    switch (option.trim()) {
        case '1':
            console.log('Starting Page Generator...\n');
            execSync('npx ts-node --esm scripts/generate-page.ts', { stdio: 'inherit' });
            break;
        case '2':
            console.log('Exiting...');
            break;
        default:
            console.log('Invalid option. Exiting...');
    }

    rl.close();
}); 