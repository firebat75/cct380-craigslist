<script>
	import Sidebar from "../../components/Sidebar.svelte";
	import Header from "../../components/Header.svelte";
	import Footer from "../../components/Footer.svelte";
	import "../styles.css";
</script>

<svelte:head>
	<title>Forum-Supernatural</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="app">
	<Header />

	<body>
		<h2>disussion forum - supernatural</h2>

		<main>
			<img
				class="list"
				src="https://raw.githubusercontent.com/firebat75/380test/main/thread.png"
				alt="forum"
			/>
			<img
				class="list"
				src="https://github.com/firebat75/380test/blob/main/thread-footer.png?raw=true"
				alt="forum"
			/>
		</main>
	</body>

	<Footer />
</div>

<style>
	h2 {
		padding: 0.5rem;
		margin-left: 1rem;
		background-color: #fff;
		width: fit-content;
	}
	.list {
		justify-content: center;
		width: 60rem;
	}
	.app {
		background-color: #fff;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	body {
		flex: 1;
	}

	main {
		display: flex;
		flex: 1;
		flex-direction: column;
		max-width: 64rem;
		align-items: center;
	}
</style>
