interface INavigationRoute {
  params: Record<string, any>;
}

interface INavigationState {
  index: number;
  routes: INavigationRoute[];
}

export interface INavigation {
  navigate: (path: string, params?: any) => unknown;
  getState: () => INavigationState;
}
