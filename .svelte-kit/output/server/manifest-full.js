export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon2.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.1ad3ef2c.js","app":"_app/immutable/entry/app.689e1d54.js","imports":["_app/immutable/entry/start.1ad3ef2c.js","_app/immutable/chunks/index.035b212a.js","_app/immutable/chunks/singletons.e7416bab.js","_app/immutable/chunks/index.62d3464f.js","_app/immutable/chunks/paths.7bab3e97.js","_app/immutable/entry/app.689e1d54.js","_app/immutable/chunks/index.035b212a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/f1",
				pattern: /^\/f1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/forum",
				pattern: /^\/forum\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/listings2",
				pattern: /^\/listings2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/listings",
				pattern: /^\/listings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
