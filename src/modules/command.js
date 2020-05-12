const command = () => {

    const img = document.querySelectorAll('.command__photo'),
        command = document.getElementById('command');
    let newPhoto;

    command.addEventListener('mouseover', event => {
        const target = event.target;

        if (target.matches('.command__photo')) {
            img.forEach(item => {
                if (target === item) {
                    newPhoto = item.src;
                    item.src = target.dataset.img;
                    // event.target.src = e.t.dataset.img;
                }
            });
        }
    });

    command.addEventListener('mouseout', event => {
        const target = event.target;

        if (target.matches('.command__photo')) {
            img.forEach(item => {
                if (target === item) {
                    item.src = newPhoto;
                }
            });
        }
    });

};