const fetch = require('node-fetch');

(
    async()=>{
        const solicitud = await fetch("http://0bdcfd77b44b.ngrok.io/api/data",{
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json',
                'User-Agent': `nodejs/${process.version}`,
                'Accept': 'aplication/json'
            },
            body: JSON.stringify({
                palabra:"hola"
            })
        });

        const payload = await solicitud.json();
        console.log(payload);

    }
)();