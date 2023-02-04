<script>
export default {
	name: "Linkedin",
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
		class="icon icon-tabler icon-tabler-brand-linkedin linkedin"
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
		<rect x="4" y="4" width="16" height="16" rx="2" />
		<line x1="8" y1="11" x2="8" y2="16" />
		<line x1="8" y1="8" x2="8" y2="8.01" />
		<line x1="12" y1="16" x2="12" y2="11" />
		<path d="M16 16v-3a2 2 0 0 0 -4 0" />
	</svg>
</template>

<style>
.linkedin {
	--size-icon: 28px;
	height: var(--size-icon);
	width: var(--size-icon);
	display: block;

	transition: height 300ms ease;
}

.linkedin:hover {
	--size-icon: 30px;
}
</style>
