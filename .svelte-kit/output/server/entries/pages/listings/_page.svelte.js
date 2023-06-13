import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { S as Sidebar } from "../../../chunks/Sidebar.js";
import { H as Header, F as Footer } from "../../../chunks/styles.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".list.svelte-9iz4yl{width:60rem}.app.svelte-9iz4yl{display:flex;flex-direction:column;min-height:100vh}body.svelte-9iz4yl{flex:1}.sidebar-stop.svelte-9iz4yl{margin-left:25rem;display:flex;justify-content:center}main.svelte-9iz4yl{display:flex;flex:1;flex-direction:column;max-width:64rem;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-2ekjg5_START -->${$$result.title = `<title>Listings</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-2ekjg5_END -->`, ""}

<div class="app svelte-9iz4yl">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<body class="svelte-9iz4yl">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}

		<div class="sidebar-stop svelte-9iz4yl"><main class="svelte-9iz4yl"><p>showing 2 of 2 results for &quot;concert&quot; in events</p>
				<img class="list svelte-9iz4yl" src="https://raw.githubusercontent.com/firebat75/380test/main/concert.png" alt="list"></main></div></body>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
