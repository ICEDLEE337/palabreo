<article>
    <h1>Welcome to Class</h1>
    {#each subjects as subject}
        <a href={subject}>{subject}</a>
    {/each}

</article>

<script lang="ts">
    export let subjects: string[] = [
    '/spanish/'
    ];
</script>
