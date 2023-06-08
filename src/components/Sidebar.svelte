<script>
    import Modal from "./Modal.svelte";
    import { events, jobs, gigs } from "../lib/stores";

    function handleMessage(event) {
        console.log("HELLO");
    }

    let showModal = false;

    let selection = "category";

    $: {
        console.log(selection);
    }

    function update() {
        if (selection == "events") {
            events.update((n) => true);
        } else if (selection == "jobs") {
            jobs.update((n) => true);
        } else if (selection == "gigs") {
            gigs.update((n) => true);
        }
    }

    function removeEvents() {
        console.log("clicked");
        events.update((n) => false);
        console.log(events);
    }

    function removeJobs() {
        console.log("clicked");
        jobs.update((n) => false);
    }

    function removeGigs() {
        console.log("clicked");
        gigs.update((n) => false);
    }
</script>

<sidebar>
    <div class="selection">
        <select name="lang" class="change-language" id="chlang">
            <option selected="" value="?lang=en&amp;cc=us&amp;setlang=1"
                >english</option
            >
            <option value="?lang=da&amp;setlang=1">dansk</option><option
                value="?lang=de&amp;setlang=1">deutsch</option
            ><option value="?lang=es&amp;cc=mx&amp;setlang=1">español</option
            ><option value="?lang=fr&amp;cc=ca&amp;setlang=1">français</option
            ><option value="?lang=it&amp;setlang=1">italiano</option><option
                value="?lang=pt&amp;setlang=1">português</option
            ><option value="?lang=fi&amp;setlang=1">suomi</option><option
                value="?lang=sv&amp;setlang=1">svenska</option
            ><option value="?lang=vi&amp;setlang=1">tiếng việt</option><option
                value="?lang=tr&amp;setlang=1">türkçe</option
            ><option value="?lang=ru&amp;setlang=1">русский</option><option
                value="?lang=zh&amp;setlang=1">中文</option
            ><option value="?lang=ja&amp;setlang=1">日本語</option><option
                value="?lang=ko&amp;setlang=1">한국말</option
            >
        </select>

        <button class="change-city"
            ><a href="https://www.craigslist.org/about/sites">change region</a
            ></button
        >
    </div>

    <hr />

    <h1>search toronto listings</h1>

    <div>
        <input
            type="text"
            id="search-bar"
            name="name"
            placeholder="search..."
            size="10"
        />
    </div>

    <ul class="minor-region">
        <p>search areas:</p>
        <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            checked="checked"
        />
        <label for="vehicle1">toronto</label><br />
        <input
            type="checkbox"
            id="vehicle2"
            name="vehicle2"
            value="Car"
            checked="checked"
        />
        <label for="vehicle2">durhman</label><br />
        <input
            type="checkbox"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
            checked="checked"
        />
        <label for="vehicle3">york</label><br />
        <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            checked="checked"
        />
        <label for="vehicle1">brampton</label><br />
        <input
            type="checkbox"
            id="vehicle2"
            name="vehicle2"
            value="Car"
            checked="checked"
        />
        <label for="vehicle2">mississauga</label><br />
        <input
            type="checkbox"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
            checked="checked"
        />
        <label for="vehicle3">oakville</label><br />
    </ul>

    <div class="btns">
        <button class="search-btn" on:click={() => (showModal = true)}
            ><a href="">+ add category</a></button
        >
        <button class="search-btn add-category"
            ><a href="\listings">🔎 search</a></button
        >
    </div>
    <hr />
    <p>categories</p>
    {#if !events && !jobs && !gigs}
        <p class="no-cats">no categories selected (search all listings)</p>
    {:else}
        {#if $events}<div class="cat-info">
                <div class="lbs">
                    <p>events</p>
                    <p on:click={removeEvents}>x</p>
                </div>
                <div class="image">
                    <img src="src\lib\events.png" alt="info" />
                </div>
            </div>
        {/if}
        {#if $jobs}<div class="cat-info">
                <div class="lbs">
                    <p>jobs</p>
                    <p on:click={removeJobs}>x</p>
                </div>
                <div class="image">
                    <img src="src\lib\jobs.png" alt="info" />
                </div>
            </div>
        {/if}
        {#if $gigs}<div class="cat-info">
                <div class="lbs">
                    <p>gigs</p>
                    <p on:click={removeGigs}>x</p>
                </div>
                <div class="image">
                    <img src="src\lib\gigs.png" alt="info" />
                </div>
            </div>
        {/if}
    {/if}
</sidebar>

<Modal bind:showModal on:message={update}>
    <h2 slot="header">select category</h2>

    <select
        name="select-category"
        class="select-category"
        id="chlang"
        bind:value={selection}
    >
        <option selected="category" value="category">category</option>
        <option value="events">events</option>
        <option value="community">community</option>
        <option value="services">services</option><option value="placeholder"
            >housing</option
        ><option value="for sale">for sale</option><option value="jobs"
            >jobs</option
        ><option value="gigs">gigs</option><option value="resumes"
            >resumes</option
        >
    </select>

    <select name="lang" class="select-category" id="chlang">
        <option selected="" value="placeholder">sub-category</option>
        <option value="placeholder">there is 103 of these to implement</option>
    </select>
</Modal>

<style>
    .cat-info {
        border: solid black 1px;
        margin: 4px;
        background-color: #fff;
    }
    .lbs {
        display: flex;
    }
    .image {
        display: flex;
    }

    .cat-info p {
        margin-left: auto;
        margin-right: auto;
    }

    .cat-info img {
        position: relative;
        margin-left: auto;
        margin-right: auto;
        max-width: 10rem;
    }
    sidebar {
        position: absolute;
        background-color: #eee;
        width: 25rem;
        padding: 1rem;
        align-items: center;
    }

    button {
        background-color: #fff;
        border: solid 1px black;
    }

    .selection {
        display: flex;
    }

    .change-city {
        margin-left: auto;
        margin-right: auto;
        width: 8rem;
        height: 2rem;
    }

    .change-language {
        margin-left: auto;
        margin-right: auto;
        width: 8rem;
        height: 2rem;
    }

    .minor-region {
        background-color: #fff;
        padding-left: 0;
        padding: 5px;
    }

    .minor-region p {
        margin: 0;
    }

    #search-bar {
        width: 24.5rem;
        height: 2rem;
        padding-left: 5px;
    }

    .search-btn {
        margin-left: auto;
        margin-right: auto;
        width: 8rem;
        height: 2rem;
    }

    .btns {
        display: flex;
        align-items: center;
    }

    .no-cats {
        display: flex;
        justify-content: center;
    }
</style>
