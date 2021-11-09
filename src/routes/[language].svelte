<script lang="ts">    
    import { page } from '$app/stores';
    import { supportedWords } from '$lib/constants/supported-words';
</script>

<style lang="scss">
@import '@onivoro/browser-layout/background';
@import '@onivoro/browser-layout/button';
@import '@onivoro/browser-layout/hero';
@import '@onivoro/browser-layout/padding';
</style>

<div class="hero light blackice" style="background: url(https://www.worldometers.info/img/flags/{$page.params.language}-flag.gif)">
    <div>        
        <div class="pancake-stack">
            {#each supportedWords[$page.params.language] as word }        
            <article class="card hero pad-3">
                <h1>{word.text}</h1>
            </article>
            {/each}
        </div>
    </div>
</div>