<script lang="ts">
  import { onMount } from "svelte";
  import CommitBlock from "./lib/Commit.svelte";
  import { type Commit } from "./types/Commit";

  let data: Commit[] = [];
  let error: any;

  onMount(async () => {
    try {
      const response = await fetch("/api/commits");
      if (!response.ok) {
        throw new Error("The request failed");
      }
      data = await response.json();
    } catch (err) {
      error = err;
    }
  });
</script>

<main>
  <div class="container mx-auto">
    <div class="text-center mt-10">
      <h1 class="font-semibold text-[30px] lg:text-lg">Git repository commits app</h1>
      <p class="mt-5 text-sm lg:text-lg font-medium">This app shows all commits made to <a target="_blank" rel="noopener noreferrer" class="text-black underline hover:text-black" href="https://github.com/wpulido/fulltimeforce-test-two">this</a> repository.</p>
    </div>

    <div id="list" class="flex flex-col gap-4 mt-10 px-3 lg:px-0">
      <!-- We add a conditional rendering to evaluate if there's data in the commits state variable we can display -->

      <!-- // In case there is, we loop the data array and after that, we display the information by using the Commit component we have created, passing the data we need to display, that's coming from the response as props for it -->

      <!-- {/* We use a React.Fragment add a key to every loop instance, so the app doesn't have any performance issues */} -->
      {#if data.length > 0}
        {#each data as commit}
          <CommitBlock {commit} />
        {/each}
      {:else if error}
        <p>{error.message}</p>
      {/if}
      <!-- {/* in case we're not receiving any data, we display a fallback message, to let the user know we don't have any data to show. */} -->
      <!-- <p className="text-semibold text-md text-black text-center">No commits to show.</p> -->
    </div>
  </div>
</main>

<style>
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */
</style>
