<script lang="ts">
	import IconBadge from '$lib/components/Icons/IconBadge.svelte';
	import TitleForm from '$lib/components/Title/TitleForm.svelte';
	import * as Alert from '$lib/components/ui/alert';
	import {
		AlertTriangle,
		LayoutDashboard,
		ListChecks,
		CircleDollarSign,
		File
	} from 'lucide-svelte';
	export let data;
	$: course = data.course;
	$: requiredFields = [
		course.title,
		course.description,
		course.imageUrl,
		course.price,
		course.category,
		course.expand?.['chapters(course)']?.some((chapter) => chapter.isPublished)
	];
	$: totalFields = requiredFields.length;
	$: completedFeild = requiredFields.filter(Boolean).length;
	$: completedText = `(${completedFeild}/${totalFields})`;
	$: isCompeled = requiredFields.every(Boolean);
</script>

{#if !course.isPublished}
	<Alert.Root class="rounded-none border border-yellow-300 bg-yellow-200/80">
		<AlertTriangle class="size-4" />
		<Alert.Title>Heads up!</Alert.Title>
		<Alert.Description
			>This couses is un-published. It wil not be visible to students</Alert.Description
		>
	</Alert.Root>
{/if}
<div class="p-6">
	<div class="flex items-center justify-between">
		<div class="flex flex-col gap-y-2">
			<h1 class="text-2xl font-medium">Courses Setup</h1>
			<span class="text-sm text-muted-foreground">Complete all fields {completedText}</span>
		</div>
	</div>
	<div class="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
		<div class="">
			<div class="flex items-center gap-x-2">
				<IconBadge icon={LayoutDashboard} />
				<h2 class="text-xl">Customize your course</h2>
			</div>
			<TitleForm />
		</div>
		<div class="space-y-6">
			<div>
				<div class="flex items-center gap-x-2">
					<IconBadge icon={ListChecks} />
					<h2 class="text-xl">Couses Chapter</h2>
				</div>
				<!-- ChapterForm -->
			</div>
			<div>
				<div class="flex items-center gap-x-2">
					<IconBadge icon={CircleDollarSign} />
					<h2 class="text-xl">Sell your course</h2>
				</div>
				<!-- PriceForm -->
			</div>
			<div>
				<div class="flex items-center gap-x-2">
					<IconBadge icon={File} />
					<h2 class="text-xl">Resource & Attachments</h2>
				</div>
				<!-- AttachmentForm -->
			</div>
		</div>
	</div>
</div>
