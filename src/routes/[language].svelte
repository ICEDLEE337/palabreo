<script lang="ts">    
    import { page } from '$app/stores';
    import { supportedWords } from '$lib/constants/supported-words';
    import { supportedLanguages, supportedLanguageMap } from '$lib/constants/supported-languages';
</script>

<style lang="scss">
@import '@onivoro/browser-layout/background';
@import '@onivoro/browser-layout/button';
@import '@onivoro/browser-layout/hero';
@import '@onivoro/browser-layout/padding';
.hero {
    height: 100%;
}
</style>

{#if $page.params.language}
<div class="hero" style="background: url({supportedLanguageMap[$page.params.language]?.flag})">
    <div class="bg-glass">        
        {#each supportedWords[$page.params.language] as word }        
            <div class="pancake-stack">
                <article class="card hero pad-3">
                    <h1>{word.text}</h1>
                </article>
            </div>
        {/each}

        {#if !supportedWords[$page.params.language]?.length}
            <div class="pancake-stack">
                <article class="card hero pad-3">
                    <h1>{supportedLanguageMap[$page.params.language]?.text} words coming soon!</h1>
                </article>
            </div>
        {/if}
    </div>
</div>
{/if}