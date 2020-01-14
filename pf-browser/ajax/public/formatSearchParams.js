function formatSearchParams(data) {
  if (!data) return ''; 
  var pairs = [];
  for (var name in data) {
      if (!data.hasOwnProperty(name)) continue;
      if (typeof data[name] === 'function') continue;
      var value = data[name].toString();
      name = encodeURIComponent(name.replace(' ', '+')); // Encode name
      value = encodeURIComponent(value.replace(' ', '+')); // Encode value
      pairs.push(name + '=' + value); // Remember name=value pair
  }
  return pairs.join('&'); 
}