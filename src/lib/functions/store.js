import { writable } from "svelte/store";
import { browser } from '$app/env'

// const selectedUser = writable({})
// const selectedUserMessages = writable([])

/* save selected user to localstorage */
const selectedUser = writable(browser && JSON.parse(localStorage.getItem("selected user")));
selectedUser.subscribe((val) => browser && localStorage.setItem("selected user", JSON.stringify(val)));

/* save selected user messages to localstorage */
const selectedUserMessages = writable(
  browser && JSON.parse(localStorage.getItem("selected user messages")) || []
);
selectedUserMessages.subscribe(
  (val) => browser && localStorage.setItem("selected user messages", JSON.stringify(val))
);

export { selectedUser, selectedUserMessages }