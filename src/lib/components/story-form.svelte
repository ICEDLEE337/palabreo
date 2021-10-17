<script lang="ts">
    import { page } from '$app/stores';
import { onMount } from 'svelte';

    let who = '?'

    onMount(() => {

    });

    function submit(e) {
        console.warn(e)
    }
</script>

<form on:submit={() => submit(who)}>
    <input bind:value={who}  />
</form>