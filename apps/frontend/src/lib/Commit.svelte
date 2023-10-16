<!-- this component requires the following props: 
- Author = The person who pushed the commit
- Message = The message of the commit
- Date = The date in which the commit was made
- Link = The link to the commit page on github -->

<!-- this component builds the layout for a commit card, and it shows the author, message, date and also provides a link of the commit -->

<script lang="ts">
  import { type Commit } from "../types/Commit";
  export let commit: Commit;
</script>

<div class="bg-inherit rounded-lg p-5 shadow-2xl flex justify-between items-center mb-10">
  <div>
    <a href={commit.html_url} target="_blank" rel="noopener noreferrer">
      <h2 class="font-semibold text-sm overflow-hidden text-ellipsis whitespace-nowrap">{commit.commit.message}</h2>
    </a>

    <p class="font-medium text-xs">{commit.commit.author.name}</p>
  </div>
  <p class="font-medium text-sm">{new Date(commit.commit.committer.date).toLocaleDateString("en-US")}</p>
</div>
