export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon2.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.1ad3ef2c.js","app":"_app/immutable/entry/app.689e1d54.js","imports":["_app/immutable/entry/start.1ad3ef2c.js","_app/immutable/chunks/index.035b212a.js","_app/immutable/chunks/singletons.e7416bab.js","_app/immutable/chunks/index.62d3464f.js","_app/immutable/chunks/paths.7bab3e97.js","_app/immutable/entry/app.689e1d54.js","_app/immutable/chunks/index.035b212a.js"],"stylesheets":[],"fonts":[]},
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
