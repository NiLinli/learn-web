function isArrayLike(o) {
    return (
        o &&
        typeof o === 'object' &&
        isFinite(o.length) &&
        o.length >= 0 &&
        o.length === Math.floor(o.length) &&
        o.length < 4294967296
    );
}

// array-like -> pure array -> Array.from