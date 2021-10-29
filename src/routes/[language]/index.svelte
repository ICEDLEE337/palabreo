<script lang="ts">
    import {page} from '$app/stores';
    let words = ['chocolate', 'leche', 'silla', 'helado', 'tortilla', 'hermoso'];
</script>


{#each words as word }
    <a href={'/' + $page.params.language + '/' + word}>{word}</a><br/>
{/each}
