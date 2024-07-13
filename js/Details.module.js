import { Ui } from "./UI.module.js";

export class Details {
    constructor(id) {
        this.ui = new Ui();
        document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector(".home").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        });
        this.getDetails(id);
    }

    async getDetails(idGame) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");

        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };

        try {
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`, options);
            const response = await api.json();
            this.ui.displayDetailsGame(response);
        } catch (error) {
            console.error(error);
        } finally {
            loading.classList.add("d-none");
        }
    }
}
