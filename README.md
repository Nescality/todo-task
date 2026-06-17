# TODO List

![Tests](https://github.com/Nescality/todo-task/actions/workflows/test.yml/badge.svg)

Реализуйте функцию `createTodoApp`, которая создаёт TODO-приложение.

## Требования

Функция принимает объект с селекторами:

```js
{
  form: '.todo-form',
  input: '.todo-input',
  list: '.todo-list',
}
```

И должна:

1. Добавлять задачу в список при отправке формы
2. Очищать поле ввода после добавления
3. Удалять задачу при клике на кнопку удаления
4. Отмечать задачу выполненной при клике на текст (класс `completed`)

## HTML-структура

```html
<form class="todo-form">
  <input class="todo-input" type="text" required>
  <button type="submit">Add</button>
</form>
<ul class="todo-list"></ul>
```

## Пример задачи в DOM

```html
<li>
  <span>Купить хлеб</span>
  <button class="delete">×</button>
</li>
```

## Запуск тестов

```bash
npm install
npm test
```
