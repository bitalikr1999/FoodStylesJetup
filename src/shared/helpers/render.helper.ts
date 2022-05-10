export const optionalRender = (
	option: Boolean,
	component: JSX.Element,
	elseComponent: JSX.Element = null,
) => {
	return option ? component : elseComponent
}
