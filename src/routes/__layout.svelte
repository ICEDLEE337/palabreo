<nav class="row justify-content-space-around">
    {#each links as link}
        <a href={link.slug}>{link.name}</a>
    {/each}
</nav>
<main>
    <slot></slot>
</main>

<script lang="ts">
    const prefix = '/lang';
    let links = ['es-MX', 'es-US', 'el-GR', 'he-IL']
        .map(name => ({name, slug: `${prefix}/${name}/`}))
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