import concurrently from 'concurrently';

concurrently([
   {
      name: 'backend',
      command: 'bun run dev',
      cwd: 'packages/backend',
      prefixColor: 'blue',
   },
   {
      name: 'frontend',
      command: 'bun run dev',
      cwd: 'packages/frontend',
      prefixColor: 'green',
   },
]);
