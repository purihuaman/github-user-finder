<script>
export default {
	name: "AlertMessage",
	props: {
		error: Object,
	},
};
</script>

<template>
	<div class="alert alert-danger" role="alert">
		<div
			class="d-flex flex-column justify-content-center flex-sm-row text-center gap-3"
		>
			<span class="fs-1">&#9888;</span>
			<div>
				<p>{{ error.title }}</p>
				<small>{{ error.info }}</small>
			</div>
		</div>
	</div>
</template>
