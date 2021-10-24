import { AccountData, GameData, SessionData } from './types/OGameResponse';

const SESSION_URL = 'https://gameforge.com/api/v1/auth/thin/sessions';
// const ACCOUNT_URL = 'https://lobby.ogame.gameforge.com/api/users/me';
const ACCOUNT_URL = 'https://lobby.ogame.gameforge.com/api/users/me/accounts';
const LOGIN_URL = 'https://lobby.ogame.gameforge.com/api/users/me/loginLink';

class AuthenticationManager {
  private cookie: string | undefined;

  public authenticate = async (username: string, password: string): Promise<boolean> => {
    const data = {
      autoGameAccountCreation: false,
      gameEnvironmentId: '0a31d605-ffaf-43e7-aa02-d06df7116fc8',
      identity: username,
      password: password,
      platformGameId: '1dfd8e7e-6e1a-4eb1-8c64-03c3b62efd2f',
      gfLang: 'de',
      locale: 'de_DE',
    };

    const sessionResponse = await fetch(SESSION_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    const sessionData = (await sessionResponse.json()) as SessionData;

    // const accountResponse = await fetch(ACCOUNT_URL, { method: 'GET', headers: { authentication: `Bearer ${sessionData.token}` } });
    // const accountData = (await accountResponse.json()) as AccountData;

    const accountResponse = await fetch(ACCOUNT_URL, { method: 'GET', headers: { authorization: `Bearer ${sessionData.token}` } });
    const accountData = (await accountResponse.json()) as AccountData[];

    const gameResponse = await fetch(
      `${LOGIN_URL}?id=${accountData[0].gameAccountId}&server[language]=${accountData[0].server.language}&server[number]=${accountData[0].server.number}&clickedButton=quick_join`,
      { headers: { authorization: `Bearer ${sessionData.token}` } }
    );
    const gameData = (await gameResponse.json()) as GameData;

    const loginResponse = await fetch(gameData.url, { method: 'GET', redirect: 'manual' });

    this.cookie = loginResponse.headers.get('set-cookie')!;

    return this.cookie ? true : false;
  };

  getCookie = () => {
    return this.cookie;
  };
}

export default new AuthenticationManager();
