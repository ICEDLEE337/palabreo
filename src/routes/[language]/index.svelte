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

<style lang="scss">
    @import '@onivoro/browser-layout/card';
    @import '@onivoro/browser-layout/padding';
    @import '@onivoro/browser-layout/pancake';

    .card {
        border: solid 1px rgba(0,0,0,0.3);
        display: block;
    }
</style>


<div class="pancake-stack">
    {#each words as word }
        <div>
            <a class="card pad-3 pancake" href={'/' + $page.params.language + '/' + word}>
                {word}
            </a>
        </div>
    {/each}
</div>