export const createTodoApp = (selectors) => {
  const form = document.querySelector(selectors.form);
  const input = document.querySelector(selectors.input);
  const list = document.querySelector(selectors.list);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    span.textContent = value;
    button.textContent = '×';
    button.className = 'delete';

    span.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    button.addEventListener('click', () => {
      li.remove();
    });

    li.append(span, button);
    list.append(li);
    input.value = '';
  });
};
