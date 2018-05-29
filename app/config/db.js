export const apiBasic = {
  URL: 'http://api.fixer.io',
  END_POINT: 'latest',
  API_KEY: '9cb48ec62d0bab15a3e0170dc17bf26f',
};

export const apiLayer = {
  URL:
    'http://www.apilayer.net/api/live?access_key=25590c5bc178675594c4f1f9a4961629',
  END_POINT: 'live',
  API_KEY: '25590c5bc178675594c4f1f9a4961629',
};

export const apiFixer = {
  URL: 'http://data.fixer.io/api',
  END_POINT: 'latest',
  API_KEY: '9cb48ec62d0bab15a3e0170dc17bf26f',
};

export const layerUsage = {
  url: `${apiLayer.URL}/${apiLayer.END_POINT}?access_key=${apiLayer.API_KEY}`,
};

export const fixerUsage = {
  url: `${apiFixer.URL}/${apiFixer.END_POINT}?access_key=${apiFixer.API_KEY}`
};
