export class Ui {
    displayDataGame(data) {
        let BoxGame = ``;
        for (let i = 0; i < data.length; i++) {
            BoxGame += `
            <div class="col p-4">
              <div data-id="${data[i].id}" class="card h-100 bg-secondary" role="button">
                <div class="card-body">
                  <img src="${data[i].thumbnail}" alt="" class="card-img-top object-fit-cover h-100 bg-dark">
                </div>
                <div class="hstack justify-content-between">
                  <h3 class="h6 small m-2">${data[i].title}</h3>
                  <span class="badge text-bg-primary m-2 p-2">Free</span>
                </div>
                <p class="card-text small text-center p-4">
                  ${data[i].short_description.split(" ", 10).join(" ")}
                </p>
              </div>
              <footer class="card-footer small hstack justify-content-between bg-secondary">
                <span class="badge text-bg-light p-2 m-1">${data[i].genre}</span>
                <span class="badge text-bg-light p-2 m-1">${data[i].platform}</span>
              </footer>
            </div>`;
        }
        document.getElementById('gameData').innerHTML = BoxGame;
    }

    displayDetailsGame(data) {
        let content = `
        <div class="d-flex justify-content-between align-items-baseline">
            <div class="col-md-4">
              <img src="${data.thumbnail}" class="w-100" alt="image details" />
            </div>
            <div class="col-md-8 p-5">
              <h3>Title: ${data.title}</h3>
              <p>Category: <span class="badge text-bg-info">${data.genre}</span></p>
              <p>Platform: <span class="badge text-bg-info">${data.platform}</span></p>
              <p>Status: <span class="badge text-bg-info">${data.status}</span></p>
              <p class="small">${data.description}</p>
              <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
            </div>
        </div>`;
        document.getElementById('detailsContent').innerHTML = content;
    }
}
