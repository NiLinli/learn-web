export default function capitalize(val) {
  if (!val) return '';
  if (typeof val !== 'string') val = String(val);

  return val[0].toUpperCase() + val.slice(1);
}
