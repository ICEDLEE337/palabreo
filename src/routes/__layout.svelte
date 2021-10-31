<div>
    <nav class="row justify-content-space-around">
        {#each links as link}
            <div>
                <a class="btn-3" href={link.slug}>{link.name}</a>
            </div>
        {/each}
    </nav>
    <slot></slot>
</div>

<script lang="ts">
    import { linx } from '$lib/constants/linx';

    let links = linx.map(name => ({name, slug: `/${name}/`}))
</script>

<style lang="scss">
    @import '@onivoro/browser-layout/index';

    a {
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        &:hover {
            background-color: white;
        }
        transition: 333ms background-color;
    }

    nav {
        background-color: limegreen;
        border-bottom: solid 1px;
        // @extend .pad-1;
        padding: 0;
    }
</style>