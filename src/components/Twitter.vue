<script>
export default {
	name: "Twitter",
	data() {
		return {
			styleObject: {
				stroke: "var(--bs-link-color) !important",
			},
		};
	},
};
</script>

<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="icon icon-tabler icon-tabler-brand-twitter twitter text-primary twitter__icon"
		width="32"
		height="32"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="#0d6efd"
		:style="styleObject"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path
			d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
		/>
	</svg>
</template>

<style>
.twitter__icon {
	--size-icon: 28px;
	height: var(--size-icon);
	width: var(--size-icon);
	display: block;

	transition: height 300ms ease;
}

.twitter__icon:hover {
	--size-icon: 30px;
}
</style>
