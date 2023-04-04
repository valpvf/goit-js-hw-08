import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
};

let fieldsInputs = {};
const key = 'feedback-form-state';

refs.formEl.addEventListener('input', throttle(onFormInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit);

function onStart() {
  fieldsInputs = JSON.parse(localStorage.getItem(key)) || {};
  if (!fieldsInputs) {
    return;
  }
  for (const key in fieldsInputs) {
    refs.formEl[key].value = fieldsInputs[key];
  }
}

onStart();

function onFormInput(evt) {
  fieldsInputs[evt.target.name] = evt.target.value;
  localStorage.setItem(key, JSON.stringify(fieldsInputs));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(fieldsInputs);
  evt.currentTarget.reset();
  localStorage.removeItem(key);
}
