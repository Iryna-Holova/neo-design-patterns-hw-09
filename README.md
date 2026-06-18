# Домашнє завдання до Теми Поведінкові патерни Ітератор та Шаблонний метод

# Реалізація патерну Шаблонний метод

## Опис завдання

У цьому домашньому завданні вам необхідно реалізувати експорт користувацької статистики, використовуючи патерн Шаблонний метод. Ви повинні виокремити загальний алгоритм експорту у базовому класі, залишивши деталі форматування у конкретних підкласах.

Дані користувачів мають бути завантажені з API `https://jsonplaceholder.typicode.com/users`. Система повинна підтримувати експорт у три формати: CSV, JSON та XML.

Завдання має на меті навчити вас:

- виокремлювати сталі етапи алгоритму;
- інкапсулювати алгоритм у базовому класі;
- реалізовувати варіативну поведінку через абстрактні та hook-методи.

# Реалізація ітераторів для експортованих файлів

## Опис завдання

Після реалізації експорту користувачів у формати CSV, JSON та XML, необхідно створити окремі ітератори для обходу даних, збережених у цих файлах.

Ітератори повинні надавати послідовний обхід елементів, інкапсулюючи логіку читання та парсингу файлів.

Мета цієї частини завдання:

- навчитися створювати власні ітератори для різних джерел даних;
- практикувати інкапсуляцію обходу структури даних;
- продемонструвати розуміння протоколу ітераторів.

Структура проєкту:

```bash
/
└── src/
    ├── exporters/
    │   ├── DataExporter.ts     # Базовий клас з шаблонним методом
    │   ├── CsvExporter.ts      # Експорт у CSV
    │   ├── JsonExporter.ts     # Експорт у JSON
    │   └── XmlExporter.ts      # Експорт у XML
    ├── iterators/
    │   ├── CsvIterator.ts
    │   ├── JsonIterator.ts
    │   └── XmlIterator.ts
    ├── data/
    │   └── UserData.ts         # Тип даних користувачів
    ├── main-iterate.ts
    └── main.ts
```

**Запуск:**

```bash
npx ts-node ./src/main.ts          # експорт даних у файли

npx ts-node ./src/main-iterate.ts  # запуск ітераторів
```

## Приклад результата експорту

Після запуску демонстраційного файлу `main.ts` командою `npx ts-node ./src/main.ts` створюються три файли з відповідними форматами:

[**`users.csv`**](./dist/users.csv)

```csv
id,name,email,phone
5,Chelsey Dietrich,Lucio_Hettinger@annie.ca,(254)954-1289
10,Clementina DuBuque,Rey.Padberg@karina.biz,024-648-3804
3,Clementine Bauch,Nathan@yesenia.net,1-463-123-4447
2,Ervin Howell,Shanna@melissa.tv,010-692-6593 x09125
9,Glenna Reichert,Chaim_McDermott@dana.io,(775)976-6794 x41206
7,Kurtis Weissnat,Telly.Hoeger@billy.biz,210.067.6132
1,Leanne Graham,Sincere@april.biz,1-770-736-8031 x56442
6,Mrs. Dennis Schulist,Karley_Dach@jasper.info,1-477-935-8478 x6430
8,Nicholas Runolfsdottir V,Sherwood@rosamond.me,586.493.6943 x140
4,Patricia Lebsack,Julianne.OConner@kory.org,493-170-9623 x156
```

[**`users.json`**](./dist/users.json)

```json
[
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "email": "Lucio_Hettinger@annie.ca",
    "phone": "(254)954-1289"
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "email": "Rey.Padberg@karina.biz",
    "phone": "024-648-3804"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "email": "Nathan@yesenia.net",
    "phone": "1-463-123-4447"
  },
  ...
]
```

[**`users.xml`**](./dist/users.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<users>
  <user>
    <id>5</id>
    <name>Chelsey Dietrich</name>
    <email>Lucio_Hettinger@annie.ca</email>
    <phone>(254)954-1289</phone>
  </user>
  <user>
    <id>10</id>
    <name>Clementina DuBuque</name>
    <email>Rey.Padberg@karina.biz</email>
    <phone>024-648-3804</phone>
  </user>
  <user>
    <id>3</id>
    <name>Clementine Bauch</name>
    <email>Nathan@yesenia.net</email>
    <phone>1-463-123-4447</phone>
  </user>
  ...
</users>
<!-- Експорт згенеровано: 2026-06-18T00:01:21.987Z -->
```

## Приклад результата ітераторів

Після запуску ітератора для кожного файлу командою `npx ts-node ./src/main-iterate.ts` у консоль виводяться об'єкти типу `UserData`:

```bash
--- CSV ---
{
  id: 5,
  name: 'Chelsey Dietrich',
  email: 'Lucio_Hettinger@annie.ca',
  phone: '(254)954-1289'
}
{
  id: 10,
  name: 'Clementina DuBuque',
  email: 'Rey.Padberg@karina.biz',
  phone: '024-648-3804'
}
...
--- JSON ---
{
  id: 5,
  name: 'Chelsey Dietrich',
  email: 'Lucio_Hettinger@annie.ca',
  phone: '(254)954-1289'
}
{
  id: 10,
  name: 'Clementina DuBuque',
  email: 'Rey.Padberg@karina.biz',
  phone: '024-648-3804'
}
...
--- XML ---
{
  id: 5,
  name: 'Chelsey Dietrich',
  email: 'Lucio_Hettinger@annie.ca',
  phone: '(254)954-1289'
}
{
  id: 10,
  name: 'Clementina DuBuque',
  email: 'Rey.Padberg@karina.biz',
  phone: '024-648-3804'
}
...
```

Для всіх трьох форматів CSV, JSON, XML обхід працює однаково — по одному користувачу за ітерацію.
