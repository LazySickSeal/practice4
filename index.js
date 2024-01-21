function calculate_salary(role) {
    let salary = 0;
    if (role === 'engineer') {
    salary = 4000;
    } else {
    salary = 1500;
    }
    return salary;
    }

    let worker1 = {
        name: 'Джон Сноу',
        role: 'worker',
        age: 23
    };

    let engineer1 = {
        name: 'Гадя Хренова',
        role: 'engineer',
        age: 32,
    };

    let worker2 = {
        name: 'Супернатуральный Кастиэль',
        role: 'worker',
        age: 34,
    };

    let engineer2 = {
        name: 'Юрикен Сюрикенович',
        role: 'engineer',
        age: 43,
    };

    let employees = [worker1, engineer1, worker2];
    employees.push(engineer2);
    
    let total_salary = 0;
    for (let index = 0; index < employees.length; index = index + 1) {
        let employee = employees[index];
        let salary = calculate_salary(employee.role);
        total_salary = total_salary + salary;
    }
    console.log(total_salary);