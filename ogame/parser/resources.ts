import AuthenticationManager from '../AuthenticationManager';

const RESOURCES_URL = 'https://s180-de.ogame.gameforge.com/game/index.php?page=resourceSettings';

export default async function () {
  const response = await fetch(RESOURCES_URL, { method: 'GET', headers: { Cookie: AuthenticationManager.getCookie()! } });
  const data = await response.text();

  return data;
}
