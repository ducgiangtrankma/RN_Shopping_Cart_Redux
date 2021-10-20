export enum APP_SCREEN {
  HOME = 'HOME',
  CART = 'CART',
}
export type UnAuthenticationPramsList = {};
export type AuthenticationPramsList = {};
export type RootStackParamList = {
  [APP_SCREEN.HOME]: undefined;
  [APP_SCREEN.CART]: undefined;
} & Partial<UnAuthenticationPramsList> &
  Partial<AuthenticationPramsList>;
