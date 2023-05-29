import config from 'config';
import md5 from 'md5';

const { REACT_APP_MARVEL_BASE_URL, REACT_APP_MARVEL_PUBLIC_KEY } = config;

/*
 * API Docs
 * https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
 */
const getCharacters = async (query) => {
  const charactersPath = '/v1/public/characters';
  const apikey = `?apikey=${REACT_APP_MARVEL_PUBLIC_KEY}`;
  const queryParameters = query ? query : '';
  const ts = '123';
  const hash = md5(
    '1230e54c975cb955ad213cd356c217c1fc7d2a66747fb209159b4e6b5b42b1f93585a4e32fa'
  );
  // eslint-disable-next-line max-len
  const fullUrl = `${REACT_APP_MARVEL_BASE_URL}${charactersPath}${apikey}&ts=${ts}&hash=${hash}&${queryParameters}`;

  const response = await fetch(fullUrl);
  const content = await response.json();
  const data = content.data;

  return data;
};

export { getCharacters };
