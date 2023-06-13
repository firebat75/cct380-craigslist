<script>
	import Sidebar from "../../components/Sidebar.svelte";
	import Header from "../../components/Header.svelte";
	import Footer from "../../components/Footer.svelte";
	import "../styles.css";
</script>

<svelte:head>
	<title>Listings</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="app">
	<Header />

	<body>
		<Sidebar />

		<div class="sidebar-stop">
			<main>
				<p>
					showing 5 of 5 results for "concert" in events, gigs, jobs
				</p>
				<img
					class="list"
					src="https://raw.githubusercontent.com/firebat75/380test/main/listings2.png"
					alt="list"
				/>
			</main>
		</div>
	</body>

	<Footer />
</div>

<style>
	.list {
		width: 60rem;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	body {
		flex: 1;
	}

	.sidebar-stop {
		margin-left: 25rem;
		display: flex;
		justify-content: center;
	}

	main {
		display: flex;
		flex: 1;
		flex-direction: column;
		max-width: 64rem;
		align-items: center;
	}
</style>
