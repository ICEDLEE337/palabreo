<nav class="row justify-content-space-around">
    {#each linx as link}
        <a href={link.slug}>{link.name}</a>
    {/each}
</nav>
<main>
    <slot></slot>
</main>

<script lang="ts">
    import {supportedLanguages} from '$lib/constants/supported-languages';
    const prefix = '/lang';
    let links = ['es-MX', 'es-US', 'el-GR', 'he-IL']
        .map(name => ({name, slug: `${prefix}/${name}/`}));
        
    let linx = supportedLanguages
        .map(name => ({name, slug: `/${name}/`}));
</script>

<style lang="scss">
    @import '@onivoro/browser-layout/flex';
    @import '@onivoro/browser-layout/button';

    a, button {
        @extend .stroked;
    }

    nav {
        border-bottom: double 2px lightsteelblue;
        padding: 0;
    }
</style>