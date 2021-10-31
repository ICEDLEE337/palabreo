<script lang="ts">
    import {page} from '$app/stores';

</script>

<style lang="scss">
    @import '@onivoro/browser-layout/index';
</style>

<div class="pancake-stack txt">
    {#each words as word }
        <a class="pancake stroked" href={'/' + $page.params.language + '/' + word}>
            {word}
        </a>
    {/each}
</div>