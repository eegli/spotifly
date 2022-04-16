import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const packagesDir = join(process.cwd(), 'packages');

const packages = readdirSync(packagesDir)
  .map(pkg => join(packagesDir, pkg))
  .map(pkg => JSON.parse(readFileSync(join(pkg, 'package.json'), 'utf8')));

const dependencyMap = new Map(packages.map(pkg => [pkg.name, pkg.version]));

const projects = packages.map(pkg => {
  const dependencies = pkg.dependencies
    ? Object.entries(pkg.dependencies)
        .filter(([name]) => dependencyMap.has(name))
        .map(dep => {
          const name = dep[0];
          const version = dep[1];
          const latest = dependencyMap.get(name);
          return { name, version, latest };
        })
    : [];
  return {
    name: pkg.name,
    version: pkg.version,
    dependencies,
  };
});

const outDated = projects.reduce((acc, curr) => {
  const outatedInternals = curr.dependencies.filter(
    dep => dep.version !== '^' + dep.latest
  );
  if (outatedInternals.length > 0) {
    acc.push(curr);
  }
  return acc;
}, []);

writeFileSync(
  join(process.cwd(), 'versions.json'),
  JSON.stringify({ outDated, projects }, null, 2)
);
