export enum GuestRouteKey {
	Welcome = 'welcome',
	SignUp = 'signUp',
	SignIn = 'signIn',
}
export enum UserRouteKey {
	Profile = 'profile',
}

export type RouteKey = GuestRouteKey | UserRouteKey
