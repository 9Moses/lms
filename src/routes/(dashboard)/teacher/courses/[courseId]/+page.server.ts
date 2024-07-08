import { type Category, type Course } from '$lib/types.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params, locals: { user, pb } }) => {
	const { courseId } = params;
	const userId = user?.id;

	if (!userId) {
		redirect(303, '/');
	}

	async function getCourse() {
		try {
			const course = await pb
				.collection('courses')
				.getOne<Course>(courseId, { expand: 'category , attachments(course), chapters(course)' });

			if (course.imageUrl) {
				const imageUrl = pb.files.getUrl(course, course.imageUrl);
				course.imageUrl = imageUrl;
			}
			return course;
		} catch (e) {
			//const { status } = e as ClientResponseError;
			//if (status === 404) error(404, 'course does not exist');
			redirect(303, '/');
		}
	}

	async function getCategories() {
		try {
			const category = await pb.collection('categories').getFullList<Category>({
				sort: '-created'
			});
			return category;
		} catch (e) {
			//const { status } = e as ClientResponseError;
			//	if (status === 404)
			redirect(303, '/');
		}
	}

	const [course, categories] = await Promise.all([getCourse(), getCategories()]);
	return {
		course,
		categories
	};
};
