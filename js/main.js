var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
document.getElementById("button").onclick = function (){check()};
var checkExpFirstName = /\w/;
var checkExpLastName = /\d/;


function check() {	
	var firstNameContent = firstName.value;
	var lastNameContent = lastName.value;
	
	if (checkExpFirstName.test(firstNameContent) === false ) {
		firstName.style.borderColor = "red";
	} else if (checkExpLastName.test(lastNameContent) === false ) {
		lastName.style.borderColor = "red";
	} else { 
		alert("Форма успешно отправлена")
	}
}

(function(){
    function recursiveList (data) {
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		//исходный массив [1,2,[3,4,[5,6,7],8],9,10]
        // в результате должна получиться такая структура 
        /* 
           <ul>
                <li>1</li>
                <li>2</li>
                <li>
                    <ul>
                        <li>3</li>
                        <li>4</li>
                        <li>
                            <ul>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                           </ul>
                        </li>
                        <li>8</li>
                   </ul>
                </li>
                <li>9</li>
                <li>10</li>
           </ul>
        */
                                      
        return list;
    }

    function recursiveHeadings (data, weight) {
        var fragment = document.createDocumentFragment();
		//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        return fragment;
    }

    function simpleValidation(form) {
        //@todo при сабмите формы проверять поля на пустотое значение. 
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы
		
		
    }
	


	//вызывать функции здесь!

    
})();