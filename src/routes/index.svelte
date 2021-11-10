<script lang="ts">
    import { page } from '$app/stores';
    import { supportedLanguages, supportedLanguageMap } from '$lib/constants/supported-languages';
    let langs;
</script>

<style lang="scss">
@import '@onivoro/browser-layout/background';
@import '@onivoro/browser-layout/button';
@import '@onivoro/browser-layout/hero';
</style>

<div class="hero">
    <div>
        <div>
            <h1>Supported Languages</h1>
        </div>
        
        {#each supportedLanguages as lang }
            <div class="pancake-stack hero" style="width: 100%; background: url({supportedLanguageMap[lang.abbrev]?.flag})">
                <a class="pancake stroked bg-glass" href={lang.abbrev}>
                    <h2>{lang.text}</h2>
                </a>
            </div>
        {/each}
    </div>
</div>