import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { H as Header, F as Footer } from "../../../chunks/styles.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-126uqhi{padding:0.5rem;margin-left:1rem;background-color:#fff;width:fit-content}.list.svelte-126uqhi{justify-content:center;width:60rem}.app.svelte-126uqhi{background-color:#eee;display:flex;flex-direction:column;min-height:100vh}body.svelte-126uqhi{flex:1}main.svelte-126uqhi{display:flex;flex:1;flex-direction:column;max-width:64rem;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-rf6ouj_START -->${$$result.title = `<title>forum</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-rf6ouj_END -->`, ""}

<div class="app svelte-126uqhi">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<body class="svelte-126uqhi"><h2 class="svelte-126uqhi">disussion forum</h2>

		<main class="svelte-126uqhi"><img class="list svelte-126uqhi" src="https://github.com/firebat75/380test/blob/main/forum.png?raw=true" alt="forum"></main></body>
	<a href="f1">dummy link</a>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
