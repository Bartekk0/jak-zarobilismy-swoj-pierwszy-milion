<script>
    export let title = "My Header";
    export let menuItems = ["Home", "PhaserTesting"];
</script>

<header>
    <h1>{title}</h1>
    <nav>
        <ul>
            {#each menuItems as item}
                <li><a href="#/{item != 'Home' ? item : ''}">{item}</a></li>
            {/each}
        </ul>
    </nav>
</header>

<style>
    header {
        background-color: #333;
        color: white;
        padding: 1rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
    }
    nav li {
        margin: 0 1rem;
    }
    nav a {
        color: white;
        text-decoration: none;
    }
</style>
