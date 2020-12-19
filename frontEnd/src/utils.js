export const parseRequestUrl = () => {
  const url = document.location.hash.toLowerCase();
  const request = url.split('/');
  return { // object is getting returned
    resource: request[1], // 2nd element of request
    id: request[2], // 3rd element of request
    verb: request[3],
  };
};
