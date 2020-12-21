let month = prompt("Введите месяц что бы узнать его порядковый номер в году.         Или введите месяц что бы узнать его название. (!!! С заглавной буквы !!!)");

/*
Как нам всем известно, prompt всегда возвращает строку, поэтому 
наши номера месяцев в switchcase мы и будем передавать как строку!!!
*/
switch (month) {
  case "1":
    alert(`Месяц под номером ${month} - Январь`)
    break;
  case "2":
    alert(`Месяц под номером ${month} - Февраль`)
    break;
  case "3":
    alert(`Месяц под номером ${month} - Март`)
    break;  
  case "4":
    alert(`Месяц под номером ${month} - Апрель`)
    break;
  case "5":
    alert(`Месяц под номером ${month} - Май`)
    break;  
  case "6":
    alert(`Месяц под номером ${month} - Июнь`)
    break;
  case "7":
    alert(`Месяц под номером ${month} - Июль`)
    break;
  case "8":
    alert(`Месяц под номером ${month} - Август`)
    break;  
  case "9":
    alert(`Месяц под номером ${month} - Сентябрь`)
    break;
  case "10":
    alert(`Месяц под номером ${month} - Октябрь`)
    break;
  case "11":
    alert(`Месяц под номером ${month} - Ноябрь`)
    break;    
  case "12":
    alert(`Месяц под номером ${month} - Декабрь`)
    break;

  case "Январь":
    alert(`${month} - это 1-й месяц в году`)
    break;
  case "Февраль":
    alert(`${month} - это 2-й месяц в году`)
    break;
  case "Март":
    alert(`${month} - это 3-й месяц в году`)
    break;  
  case "Апрель":
    alert(`${month} - это 4-й месяц в году`)
    break;
  case "Май":
    alert(`${month} - это 5-й месяц в году`)
    break;  
  case "Июнь":
    alert(`${month} - это 6-й месяц в году`)
    break;
  case "Июль":
    alert(`${month} - это 7-й месяц в году`)
    break;
  case "Август":
    alert(`${month} - это 8-й месяц в году`)
    break;  
  case "Сентябрь":
    alert(`${month} - это 9-й месяц в году`)
    break;
  case "Октябрь":
    alert(`${month} - это 10-й месяц в году`)
    break;
  case "Ноябрь":
    alert(`${month} - это 11-й месяц в году`)
    break;    
  case "Декабрь":
    alert(`${month} - это 12-й месяц в году`)
    break; 
  default:
    alert("Проверьте правильность ввода")  
} 
