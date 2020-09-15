function findAll() {

return fetch('http://localhost:1337/recettes',
{
    method: "GET",
    headers: {
        'Accept': 'Application/json'
    }
})
.then(res => res.json());


}





export default {
    findAll,
}