<script>
import Twitter from "./Twitter.vue";
import Location from "./Location.vue";
import LinkPage from "./LinkPage.vue";

export default {
	name: "Profile",
	props: {
		user: Object,
		myfavorite: Boolean,
	},
	data() {
		return {
			data: this.user,
		};
	},

	methods: {
		onFavorite() {
			this.$emit("onFavorite", this.user);
		},

		onRemoveFavorite() {
			this.$emit("onRemoveFavorite", this.user.login);
		},
	},

	components: { Twitter, LinkPage, Location },
};
</script>

<template>
	<Transition name="profile">
		<div>
			<div class="card bg-darks mx-auto p-3 shadow p-sm-4">
				<header
					class="d-flex justify-content-center align-items-center flex-column gap-3 flex-sm-row justify-content-sm-start"
				>
					<div class="position-relative rounded-circle overflow-hidden picture">
						<img
							:src="user.avatar"
							:alt="user.name"
							class="card-img-top h-100 w100"
						/>
						<!-- <span class="favorite">&#9825;</span> -->

						<!-- Delete -->
						<button
							v-if="myfavorite"
							@click="onRemoveFavorite"
							class="position-absolute start-50 bottom-0 translate-middle-x border-0 text-danger bg-transparent fs-2"
						>
							&#9829;
						</button>

						<!-- Add -->
						<button
							v-else
							@click="onFavorite"
							class="position-absolute start-50 bottom-0 translate-middle-x border-0 text-danger bg-transparent fs-2"
						>
							&#9825;
						</button>
					</div>

					<div class="">
						<h4>{{ user.name }}</h4>
						<p>
							<a
								:href="user.linkrepo"
								target="_blank"
								class="text-decoration-none"
								>@{{ user.login }}</a
							>
						</p>

						<p>{{ user.joined }}</p>
					</div>
				</header>
				<!-- <img src="..." class="card-img-top" alt="..." /> -->

				<!-- body -->
				<div class="card-body">
					<div>
						<p>{{ user.bio }}</p>
					</div>

					<div
						class="statistics d-flex flex-wrap gap-3 rounded shadow text-secondary bg-darks"
					>
						<div class="flex-grow-1 p-3 text-center fs-6">
							<p class="mb-0">Repositorios</p>
							<p class="mb-0">{{ user.numRepos }}</p>
						</div>

						<div class="flex-grow-1 p-3 text-center fs-6">
							<p class="mb-0">Seguidores</p>
							<p class="mb-0">{{ user.followers }}</p>
						</div>

						<div class="flex-grow-1 p-3 text-center fs-6">
							<p class="mb-0">Siguiendo</p>
							<p class="mb-0">{{ user.following }}</p>
						</div>
					</div>
				</div>

				<footer class="p-3">
					<div class="d-flex flex-column gap-3 flex-wrap">
						<!-- location -->
						<div class="d-flex align-items-center justify-content-center gap-3">
							<span><Location style="height: 32px; width: 32px" /></span>

							<p class="mb-0">{{ user.location }}</p>
						</div>

						<!-- networks -->
						<div
							class="d-flex align-items-center justify-content-center gap-3 flex-wrap"
						>
							<div class="flex-grow-1 text-center text-nowrap">
								<a
									:href="user.blog"
									target="_blank"
									class="d-flex flex-column align-items-center justify-content-center text-primary text-decoration-none link"
								>
									<LinkPage style="height: 32px; width: 32px" />
									Sitio web
								</a>
							</div>

							<div class="flex-grow-1 text-center">
								<a
									:href="`https://twitter.com/${user.twitter}`"
									target="_blank"
									class="d-flex flex-column align-items-center justify-content-center text-primary text-decoration-none"
								>
									<Twitter />
									@{{ user.twitter }}
								</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	</Transition>
</template>

<style scoped>
.picture {
	--size-picture: 100px;
	width: var(--size-picture);
	height: var(--size-picture);
}

@media screen and (min-width: 576px) {
	.picture {
		--size-picture: 180px;
	}
}

.link:hover > svg {
	color: red !important;
	stroke: red !important;
	stroke: var(--bs-link-hover-color) !important;
}

.card-enter-active,
.card-leave-active {
	transition: opacity 300ms ease;
}

.card-enter-from,
.card-leave-to {
	opacity: 0;
}
</style>
