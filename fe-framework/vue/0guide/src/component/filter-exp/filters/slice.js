export default function slice(val, m, n) {
  if (!val) return '';
  val = val.toString();
  return val.slice(m, n); 
}
