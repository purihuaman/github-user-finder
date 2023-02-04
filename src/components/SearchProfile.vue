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
		class="row mx-auto p-3 bg-darsk rounded shadow form"
		v-on:submit.prevent="onSubmit"
	>
		<fieldset class="col-12 col-sm-9 p-0">
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

		<fieldset class="col-12 col-sm-3 text-center p-0">
			<input type="submit" value="Buscar" class="btn btn-primary" />
		</fieldset>
	</form>
</template>

<style>
.form {
	max-width: 600px;
}
</style>
