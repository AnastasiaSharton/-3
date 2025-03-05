const shoppingCart = ["Арбуз", "Книга", "Кофе", "Макароны", "Молоко", "Сахар", "Яблоки"];

const title = document.createElement("h1");
title.textContent = "Корзина покупателя";
document.body.append(title);

const addBtn = document.createElement("button");
addBtn.textContent = "Добавить товар";
document.body.append(addBtn);

addBtn.onclick = function () {
    const product = prompt("Введите название товара");

    if (!product) {
        alert("Название товара не введено!");
    } else {
        shoppingCart.push(product);
    }

    const result = sort(shoppingCart);
    showList(result);
}

function sort(arr) {
    list.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function showList(arr) {
    for (let i = 0; i < arr.length; i++) {
        const item = document.createElement("li");
        item.textContent = `${i + 1}) ${arr[i]}`
        list.append(item)
    }
}

const list = document.createElement("ul");
document.body.append(list);

showList(shoppingCart);