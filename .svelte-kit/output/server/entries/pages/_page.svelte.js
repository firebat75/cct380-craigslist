import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { H as Header, F as Footer } from "../../chunks/styles.js";
import { S as Sidebar } from "../../chunks/Sidebar.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".list.svelte-j65m3r{width:40rem}.app.svelte-j65m3r{display:flex;flex-direction:column;min-height:100vh}body.svelte-j65m3r{flex:1}.sidebar-stop.svelte-j65m3r{margin-left:25rem;display:flex;justify-content:center}main.svelte-j65m3r{display:flex;flex:1;flex-direction:column;max-width:64rem;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-t32ptj_END -->`, ""}

<div class="app svelte-j65m3r">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<body class="svelte-j65m3r">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}

		<div class="sidebar-stop svelte-j65m3r"><main class="svelte-j65m3r"><img class="list svelte-j65m3r" src="https://raw.githubusercontent.com/firebat75/380test/main/list.png" alt="list"></main></div></body>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
