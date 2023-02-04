<script>
import GithubIcon from "./GithubIcon.vue";
import Linkedin from "./Linkedin.vue";
import Twitter from "./Twitter.vue";

export default {
	name: "Footer",
	components: { Twitter, Linkedin, GithubIcon },
};
</script>

<template>
	<footer class="mt-auto py-3 shadow-lg">
		<div class="container">
			<div
				class="d-flex flex-column align-items-center justify-content-center gap-3 py-3 flex-sm-row justify-content-sm-between"
			>
				<div class="d-flex justify-content-center align-items-center gap-3">
					<div class="item">
						<a href="https://twitter.com/puriihuaman" target="_blank">
							<Twitter />
						</a>
					</div>

					<div class="item">
						<a href="https://www.linkedin.com/in/puriihuaman/" target="_blank">
							<Linkedin />
						</a>
					</div>

					<div class="item">
						<a href="https://github.com/purihuaman" target="_blank">
							<GithubIcon />
						</a>
					</div>
				</div>

				<div class="text-center">
					<p class="m-0">
						Desarrollado por
						<a
							href="https://purihuaman.netlify.app/"
							target="_blank"
							class="text-decoration-none link"
						>
							Pedro Purihuaman
						</a>
						© 2023
					</p>
				</div>

				<div class="text-center">
					<p class="m-0">
						Creado con <span class="text-danger">&#9829;</span>
						en Perú
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<style>
.link {
	font-family: var(--heading-font);
}
</style>
