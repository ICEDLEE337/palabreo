<script lang="ts">
    import { page } from '$app/stores';
    import { langStore } from '$lib/features/speech/lang.store';
</script>

<style lang="scss">
@import '@onivoro/browser-layout/index';
</style>

<div class="hero light blackice">
    <div>
        <h1>Languages</h1>
    </div>
</div>

<div class="pancake-stack">
    {#each $langStore as lang }
        <a class="pancake stroked" href={'/lang/' + lang}>
           <h2>{lang}</h2>
        </a>
    {/each}
</div>