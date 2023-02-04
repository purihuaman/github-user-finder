<script>
import EyeIcon from "./EyeIcon.vue";
import GithubIcon from "./GithubIcon.vue";

export default {
	name: "FavoritesTable",
	props: {
		favoriteUser: Object,
	},
	data() {
		return {
			newUser: "",
		};
	},
	methods: {
		onRemoveFavorite(user) {
			if (!user) return;

			this.$emit("onRemoveFavorite", user.login);
		},

		onShowFavorite(favorite) {
			this.$emit("onShowFavorite", favorite);
		},
	},

	components: { GithubIcon, EyeIcon },
};
</script>

<template>
	<div class="rounded overflow-hidden shadow">
		<table class="table table-hover">
			<thead class="text-center">
				<tr class="">
					<th class="py-3 bg-primary text-white">Ver</th>
					<th class="py-3 bg-primary text-white">Usuario</th>
					<th class="py-3 bg-primary text-white">Nombre</th>
					<th class="py-3 bg-primary text-white">Repositorio</th>
					<th class="py-3 bg-primary text-white">Favorite</th>
				</tr>
			</thead>

			<tbody class="">
				<TransitionGroup name="list">
					<template v-for="user in favoriteUser" :key="user.id">
						<tr class="" :id="user.id">
							<td class="align-middle text-primary">
								<a @click="onShowFavorite(user)" href="#" class="text-primary">
									<EyeIcon />
								</a>
							</td>
							<td class="align-middle">{{ user.login }}</td>
							<td class="align-middle">{{ user.name }}</td>
							<td class="align-middle text-center">
								<a
									:href="`${user.linkrepo}`"
									target="_blank"
									class="table__github text-primary"
								>
									<GithubIcon />
									<!-- {{ user.name }} -->
								</a>
							</td>
							<td class="align-middle">
								<button
									@click="onRemoveFavorite(user)"
									:id="user.id"
									:datatype="user.login"
									class="border-0 d-block text-danger bg-transparent fs-2"
								>
									&#9829;
								</button>
							</td>
						</tr>
					</template>
				</TransitionGroup>
			</tbody>

			<tfoot class="py-1 text-secondary">
				<tr class="">
					<td class="align-middle" colspan="4">Total de fovoritos:</td>
					<td class="align-middle">{{ favoriteUser.length }}</td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>

<style scoped>
/* .heart:hover {
	font-size: 1.98rem !important;
} */

.list-move,
.list-enter-active,
.list-leave-active {
	transition: transform, opacity, 300ms ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
</style>
