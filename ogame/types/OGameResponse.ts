export interface SessionData {
  hasUnmigratedGameAccounts: boolean;
  isGameAccountCreated: boolean;
  isGameAccountMigrated: boolean;
  isPlatformLogin: boolean;
  platformUserId: string;
  token: string;
}

export interface AccountData {
  bannedReason: null;
  bannedUntil: null;
  blocked: boolean;
  details: { type: string; title: string; value: string }[];
  gameAccountId: number;
  id: number;
  lastLogin: string;
  lastPlayed: string;
  name: string;
  server: { language: string; number: number };
  sitting: { shared: boolean; endTime: null; cooldownTime: null };
  trading: { trading: boolean; cooldownTime: null };
}

export interface GameData {
  url: string;
}

// export interface AccountData {
//   email: string;
//   gameforgeAccountId: string;
//   id: number;
//   mhash: string;
//   migrationRequired: boolean;
//   portable: boolean;
//   unlinkedAccounts: boolean;
//   unportableName: string;
//   userId: number;
//   validated: boolean;
// }
