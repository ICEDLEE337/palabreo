<h1 class="hero light txt">All Subjects</h1>

{#each subjects as subject}
    <article>
        <h2><a class="stroked" href={subject.url}>{subject.name}</a></h2>
    </article>
{/each}

<script lang="ts">
    export let subjects: string[] = [
        'spanish',
        'framing'
    ].map((name) => ({name, url: `/${name}/`}));
</script>

<style lang="scss">
    @import '@onivoro/browser-layout/index';
</style>
