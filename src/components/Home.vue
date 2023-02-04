<script>
import { getProfile } from "../lib/get-profile";
import AlertMessage from "./AlertMessage.vue";
import Profile from "./Profile.vue";
import SearchProfile from "./SearchProfile.vue";
import FavoritesTable from "./FavoritesTable.vue";
import Footer from "./Footer.vue";

const FAVORITES_LIST = "favorites_list";

export default {
	name: "Home",
	data() {
		return {
			dataUser: null,
			success: false,
			user: "",
			error: "",
			favorites: new Map(),
			myfavorite: false,
		};
	},

	created() {
		const savedFavorites = JSON.parse(
			window.localStorage.getItem(FAVORITES_LIST)
		);

		if (savedFavorites?.length) {
			const favorites = new Map(
				savedFavorites.map((favorite) => [favorite.login, favorite])
			);
			this.favorites = favorites;
			this.myfavorite = true;
		}
	},

	methods: {
		async getUserProfile(searchValue) {
			let foundInFavorites = this.favorites.get(searchValue);

			if (!!foundInFavorites) {
				return (this.dataUser = foundInFavorites);
			}

			const { success, data, error } = await getProfile(searchValue);
			this.dataUser = data;
			this.success = success;
			this.user = searchValue;
			this.error = error;

			this.data && this.favorites.has(this.dataUser.login)
				? (this.myfavorite = true)
				: (this.myfavorite = false);
		},

		addToFavorite(userFavorite) {
			this.favorites.set(userFavorite.login, this.dataUser);
			this.myfavorite = true;
			this.updateStorage();
		},

		removeFavorite(userLogin) {
			this.favorites.delete(userLogin);
			this.updateStorage();
			this.favorites.has(userLogin)
				? (this.myfavorite = true)
				: (this.myfavorite = false);
		},

		showFavorite(favorite) {
			this.myfavorite = true;
			this.dataUser = favorite;
		},

		updateStorage() {
			window.localStorage.setItem(
				FAVORITES_LIST,
				JSON.stringify(this.allFavorites)
			);
		},
	},

	watch: {
		myfavorite(current, old) {
			this.myfavorite = current;
		},
	},

	computed: {
		allFavorites() {
			return Array.from(this.favorites.values());
		},
	},

	components: { SearchProfile, Profile, AlertMessage, FavoritesTable, Footer },
};
</script>

<template>
	<main class="bg-sdark">
		<div class="container py-5">
			<SearchProfile @onSubmit="getUserProfile" />

			<div class="row py-5">
				<div class="col-12 col-lg-6 py-3">
					<Profile
						v-if="dataUser"
						:user="dataUser"
						:myfavorite="myfavorite"
						@onFavorite="addToFavorite"
						@onRemoveFavorite="removeFavorite"
					/>

					<div
						v-if="!success && !error"
						class="w-75 mx-auto text-center text-secondary p-2"
					>
						<p class="m-0">Esperando la búsqueda...</p>
					</div>
					<AlertMessage v-if="error" :error="error" />
				</div>

				<div v-if="favorites" class="col-12 col-lg-6 py-3">
					<FavoritesTable
						:favoriteUser="allFavorites"
						@onRemoveFavorite="removeFavorite"
						@onShowFavorite="showFavorite"
					/>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</template>
