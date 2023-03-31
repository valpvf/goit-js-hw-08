import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  fieldsInputs: {},
  key: 'feedback-form-state',
};

refs.formEl.addEventListener('input', throttle(onFormInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit);

function onStart() {
  refs.fieldsInputs = JSON.parse(localStorage.getItem(refs.key)) || {};
  if (refs.fieldsInputs === undefined) {
    return;
  }
  for (const key in refs.fieldsInputs) {
    refs.formEl[key].value = refs.fieldsInputs[key];
  }
}

onStart();

function onFormInput(evt) {
  refs.fieldsInputs[evt.target.name] = evt.target.value;
  localStorage.setItem(refs.key, JSON.stringify(refs.fieldsInputs));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (evt.target !== evt.currentTarget) {
    return;
  }
  console.log(refs.fieldsInputs);
  evt.currentTarget.reset();
  localStorage.removeItem(refs.key);
}
