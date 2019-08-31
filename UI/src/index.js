var user = {
    firstname: "A",
    middlename: "Van",
    lastname: "Nguyen",
    yearOfBirth: 1990,
}

user.greeting = () => {
    alert(`${user.firstname} ${user.middlename} ${user.lastname}`)
}

user.greeting();

