var money, time;

function start(){
    money=+prompt("Ваш бюджет на месяц", '1000' );
    time=prompt("Введите дату в формате YYYY-MM-DD", '1234');

    while(isNaN(money) || money == "" || money == null){
        money=+prompt("Ваш бюджет на месяц", '1000' );
    }
}
start();

var appData={
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function chooseExpenses(){
    for (var i = 0; i < 2; i++) {
        var a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
    
            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--;
        }
    
    }
}
chooseExpenses();

function dedectDayBudjet(){
    appData.moneyPerDay=(appData.budjet/30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay);
}
dedectDayBudjet();

function dedectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}
dedectLevel();

function checkSavings(){
    if(appData.savings == true){
        var save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12+percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {                             
    for (var i = 1; i <= 3; i++) {
        var questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();