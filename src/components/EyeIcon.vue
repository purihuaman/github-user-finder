<script>
export default {
	name: "EyeIcon",
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
		class="icon icon-tabler icon-tabler-eye eye"
		width="44"
		height="44"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="#0d6efd"
		:style="styleObject"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<circle cx="12" cy="12" r="2" />
		<path
			d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"
		/>
	</svg>
</template>

<style scoped>
.eye {
	--size-icon: 28px;
	height: var(--size-icon);
	width: var(--size-icon);
	display: block;

	transition: height 300ms ease;
}

.eye:hover {
	--size-icon: 30px;
}
</style>
