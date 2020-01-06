function findIndex(arr, predicate, start = 0) {
    if (0 <= start && start < arr.length) {
        if (predicate(arr[start])) {
            return start;
        }
        return findIndex(arr, predicate, start + 1);
    }
}

// start 参数 保存了 index 的状态
findIndex(['a', 'b'], (x) => x === 'b'); // 找到 arr 中 'b' 的 index