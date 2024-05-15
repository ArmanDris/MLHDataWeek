<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let username = "";
    let password = "";

    async function login() 
    {
        try 
        {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username:String(username), password:String(password)})
            });

            if (response.ok) {
                console.log('Login successful')
                dispatch("loginOk");
            }
            else {
                console.error(await response.text())
            }
        }
        catch (error) 
        {
            console.log("Error - " + error)
        }
    }
</script>

<div id="flexBox">
    <div id="loginBox">
        <h1>SUPER CPM</h1>
        <input bind:value={username} placeholder="Username" />
        <input bind:value={password} placeholder="Password" type="password" />
        <button on:click={login}>Log In</button>
    </div>
</div>

<style>
    #flexBox {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #loginBox {
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    input,
    button {
        background: inherit;
        border: 1px solid black;
        border-radius: 8px;
        font-family: inherit;
    }

    input {
        width: 100%;
        height: 30px;
        padding: 16px;
    }

    button {
        width: 75%;
        height: 38px;
        padding: 8px;
        color: #268bd2;
        font-weight: bold;
    }

    h1 {
        color: #268bd2;
        text-align: center;
        margin: 0;
        height: default;
    }
</style>
