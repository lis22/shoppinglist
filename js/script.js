$(document).ready(function() {

    createList();

    addItem();

    removeItem();

    checkItem();

});
/** if shopping list isn't in DOM, it creates it */
function createList() {

    if ($("#shoppingList").length == 0) {

      $(".resultSection").append('<ul id="shoppingList"> </ul>');

    };
}
/* Takes in user input and adds it to the list */
function addItem() {
    $("#inputForm").submit(function(e) {
      e.preventDefault();

    var itemName = $("#inputTextBox").val();
    console.log(itemName);
    var itemType = $("#catComboBox").val();

    if (itemName == ''){
      alert("Please enter an item name");
    }
    else {

      $("#inputTextBox").val('');

      $("#shoppingList").prepend('<li><label class="itemLbl"><input type="checkbox"' +
      'name="purchasedItems" class="checkedItem"  value=' + itemName + '> ' + itemName + '</label>' +
      '<label class="catLbl">' + itemType + '</label>' +
      '<button class= "delBtn" type ="submit"> &#xf1f8 </button> </li>');
      }

   });
}
/*removes item from list when trash can is clicked */
function removeItem() {
  $("#shoppingList").on('click','.delBtn',function() {
    $(this).parent().remove();
  });
}

/* allows toggle for the check mark for each item. Underlines and is red color
when purchased and normal font when not. Also removes and places purchased
items at the bottom of the list if the list has more than 1 item in it */
function  checkItem() {
  $("#shoppingList").on('change','.checkedItem',function() {

    var itemLbl = $(this).parent();
    var itemLi = $(this).parent().parent();

    console.log(itemLi);

    if (this.checked) {
      $(itemLbl).css('textDecoration', 'line-through');
      $(itemLbl).css('color', '#E00000 ');

      if($("#shoppingList li").length > 1)
      {
          $(this).parent().parent().remove();

          $("#shoppingList").append(itemLi);
      }

    } else {
      $(itemLbl).css('textDecoration', 'none');
       $(itemLbl).css('color', 'black');
     }
  });
}
