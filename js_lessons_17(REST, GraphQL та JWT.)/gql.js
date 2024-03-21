// Напишіть функцію gql, яка здійснює GraphQL запит. Функція приймає три параметри:
// Ендпоінт - адреса сервера. Наприклад "http://shop-roles.node.ed.asmer.org.ua/graphql"
// Текст запиту (query). Наприклад:
// query cats($q: String){
//     CategoryFind(query: $q){
//         _id name
//     }
// }
// Параметри(змінні) (variables) запиту об'єктом. Наприклад:
// {
//     q: "[{}]"
// }
// Функція повинна повертати проміс, створений fetch з наступними налаштуваннями:
// Метод POST
// Заголовки:
// Content-Type - application/json
// Accept - application/json
// Тіло - JSON, об'єкт з двома ключами - query (текст запиту) та variables

const endpoint = "http://shop-roles.node.ed.asmer.org.ua/graphql";
const query = `
    query cats($q: String){
        CategoryFind(query: $q){
            _id name
        }
    }
`;
const variables = {
    q: "[{}]"
};

async function gql(endpoint, query, variables) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables
        })
    };

    try {
        const response = await fetch(endpoint, options);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`GraphQL request failed: ${error}`);
    }
}

gql(endpoint, query, variables)
    .then(data => console.log(data))
    .catch(error => console.error(error));
