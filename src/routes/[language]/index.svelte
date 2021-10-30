<script lang="ts">
    import {page} from '$app/stores';
    let words = [
    'chocolate',
    'leche',
    'silla',
    'helado',
    'tortilla',
    'hermoso',
    'bebe',
    'elefante',
    'desierto',
    'tambor',
    'bigote',
    'galleta',
    'manzana',
    'gracias',
    ];
</script>


{#each words as word }
    <a href={'/' + $page.params.language + '/' + word}>{word}</a><br/>
{/each}
