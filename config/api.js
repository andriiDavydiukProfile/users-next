import camelCase from 'lodash.camelcase';

export const convertCase = (oldObject, converterFunction) => {
  let newObject;

  if (!oldObject || typeof oldObject !== 'object' || !Object.keys(oldObject).length) {
    return oldObject;
  }

  if (Array.isArray(oldObject)) {
    newObject = oldObject.map(element => convertCase(element, converterFunction));
  } else {
    newObject = {};
    Object.keys(oldObject).forEach(oldKey => {
      const newKey = converterFunction(oldKey);
      newObject[newKey] = convertCase(oldObject[oldKey], converterFunction);
    });
  }

  return newObject;
};

export const toCamelCase = (obj) => convertCase(obj, camelCase);

export const defaultHeaders = () => ({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-CSRF-TOKEN': document?.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
  }
});

export const request = (url, opts = {}) => new Promise((resolve, reject) => {
  const { withHeaders, ...otherOpts } = opts;
  window.fetch(url, {
    ...otherOpts,
    ...defaultHeaders(),
    credentials: 'include'
  }).then((response) => {
    if (response.ok) {
      response.json().then((responseJson) => {
        const data = toCamelCase(responseJson);
        if (withHeaders) {
          resolve([data, response.headers]);
        } else {
          resolve(data);
        }
      }).catch((error) => reject(error));
      return;
    }
    reject(response);
  }).catch((error) => {
    reject(error);
  });
});


