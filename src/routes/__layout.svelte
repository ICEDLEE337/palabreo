<div>
    <nav class="row justify-content-space-around">
        {#each links as link}
            <div>
                <a href={link.slug}>{link.name}</a>
            </div>
        {/each}
    </nav>
    <slot></slot>
</div>

<script lang="ts">
    import { page } from '$app/stores';
    import { linx } from '$lib/constants/linx';

    let links = linx.map(name => ({name, slug: `/${name}/`}))
</script>

<style lang="scss">
    // @import '@onivoro/browser-layout/index';

    a {
        // @extend .btn-1;
        font-weight: bold;
    }

    nav {
        border-bottom: solid 1px;
    }
</style>