export async function getUnreadEmails() {

    let cc = 4;
    //console.log("skskskssks")
    let aa = await fetch('http://localhost:3001/enable', {
            method: 'GET',
        }).then(response => response.json())
        /* .then(data => {
             console.log("ssssssssssmlsdmlsmlnlkn")
             return data;


         });*/
    return cc;

}


function signOut() {

    fetch('http://localhost:3001/test/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/JSON'
        },
        body: JSON.stringify({
            token: tok,
        })


    }).catch(e => {
        console.log(e);
    })


}


function getUser() {


}