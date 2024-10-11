<script lang="ts">
    // Modules / Packages / Libraries
    import Router from "svelte-spa-router";

    // Components
    import Header from "./components/Header.svelte";

    // Routes
    import Home from "./routes/Home.svelte";
    import NotFound from "./routes/NotFound.svelte";
    import PhaserTesting from "./routes/PhaserTesting.svelte";

    const routes = {
        "/": Home,
        "/phasertesting": PhaserTesting,
        "*": NotFound,
    };
</script>

<div class="body">
    <Header />
    <main>
        <Router {routes} />
    </main>
</div>

<style>
</style>
