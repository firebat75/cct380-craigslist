import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { H as Header, F as Footer } from "../../../chunks/styles.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-1rhchij{padding:0.5rem;margin-left:1rem;background-color:#fff;width:fit-content}.list.svelte-1rhchij{justify-content:center;width:60rem}.app.svelte-1rhchij{background-color:#fff;display:flex;flex-direction:column;min-height:100vh}body.svelte-1rhchij{flex:1}main.svelte-1rhchij{display:flex;flex:1;flex-direction:column;max-width:64rem;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-bosc8k_START -->${$$result.title = `<title>Forum-Supernatural</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-bosc8k_END -->`, ""}

<div class="app svelte-1rhchij">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<body class="svelte-1rhchij"><h2 class="svelte-1rhchij">disussion forum - supernatural</h2>

		<main class="svelte-1rhchij"><img class="list svelte-1rhchij" src="https://raw.githubusercontent.com/firebat75/380test/main/thread.png" alt="forum">
			<img class="list svelte-1rhchij" src="https://github.com/firebat75/380test/blob/main/thread-footer.png?raw=true" alt="forum"></main></body>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
