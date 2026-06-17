import { describe, it, expect, beforeEach } from 'vitest';
import { createTodoApp } from '../src/index.js';

describe('createTodoApp', () => {
  let form, input, list, addItem;

  beforeEach(() => {
    document.body.innerHTML = `
      <form class="todo-form">
        <input class="todo-input" type="text">
        <button type="submit">Add</button>
      </form>
      <ul class="todo-list"></ul>
    `;

    form = document.querySelector('.todo-form');
    input = document.querySelector('.todo-input');
    list = document.querySelector('.todo-list');

    addItem = (text) => {
      input.value = text;
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    };
  });

  it('is a function', () => {
    expect(typeof createTodoApp).toBe('function');
  });

  it('adds item to list on form submit', () => {
    createTodoApp({
      form: '.todo-form',
      input: '.todo-input',
      list: '.todo-list',
    });

    addItem('Купить хлеб');

    const items = list.querySelectorAll('li');
    expect(items).toHaveLength(1);
    expect(items[0].textContent).toContain('Купить хлеб');
  });

  it('clears input after adding', () => {
    createTodoApp({
      form: '.todo-form',
      input: '.todo-input',
      list: '.todo-list',
    });

    addItem('Тест');
    expect(input.value).toBe('');
  });

  it('does not add empty items', () => {
    createTodoApp({
      form: '.todo-form',
      input: '.todo-input',
      list: '.todo-list',
    });

    addItem('   ');
    expect(list.children).toHaveLength(0);
  });

  it('removes item on delete button click', () => {
    createTodoApp({
      form: '.todo-form',
      input: '.todo-input',
      list: '.todo-list',
    });

    addItem('Удалить меня');

    const deleteBtn = list.querySelector('.delete');
    deleteBtn.click();

    expect(list.children).toHaveLength(0);
  });

  it('toggles completed class on item click', () => {
    createTodoApp({
      form: '.todo-form',
      input: '.todo-input',
      list: '.todo-list',
    });

    addItem('Сделать');

    const span = list.querySelector('span');
    span.click();
    expect(list.querySelector('li').classList.contains('completed')).toBe(true);

    span.click();
    expect(list.querySelector('li').classList.contains('completed')).toBe(false);
  });

  it('adds multiple items', () => {
    createTodoApp({
      form: '.todo-form',
      input: '.todo-input',
      list: '.todo-list',
    });

    addItem('Один');
    addItem('Два');
    addItem('Три');

    expect(list.children).toHaveLength(3);
  });
});
