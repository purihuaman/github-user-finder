<script>
export default {
	name: "SearchProfile",
	data() {
		return {
			search: "",
			messageAlert: "Ingrese un usuario a buscar",
			incomplete: "",
		};
	},

	methods: {
		onSubmit() {
			if (this.search !== "") {
				this.$emit("onSubmit", this.search);
				this.search = "";
			}
		},
	},
};
</script>

<template>
	<form
		action="#"
		class="w-75 row mx-auto p-4 bg-darsk rounded shadow"
		v-on:submit.prevent="onSubmit"
	>
		<fieldset class="col-12 col-sm-9">
			<input
				type="search"
				name="user"
				id="user"
				placeholder="Usuario"
				class="form-control"
				autofocus
				required
				v-model="search"
			/>
		</fieldset>

		<fieldset class="col-12 col-sm-3 text-center">
			<input type="submit" value="Buscar" class="btn btn-primary" />
		</fieldset>
	</form>
</template>
