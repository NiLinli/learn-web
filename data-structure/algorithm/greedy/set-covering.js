// 集合覆盖问题
//  O(n^2)
function findStationCover(statesNeeded) {
  const stations = {};

  stations['kone'] = new Set(['id', 'nv', 'ut']);
  stations['ktwo'] = new Set(['wa', 'id', 'mt']);
  stations['kthree'] = new Set(['or', 'nv', 'ca']);
  stations['kfour'] = new Set(['nv', 'ut']);
  stations['kfive'] = new Set(['ca', 'az']);

  // 最终选择 station 集合
  const finalStations = new Set();

  while (statesNeeded.size > 0) {
    let bestStation;
    let statesCoverd = new Set();

    Object.getOwnPropertyNames(stations).forEach((stationKey) => {
      // 取 statesNeeded 和当前 station 的交集
      const coverd = new Set([...stations[stationKey]].filter((v) => statesNeeded.has(v)));

      if (coverd.size > statesCoverd.size) {
        bestStation = stationKey;
        statesCoverd = coverd;
      }
    });

    if (bestStation) {
      // 记录所选取的 station, 移除该 station 提供的 item
      finalStations.add(bestStation);
      statesNeeded = new Set([...statesNeeded].filter((v) => !statesCoverd.has(v)));
    } else {
      statesNeeded.clear();
    }
  }

  return finalStations;
}

const statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);
console.log(findStationCover(statesNeeded));
