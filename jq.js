$('document').ready(function() {
  var todo_app = $('#todo-app');
  var title = $('<h1>Todo App!</h1>');
  var input = $('<input placeholder="enter todo..."/>');
  var add = $('<button>Add</button>');
  var list = $('<ul></ul>');
  var item = $('<li></li>');

//   list.css({
//     height: '100px',
//     width: '100px',
//     background: 'gray'
//   });

  todo_app.append(title);
  todo_app.append(input);
  todo_app.append(add);
  todo_app.append(list);

  function addItem() {
    var inputText = input.val();
    input.val('');

    var newItem = item.clone();
    newItem.text(inputText);
    list.append(newItem);
  }

  add.on('click', addItem);

  input.on('keydown', function(event) {
    if (event.which == 13) {
      addItem();
    }
  });


});
