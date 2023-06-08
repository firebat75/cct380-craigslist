<script>
	import { page } from "$app/stores";
	import logo from "$lib/images/svelte-logo.svg";
	import github from "$lib/images/github.svg";
</script>

<header>
	<div class="title">
		<a href="/">☮️craigslist</a>
		<a class="sup" href="/">ca</a>
	</div>

	<nav>
		<ul>
			<li>
				<a href="/">home</a>
			</li>
			<li>
				<a href="">about</a>
			</li>
			<li>
				<a href="">forum</a>
			</li>
		</ul>
	</nav>
	<div class="na">
		<a href="">+ new post</a>
		<a href="">account</a>
	</div>
</header>

<style>
	.title {
		display: inline-flex;
	}

	.title a {
		font-size: 2rem;
		font-family: "Times New Roman", Times, serif;
	}

	.title .sup {
		margin: 3px;
		font-size: 1rem;
	}

	header {
		background-color: #eee;
		display: flex;
		justify-content: space-between;
		border: solid 1px #ccc;
		align-items: center;
		padding: 0.5rem 1rem 0.5rem 1rem;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		margin: 0 0.5rem 0 0.5rem;
		background-color: #fff;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		font-size: 1.25rem;
		font-weight: bold;
		letter-spacing: 0.1em;
	}

	.na a {
		background-color: #fff;
		padding: 3px;
		margin: 3px;
	}
</style>
