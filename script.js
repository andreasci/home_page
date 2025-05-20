fetch('project.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('container');
        data.forEach(project => {
            const div = document.createElement('div');
            div.className = 'card-project';
            div.innerHTML = `
                <div class="image">
                    <img src="${project.screenshot}" alt="project-image">
                </div>
                
                <a class="link" href="${project.link}" target="_blank">
                <h2 class="link" href="${project.link}" target="_blank">${project.titolo}</h2>
                </a>
                
                <p class="description">${project.descrizione}</p>
                `;
            container.appendChild(div);
        });
    });
