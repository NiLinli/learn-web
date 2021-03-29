export default function(val) {
  if (!val) return '';
  if (typeof val !== 'string') val = String(val);

  return val
    .split('')
    .reverse()
    .join('');
}
