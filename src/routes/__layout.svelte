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
    const prefix = '/lang';
    let links = ['es-MX', 'es-US', 'el-GR', 'he-IL'].map(name => ({name, slug: `${prefix}/${name}/`}))
</script>

<style lang="scss">
    @import '@onivoro/browser-layout/index';

    a {
        &:hover {
            background-color: $blackice;
            color: white;
        }
    }

    nav {
        border-bottom: double 2px lightsteelblue;
        padding: 0;
    }
</style>