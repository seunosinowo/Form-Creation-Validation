async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    //Fetch data using Try/Catch
    try{
        const response = await fetch(apiUrl)
        const users = await response.json();

        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('ul')
            listItem.textContent = user.name;
            userList.appendChild(listItem);

        })

        dataContainer.appendChild(userList)
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data'
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData)