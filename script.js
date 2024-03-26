
let luzMudar =document.getElementById('icon')

    luzMudar.addEventListener('click', () => {
        const loginForm = document.getElementById('principal2');
        if(luzMudar.classList.contains('fa-moon')) {
            luzMudar.classList.remove('fa-moon')
            luzMudar.classList.add('fa-sun')
            
            loginForm.classList.add('escuro')

        } else if (luzMudar.classList.contains('fa-sun')) {
            luzMudar.classList.remove('fa-sun')
            luzMudar.classList.add('fa-moon')

            loginForm.classList.remove('escuro')
            
        }
    })
    