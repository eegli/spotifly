type StringAction =
  | 'setClientId'
  | 'setClientSecret'
  | 'setRefreshToken'
  | 'setError';

type GenericTokenAction<T, P> = {
  type: T;
  payload: P;
};

type TokenAction =
  | GenericTokenAction<StringAction, string>
  | GenericTokenAction<'setScopes', string[] | string>;

type TokenState = {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  scopes: string[];
  error: string;
};
export function tokenReducer(state: TokenState, action: TokenAction) {
  const { type, payload } = action;
  switch (type) {
    case 'setClientId':
      return { ...state, clientId: payload };
    case 'setClientSecret':
      return { ...state, clientSecret: payload };
    case 'setRefreshToken':
      return { ...state, refreshToken: payload };
    case 'setScopes':
      const scopes = typeof payload === 'string' ? [payload] : payload;
      return { ...state, scopes };
    case 'setError':
      return { ...state, error: payload };
    default:
      return state;
  }
}
