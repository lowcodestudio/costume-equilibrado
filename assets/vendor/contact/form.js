const updateSubject = (name) => {
    document.getElementById("email-subject").value = "Pedido de orçamento: " + name;
}

const clearErrors = () => {
    document.querySelector('.error-message').classList.remove('d-block');
    document.querySelector('.sent-message').classList.remove('d-block');
}

const handleSubmit = (event) => {
    event.preventDefault();

    clearErrors();
    
    document.querySelector('.loading').classList.add('d-block');

    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        document.querySelector('.loading').classList.remove('d-block');
        document.getElementById('sendFormBtn').remove()
        document.querySelector('.sent-message').classList.add('d-block');
      })
      .catch((error) => {
        document.querySelector('.loading').classList.remove('d-block');
        document.querySelector('.error-message').classList.add('d-block');
    });
};
  
document.querySelector("form").addEventListener("submit", handleSubmit);

