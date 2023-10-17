import { gameApi as api } from './';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGameplays: build.query<GetGameplaysResponse, unknown>({
      query: () => ({
        url: '/gameplays',
      }),
    }),
    getGameplaysByParam: build.query<GetGameplaysResponse, GetGameplaysByArg>({
      query: (queryArg) => ({
        url: `/gameplays/${queryArg.key}/${queryArg.value}`,
      }),
    }),
    postGameplay: build.mutation<GetGameplaysResponse, Game>({
      query: (queryArg) => ({ url: '/gameplays', method: 'POST', body: queryArg }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as gameApi };
export type GetGameplaysResponse = {
  data: Game[];
};
export type GameplaySearchArgKey = 'name' | 'type' | 'date';
export type GetGameplaysByArg = {
  key: GameplaySearchArgKey;
  value: string | undefined;
};

export type Game = {
  name: string;
  date: string;
  id: number;
  type: string;
  players: string[];
  win?: boolean;
  completed: boolean;
  winner?: string;
};

export const {
  useGetGameplaysQuery,
  useLazyGetGameplaysQuery,
  useGetGameplaysByParamQuery,
  useLazyGetGameplaysByParamQuery,
  usePostGameplayMutation,
} = injectedRtkApi;
