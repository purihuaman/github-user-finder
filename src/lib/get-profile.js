import { repositoryApiMapper } from "./repository-api-mapper";

const API = "https://api.github.com/users/";
const getProfile = async (username = "purihuaman") => {
	try {
		const response = await fetch(API + username);

		if (!response.ok) {
			return {
				success: false,
				data: null,
				error: {
					title:
						response.status === 403
							? `No pudimos encontar a ${username}`
							: "Error en la petición",
					info: `Error ${response.status}: ${
						response.statusText || "Usuario no encontrado"
					}`,
				},
			};
		}

		const data = await response.json();

		return {
			success: true,
			data: repositoryApiMapper(data),
			error: null,
		};
	} catch (ex) {
		return {
			success: false,
			data: null,
			error: ex,
		};
	} finally {
		username = null;
	}
};

export { getProfile };
