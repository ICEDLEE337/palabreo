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
    const prefix = '/lang';            
</script>

<style lang="scss">
    @import '@onivoro/browser-layout/flex';
    @import '@onivoro/browser-layout/button';    

    a, button {
        @extend .btn;
    }

    nav {
        border-bottom: double 2px lightsteelblue;
        padding: 0;
    }

    main {
        overflow-y: auto;
        height: calc(100vh - 54px);
    }    
</style>