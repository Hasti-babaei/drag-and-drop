let data = [
  { id: 1, title: "Item namber 1", text: "This message is for testing" },
  { id: 2, title: "Item namber 2", text: "This message is for testing" },
  { id: 3, title: "Item namber 3", text: "This message is for testing" },
  { id: 4, title: "Item namber 4", text: "This message is for testing" },
  { id: 5, title: "Item namber 5", text: "This message is for testing" },
  { id: 6, title: "Item namber 6", text: "This message is for testing" },
  { id: 7, title: "Item namber 7", text: "This message is for testing" },
  { id: 8, title: "Item namber 8", text: "This message is for testing" },
  { id: 9, title: "Item namber 9", text: "This message is for testing" },
  { id: 10, title: "Item namber 10", text: "This message is for testing" },
];
new draggable({
  el: document.querySelector("#list"),
  list: data,
  template: (item) => {
    return `
        
            <div class="list-item" id="${item.id}">
                <div class="list-item_head">
                    <span class="head-id">${item.id}</span>
                </div>
                <div class="list-item_content">
                    <span class="item-title">${item.title}</span>
                    <p>${item.text}</p>
                </div>
            </div>
        
        `;
  },
  update: (list) => {
    console.log('new List',list)
  },
});
