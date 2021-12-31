<!-- <script context="module">

  import { onAuthStateChanged } from "@firebase/auth";
  import { auth } from "$lib/functions/firebase";
  import { goto } from "$app/navigation";
  import { browser } from "$app/env";

  export const prerender = true

  if (browser) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        goto("/chat");
      } else {
        goto("/");
      }
    });
  }
</script> -->

<script>
  import "../global.css";
  // import { onAuthStateChanged } from 'firebase/auth'
  // import { auth } from '$lib/functions/firebase'
  // import { onMount } from 'svelte'
  // import { goto } from '$app/navigation'

  // onMount(() => {
  //   onAuthStateChanged(auth, async user => {
  //     if (!user) await goto('/')
  //     if (user) await goto('/chat')
  //   })
  // })

</script>

<svelte:head>
  <script
    defer
    type="module"
    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script
    defer
    nomodule=""
    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</svelte:head>

<slot />
