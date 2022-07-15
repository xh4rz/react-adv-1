import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

// type JSXComponent = () => JSX.Element;

interface Route {
	path: string;
	Component: () => JSX.Element;
	name: string;
	children?: Route[];
}

export const routes: Route[] = [
	{
		path: '/lazy1',
		Component: LazyPage1,
		name: 'LazyPage1'
	},
	{
		path: '/lazy1',
		Component: LazyPage2,
		name: 'LazyPage2'
	},
	{
		path: '/lazy3',
		Component: LazyPage3,
		name: 'LazyPage3'
	}
];
