const btn = document.querySelector(".notify");

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

btn.addEventListener("click", () => {
    const msg = document.querySelector('.error-msg');
    const input = document.querySelector('#email');

    if(!validateEmail(input.value)) {
        msg.classList.add("error-msg-active");
        input.classList.add("error-active");
    } else {
        msg.classList.remove("error-msg-active");
        input.classList.remove("error-active");
    }
});