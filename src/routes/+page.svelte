<script>
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
	import Sidebar from "../components/Sidebar.svelte";
	import "./styles.css";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="app">
	<Header />

	<body>
		<Sidebar />

		<div class="sidebar-stop">
			<main>
				<img
					class="list"
					src="https://raw.githubusercontent.com/firebat75/380test/main/list.png"
					alt="list"
				/>
			</main>
		</div>
	</body>

	<Footer />
</div>

<style>
	.list {
		width: 40rem;
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
