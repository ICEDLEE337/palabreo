<nav class="row justify-content-space-around">
    {#each supportedLanguages as link}
        <a href={link.abbrev}>{link.text}</a>
    {/each}
</nav>
<main>
    <slot></slot>
</main>

<script lang="ts">
    import {supportedLanguages} from '$lib/constants/supported-languages';        
</script>

<style lang="scss">
    @import '@onivoro/browser-layout/flex';
    @import '@onivoro/browser-layout/button';    
    @import '@onivoro/browser-layout/text';    

    a, button {
        @extend .btn;
        @extend .txt;
    }

    nav {
        padding: 0;
        @extend .drop-shadow;
    }

    main {
        overflow-y: auto;
        height: calc(100vh - 54px);        
    }    
</style>