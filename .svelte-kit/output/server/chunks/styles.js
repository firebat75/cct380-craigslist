import { c as create_ssr_component } from "./index2.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.title.svelte-18ckyqp.svelte-18ckyqp{display:inline-flex}.title.svelte-18ckyqp a.svelte-18ckyqp{font-size:2rem;font-family:"Times New Roman", Times, serif}.title.svelte-18ckyqp .sup.svelte-18ckyqp{margin:3px;font-size:1rem}header.svelte-18ckyqp.svelte-18ckyqp{background-color:#eee;display:flex;justify-content:space-between;border:solid 1px #ccc;align-items:center;padding:0.5rem 1rem 0.5rem 1rem}nav.svelte-18ckyqp.svelte-18ckyqp{display:flex;justify-content:center}ul.svelte-18ckyqp.svelte-18ckyqp{position:relative;padding:0;margin:0;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-18ckyqp.svelte-18ckyqp{position:relative;height:100%;margin:0 0.5rem 0 0.5rem;background-color:#fff}nav.svelte-18ckyqp a.svelte-18ckyqp{display:flex;height:100%;align-items:center;padding:0 0.5rem;font-size:1.25rem;font-weight:bold;letter-spacing:0.1em}.na.svelte-18ckyqp a.svelte-18ckyqp{background-color:#fff;padding:3px;margin:3px}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="svelte-18ckyqp"><div class="title svelte-18ckyqp"><a href="/" class="svelte-18ckyqp">☮️craigslist</a>
		<a class="sup svelte-18ckyqp" href="/">ca</a></div>

	<nav class="svelte-18ckyqp"><ul class="svelte-18ckyqp"><li class="svelte-18ckyqp"><a href="/" class="svelte-18ckyqp">home</a></li>
			<li class="svelte-18ckyqp"><a href="https://www.craigslist.org/about/" class="svelte-18ckyqp">about</a></li>
			<li class="svelte-18ckyqp"><a href="/forum" class="svelte-18ckyqp">forum</a></li></ul></nav>
	<div class="na svelte-18ckyqp"><a href="" class="svelte-18ckyqp">+ new post</a>
		<a href="" class="svelte-18ckyqp">account</a></div>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-8mgwfk.svelte-8mgwfk{background-color:#eee;border:solid 1px #ccc;display:flex;flex-direction:column;justify-content:center;align-items:center}footer.svelte-8mgwfk ul.svelte-8mgwfk{margin:0.5rem 0 0.5rem 0}footer.svelte-8mgwfk ul li.svelte-8mgwfk{display:inline;margin:0 0.5rem 0 0.5rem}footer.svelte-8mgwfk ul li p.svelte-8mgwfk{display:inline}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-8mgwfk"><ul class="svelte-8mgwfk"><li class="svelte-8mgwfk"><p class="svelte-8mgwfk">© 2023 craigslist</p></li>
        <li class="svelte-8mgwfk"><a href="https://www.craigslist.org/about">about</a></li>
        <li class="svelte-8mgwfk"><a href="https://www.craigslist.org/about/help">help</a></li>
        <li class="svelte-8mgwfk"><a href="https://www.craigslist.org/about/privacy.policy">privacy</a></li>
        <li class="svelte-8mgwfk"><a href="https://www.craigslist.org/about/terms.of.use">terms</a></li>
        <li class="svelte-8mgwfk"><a href="https://forums.craigslist.org/?forumID=8">feedback</a></li></ul>
</footer>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const Sidebar_svelte_svelte_type_style_lang = "";
const styles = "";
export {
  Footer as F,
  Header as H
};
