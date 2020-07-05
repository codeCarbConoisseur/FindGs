
// <form name="test" onsubmit="return validate();" onreset="return clear();">
//     <p><b>Ваше имя:</b><br>
// <input type="text" name="name" id="name" size="40">
//     </p>
//     <p><b>Каким браузером в основном пользуетесь:</b><Br>
// <input type="radio" name="browser" value="ie"> Internet Explorer<Br>
// <input type="radio" name="browser" value="opera"> Opera<Br>
//     <input type="radio" name="browser" value="firefox"> Firefox<Br>
//     </p>
//     <p>Комментарий<Br>
//     <textarea name="comment" id="comment"></textarea></p>
// <p><input type="submit" value="Отправить">
//     <input type="reset" value="Очистить"></p>
//     </form>
//
//     <script>
//     function validate() {
//         let obj1 = document.test.name;
//         let obj2 = document.test.comment;
//         if ((trimfield(obj1.value) == '') && (trimfield(obj2.value) == '')) {
//             alert("The forms are empty!");
//             obj1.focus();
//             return false
//         } else if(trimfield(obj1.value) == '') {
//             alert("Please Provide Details!");
//             obj1.focus();
//             return false;-
//         } else if(trimfield(obj2.value) == '') {
//             alert("Please Provide Name!");
//             obj2.focus();
//             return false;
//         }
//         else {
//             return true;
//         }
//
//     }
// function trimfield(str) {
//     return str.replace(/^\s+|\s+$/g,'');
// }
// void function clear() {
//     let obj1 = document.test.name;
//     let obj2 = document.test.comment;
//     obj1.value = '';
//     obj2.value = '';
// }
// </script>