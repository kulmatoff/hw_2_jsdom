const form = document.querySelector("#form");

function validateForm() {
    let n = document.getElementById("name").value;
    let e = document.getElementById("email").value;
    let p = document.getElementById("password").value;
    if (n.length < 1 || p.length < 8 || e.length < 1 ) {
        if (document.getElementById("error") == null) {
            const err = document.createElement("div")
            err.innerHTML = `
            <h1>Error</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium, officia repellendus repudiandae molestias sint labore itaque quod sequi animi rerum quia, nemo, tempore commodi fugit aut! Exercitationem, sapiente quos.</p>
            `
            err.id = "error";
            form.prepend(err);
        }
        return false;
    }
    return true;
}