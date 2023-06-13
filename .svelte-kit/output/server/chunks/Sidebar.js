import { c as create_ssr_component, b as createEventDispatcher, d as add_attribute, a as subscribe, v as validate_component } from "./index2.js";
import "./styles.js";
import { w as writable } from "./index.js";
const css$1 = {
  code: ".btns.svelte-gnomlo.svelte-gnomlo{display:flex}.btns.svelte-gnomlo button.svelte-gnomlo{margin-left:auto;margin-right:auto}dialog.svelte-gnomlo.svelte-gnomlo{max-width:32em;border-radius:0.2em;border:none;padding:0}dialog.svelte-gnomlo.svelte-gnomlo::backdrop{background:rgba(0, 0, 0, 0.3)}dialog.svelte-gnomlo>div.svelte-gnomlo{padding:1em}dialog[open].svelte-gnomlo.svelte-gnomlo{animation:svelte-gnomlo-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-gnomlo-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-gnomlo.svelte-gnomlo::backdrop{animation:svelte-gnomlo-fade 0.2s ease-out}@keyframes svelte-gnomlo-fade{from{opacity:0}to{opacity:1}}button.svelte-gnomlo.svelte-gnomlo{display:block}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  let dialog;
  createEventDispatcher();
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  $$result.css.add(css$1);
  return `
<dialog class="svelte-gnomlo"${add_attribute("this", dialog, 0)}><div class="svelte-gnomlo">${slots.header ? slots.header({}) : ``}
        <hr>
        ${slots.default ? slots.default({}) : ``}
        <hr>
        
        <div class="btns svelte-gnomlo"><button autofocus class="svelte-gnomlo">close</button>
            <button class="svelte-gnomlo">add category</button></div></div>
</dialog>`;
});
let events = writable(false);
let jobs = writable(false);
let gigs = writable(false);
const css = {
  code: ".cat-info.svelte-1p6xppw.svelte-1p6xppw{border:solid black 1px;margin:4px;background-color:#fff}.lbs.svelte-1p6xppw.svelte-1p6xppw{display:flex}.image.svelte-1p6xppw.svelte-1p6xppw{display:flex}.cat-info.svelte-1p6xppw p.svelte-1p6xppw{margin-left:auto;margin-right:auto}.cat-info.svelte-1p6xppw img.svelte-1p6xppw{position:relative;margin-left:auto;margin-right:auto;max-width:10rem}sidebar.svelte-1p6xppw.svelte-1p6xppw{position:absolute;background-color:#eee;width:25rem;padding:1rem;align-items:center}button.svelte-1p6xppw.svelte-1p6xppw{background-color:#fff;border:solid 1px black}.selection.svelte-1p6xppw.svelte-1p6xppw{display:flex}.change-city.svelte-1p6xppw.svelte-1p6xppw{margin-left:auto;margin-right:auto;width:8rem;height:2rem}.change-language.svelte-1p6xppw.svelte-1p6xppw{margin-left:auto;margin-right:auto;width:8rem;height:2rem}.minor-region.svelte-1p6xppw.svelte-1p6xppw{background-color:#fff;padding-left:0;padding:5px}.minor-region.svelte-1p6xppw p.svelte-1p6xppw{margin:0}#search-bar.svelte-1p6xppw.svelte-1p6xppw{width:24.5rem;height:2rem;padding-left:5px}.search-btn.svelte-1p6xppw.svelte-1p6xppw{margin-left:auto;margin-right:auto;width:8rem;height:2rem}.btns.svelte-1p6xppw.svelte-1p6xppw{display:flex;align-items:center}.no-cats.svelte-1p6xppw.svelte-1p6xppw{display:flex;justify-content:center}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $events, $$unsubscribe_events;
  let $jobs, $$unsubscribe_jobs;
  let $gigs, $$unsubscribe_gigs;
  $$unsubscribe_events = subscribe(events, (value) => $events = value);
  $$unsubscribe_jobs = subscribe(jobs, (value) => $jobs = value);
  $$unsubscribe_gigs = subscribe(gigs, (value) => $gigs = value);
  let showModal = false;
  let selection = "category";
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        console.log(selection);
      }
    }
    $$rendered = `<sidebar class="svelte-1p6xppw"><div class="selection svelte-1p6xppw"><select name="lang" class="change-language svelte-1p6xppw" id="chlang"><option selected="" value="?lang=en&cc=us&setlang=1">english</option><option value="?lang=da&setlang=1">dansk</option><option value="?lang=de&setlang=1">deutsch</option><option value="?lang=es&cc=mx&setlang=1">español</option><option value="?lang=fr&cc=ca&setlang=1">français</option><option value="?lang=it&setlang=1">italiano</option><option value="?lang=pt&setlang=1">português</option><option value="?lang=fi&setlang=1">suomi</option><option value="?lang=sv&setlang=1">svenska</option><option value="?lang=vi&setlang=1">tiếng việt</option><option value="?lang=tr&setlang=1">türkçe</option><option value="?lang=ru&setlang=1">русский</option><option value="?lang=zh&setlang=1">中文</option><option value="?lang=ja&setlang=1">日本語</option><option value="?lang=ko&setlang=1">한국말</option></select>

        <button class="change-city svelte-1p6xppw"><a href="https://www.craigslist.org/about/sites">change region</a></button></div>

    <hr>

    <h1>search toronto listings</h1>

    <div><input type="text" id="search-bar" name="name" placeholder="search..." size="10" class="svelte-1p6xppw"></div>

    <ul class="minor-region svelte-1p6xppw"><p class="svelte-1p6xppw">search areas:</p>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked="checked">
        <label for="vehicle1">toronto</label><br>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" checked="checked">
        <label for="vehicle2">durhman</label><br>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" checked="checked">
        <label for="vehicle3">york</label><br>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked="checked">
        <label for="vehicle1">brampton</label><br>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" checked="checked">
        <label for="vehicle2">mississauga</label><br>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" checked="checked">
        <label for="vehicle3">oakville</label><br></ul>

    <div class="btns svelte-1p6xppw"><button class="search-btn svelte-1p6xppw"><a href="">+ add category</a></button>
        <button class="search-btn add-category svelte-1p6xppw"><a href="\\listings">🔎 search</a></button></div>
    <hr>
    <p>categories</p>
    ${!events && !jobs && !gigs ? `<p class="no-cats svelte-1p6xppw">no categories selected (search all listings)</p>` : `${$events ? `<div class="cat-info svelte-1p6xppw"><div class="lbs svelte-1p6xppw"><p class="svelte-1p6xppw">events</p>
                    <p class="svelte-1p6xppw">x</p></div>
                <div class="image svelte-1p6xppw"><img src="src\\lib\\events.png" alt="info" class="svelte-1p6xppw"></div></div>` : ``}
        ${$jobs ? `<div class="cat-info svelte-1p6xppw"><div class="lbs svelte-1p6xppw"><p class="svelte-1p6xppw">jobs</p>
                    <p class="svelte-1p6xppw">x</p></div>
                <div class="image svelte-1p6xppw"><img src="src\\lib\\jobs.png" alt="info" class="svelte-1p6xppw"></div></div>` : ``}
        ${$gigs ? `<div class="cat-info svelte-1p6xppw"><div class="lbs svelte-1p6xppw"><p class="svelte-1p6xppw">gigs</p>
                    <p class="svelte-1p6xppw">x</p></div>
                <div class="image svelte-1p6xppw"><img src="src\\lib\\gigs.png" alt="info" class="svelte-1p6xppw"></div></div>` : ``}`}</sidebar>

${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h2 slot="header">select category</h2>`;
        },
        default: () => {
          return `<select name="select-category" class="select-category" id="chlang"><option selected="category" value="category">category</option><option value="events">events</option><option value="community">community</option><option value="services">services</option><option value="placeholder">housing</option><option value="for sale">for sale</option><option value="jobs">jobs</option><option value="gigs">gigs</option><option value="resumes">resumes</option></select>

    <select name="lang" class="select-category" id="chlang"><option selected="" value="placeholder">sub-category</option><option value="placeholder">there is 103 of these to implement</option></select>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_events();
  $$unsubscribe_jobs();
  $$unsubscribe_gigs();
  return $$rendered;
});
export {
  Sidebar as S
};
