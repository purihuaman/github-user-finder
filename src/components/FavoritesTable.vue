<script>
import EyeIcon from "./EyeIcon.vue";
import GithubIcon from "./GithubIcon.vue";

export default {
	name: "FavoritesTable",
	props: {
		favoriteUser: Object,
	},
	data() {
		return {};
	},
	methods: {
		onRemoveFavorite(userLogin) {
			this.$emit("onRemoveFavorite", userLogin);
		},

		onShowFavorite(favorite) {
			this.$emit("onShowFavorite", favorite);
		},
	},

	components: { GithubIcon, EyeIcon },
};
</script>

<template>
	<div class="border border-secondary rounded overflow-hidden">
		<table class="table table-dark table-hover text-white hover:text-white">
			<thead class="text-center">
				<tr class="">
					<th class="py-3 bg-secondary">Ver</th>
					<th class="py-3 bg-secondary">Usuario</th>
					<th class="py-3 bg-secondary">Nombre</th>
					<th class="py-3 bg-secondary">Repositorio</th>
					<th class="py-3 bg-secondary">Favorite</th>
				</tr>
			</thead>

			<tbody class="text-center">
				<TransitionGroup name="list">
					<template v-for="user in favoriteUser" :key="user.id">
						<tr class="" :id="user.id">
							<td class="align-middle text-primary">
								<a @click="onShowFavorite(user)" href="#" class="text-primary">
									<EyeIcon
										style="height: 28px; width: 28px; pointer-events: none"
									/>
								</a>
							</td>
							<td class="align-middle">{{ user.login }}</td>
							<td class="align-middle">{{ user.name }}</td>
							<td class="align-middle text-center">
								<a
									:href="`${user.linkrepo}`"
									target="_blank"
									class="table__github"
								>
									<GithubIcon />
									<!-- {{ user.name }} -->
								</a>
							</td>
							<td class="align-middle">
								<button
									@click="onRemoveFavorite(user.login)"
									:id="user.id"
									class="border-0 text-danger bg-transparent fs-2"
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
