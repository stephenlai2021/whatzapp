<script>
  import { onAuthStateChanged } from "@firebase/auth";
  import { auth } from "$lib/functions/firebase";
  import { goto } from "$app/navigation";
  import LeftSide from "$lib/leftside.svelte";
  import { onMount } from 'svelte'

  let showPage = false;
  
  onMount(async () => {  
    const unsub = await onAuthStateChanged(auth, (user) => {
      if (!user) {
        goto("/");
      } 
      else {
        console.log('loggedin user: ', user)
        showPage = true;
      }
      return () => unsub();
    });
  });
</script>

{#if showPage}
  <div class="container">
    <LeftSide />
    <slot />
  </div>
{:else}
  <img width="200" src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif" alt="spinner gif" />
{/if}

<style>
  .container {
    position: relative;
    max-width: 1396px;
    margin: auto;
    height: calc(100vh - 40px);
    background: #fff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.06);
    display: flex;
  }
  @media (max-width: 800px) {
    .container {
      height: 100vh;
    }
  }
</style>