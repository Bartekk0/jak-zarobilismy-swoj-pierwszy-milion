<script lang="ts">
</script>

<main class="flex justify-center items-center min-h-screen bg-slate-500">
  <form action="post" class="flex flex-col gap-4 bg-slate-800 p-5 rounded-xl">
    <label for="">Email</label>
    <input type="email" />
    <label for="">Name</label>
    <input type="text" />
    <label for="">Password</label>
    <input type="password" />
    <label for="">Repeat password</label>
    <input type="password" />

    <button type="submit">Register</button>
    <p class="text-center text-white">
      Already have an account? <a href="/login" class="text-blue-500">Login</a>
    </p>
  </form>
</main>

<style lang="postcss">
</style>
