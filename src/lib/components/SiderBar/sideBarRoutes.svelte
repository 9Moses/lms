<script lang="ts">
	import { BarChart, List } from 'lucide-svelte';
	import SideBarItem from './sideBarItem.svelte';

	const routes = [
		{
			icon: List,
			label: 'Course',
			href: '/teacher/courses'
		},
		{
			icon: BarChart,
			label: 'Analytics',
			href: '/teacher/analytics'
		}
	];
</script>

<div class="flex w-full flex-col">
	{#each routes as { href, icon, label }}
		<SideBarItem {href} {icon} {label} />
	{/each}
</div>
