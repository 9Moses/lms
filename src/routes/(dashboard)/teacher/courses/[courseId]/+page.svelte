<script lang="ts">
	export let data;
</script>

{data.course?.title}

{#each data.categories as category}
	<p>{category.name}</p>
{/each}
