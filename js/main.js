
'use strict';

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function validate() {
    const forms = document.getElementById('exampleInputEmail1');
    if (forms.value == "" || validateEmail) {
        forms.classList.add('is-invalid')
    } else {
        forms.classList.add('is-valid');
    }
}




