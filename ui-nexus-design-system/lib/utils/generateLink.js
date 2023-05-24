const generateLink = (location, current, target, hostname) => {
  if (location && hostname) {
    let path;
    // console.log('location', location);
    // console.log('current', current);
    // console.log('target', target);
    // console.log('hostname', hostname);

    if (current) {
      path = location.pathname.replace(current, target);
    }
    else if (target) {
      path = `/${target}/`;
    }
    else {
      path = '/';
    }
    //console.log('return str', `${location.protocol}//${hostname}${path}${location.search}${location.hash}`);

    return `${location.protocol}//${hostname}${path}${location.search}${location.hash}`;
  }

  return '#';
};

export default generateLink;
