// && 高于 || 高于 ?:
console.log(
  false && true || true,    // the same
  (false && true) || true,  // the same
  false && (true || true)
);

console.log(
  true || false && false,   // the same
  (true || false) && false,
  true || (false && false), // the same
);

// a && b || c ? c || b ? a : c && b : a
// (a && b || c) ? ((c || b) ? a : (c && b)): a