<script lang="ts">
</script>

<main class="flex justify-center items-center min-h-screen bg-slate-500">
  <form action="post" class="flex flex-col gap-4 bg-slate-800 p-5 rounded-xl">
    <label for="">Email</label>
    <input type="email" />
    <label for="">Password</label>
    <input type="password" />

    <button type="submit">Login</button>
    <p class="text-center text-white">
      Don't have an account? <a href="/register" class="text-blue-500"
        >Register</a>
    </p>
  </form>
</main>

<style lang="postcss">
</style>
