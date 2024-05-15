<!--
Color theme
Dark Background Tones:
$base03:    #002b36;
-> $base02:    #073642;

Content Tones:
-> $base01:    #586e75;
$base00:    #657b83;
$base0:     #839496;
$base1:     #93a1a1;

Background Tones:
$base2:     #eee8d5;
-> $base3:     #fdf6e3;

Accent Colors:
$yellow:    #b58900;
$orange:    #cb4b16;
$red:       #dc322f;
$magenta:   #d33682;
$violet:    #6c71c4;
$blue:      #268bd2;
$cyan:      #2aa198;
$green:     #859900;
-->

<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import AddBar from "./components/AddBar.svelte";
	import ClienteleList from "./components/ClienteleList.svelte";
	import Login from "./components/Login.svelte";

	// When we add a customer we want to tell ClienteleList to call getCustomers()
	let ClienteleListRef;
	function updateClienteleList() {
		ClienteleListRef.getCustomers();
	}

	// Login Script
	let loggedIn = false;
	function handleLogin() {
		loggedIn = true;
	}

	//
</script>

<main>
	{#if loggedIn}
		<Header />
		<AddBar on:addedCustomer={updateClienteleList} />
		<ClienteleList bind:this={ClienteleListRef} />
		<Footer />
	{:else}
		<Login on:loginOk={handleLogin} />
	{/if}
</main>

<style>
	main {
		width: 70%;
		height: 100%;
		margin: 0 auto;
	}
</style>
