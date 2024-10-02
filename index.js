document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращаем отправку формы

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    // Простая проверка пароля
    if (password !== confirmPassword) {
        message.style.color = 'red';
        message.textContent = 'Passwords do not match!';
        return;
    }

    // Эмуляция отправки данных
    const userData = {
        username: username,
        email: email,
        password: password
    };

    console.log('User data:', userData);

    // Очистка формы после успешной регистрации
    message.style.color = 'green';
    message.textContent = 'Registration successful!';
    document.getElementById('registrationForm').reset();
});
