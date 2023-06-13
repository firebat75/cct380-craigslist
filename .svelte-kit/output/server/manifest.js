export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon2.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.e6920b99.js","app":"_app/immutable/entry/app.41bd85c6.js","imports":["_app/immutable/entry/start.e6920b99.js","_app/immutable/chunks/index.035b212a.js","_app/immutable/chunks/singletons.44323324.js","_app/immutable/chunks/index.62d3464f.js","_app/immutable/chunks/paths.d65497e2.js","_app/immutable/entry/app.41bd85c6.js","_app/immutable/chunks/index.035b212a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
