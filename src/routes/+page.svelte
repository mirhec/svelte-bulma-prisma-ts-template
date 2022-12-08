<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1 class="is-1 title">Users in database</h1>

<div class="box">
    <ul>
        {#each data.users as user}
            <li>{user.name} ({user.email})</li>
        {/each}
    </ul>
</div>