<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<p>
	{#if Object.keys($page.data.session || {}).length}
		{#if $page.data.session?.user?.image}
			<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session?.user?.email || $page.data.session?.user?.name}</strong>
		</span>
		<button on:click={() => signOut()} class="button">Sign out</button>
	{:else}
		<span class="notSignedInText">You are not signed in</span>
		<button on:click={() => signIn('github')}>Sign In with GitHub</button>
	{/if}
</p>

<h1 class="is-1 title">Users in database</h1>

<div class="box">
    <ul>
        {#each data.users as user}
            <li>{user.name} ({user.email})</li>
        {/each}
    </ul>
</div>