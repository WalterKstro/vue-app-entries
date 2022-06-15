function hashCode(str) {
  var h = 0, l = str.length, i = 0;
  if ( l > 0 )
    while (i < l)
      h = (h << 5) - h + str.charCodeAt(i++) | 0;
  return h;
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const findOfOneArray = (array, id) => {
  return array.findIndex(entry => entry.id === id);
}

export {
  hashCode,
  options,
  findOfOneArray,
}