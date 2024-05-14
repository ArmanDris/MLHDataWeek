<script>
	let name = ''
	let email = ''
	let address = ''
	let leads = ''

    async function submit(event) 
	{
		if (!areAllFormsFilled()) {
			return;
		}

        const formData = {
            name: String(name),
            email: String(email),
            address: String(address),
            leads: String(leads)
        };

        try {
    		// Send the data to the backend
    		const response = await fetch('http://localhost:3000/addCustomer', {
        		method: 'POST',
        		headers: {
        			'Content-Type': 'application/json'
        		},
        		body: JSON.stringify(formData)
      		});

			if (response.ok) {
				const data = await response.json();
				console.log(Object.values(data).join(", "));
			} else {
				console.error('Error:', response.statusText);
			}
			
    	} catch (error) {
    		console.error('Error:', error);
    	}
	}

	function areAllFormsFilled() {
		return name.trim() !== "" && email.trim() !== "" && address.trim() !== "" && leads.trim() !== "";
	}

    function gotoNextInput(event) 
    {
        if (event.key !== "Enter") {
            return
		}

        if (areAllFormsFilled()) {
            submit()
            return
        }

        event.preventDefault();
        const inputs = Array.from(document.querySelectorAll("#inputCollection input"));
        const currentIndex = inputs.findIndex(input => input === event.target);
        const nextIndex = currentIndex + 1;
        if (nextIndex < inputs.length) {
            inputs[nextIndex].focus();
        }
    }
</script>

<div id="inputCollection">
	<input bind:value={name}    placeholder="Name" on:keydown={gotoNextInput} />
	<input bind:value={email}   placeholder="Email" on:keydown={gotoNextInput} />
	<input bind:value={address} placeholder="Address" on:keydown={gotoNextInput} />
	<input bind:value={leads}   placeholder="Leads (asd, sdf, ...)" on:keydown={gotoNextInput} />
	<button on:click={submit}><b>+</b></button>
</div>

<style>
	#inputCollection {
		display: flex;
	}

	#inputCollection > * {
		font: inherit;
		width: 100%;
		background: inherit;
		border: 0;
		border-top: 1px solid #073642;
		border-bottom: 1px solid #073642;
		font-size: large;
		padding: 14px;
	}

	#inputCollection > *:first-child {
		border-left: 1px solid #073642;
		border-radius: 1rem 0 0 0;
	}

	#inputCollection > *:last-child {
		border-right: 1px solid #073642;
		border-radius: 0 1rem 0 0;
	}

	#inputCollection button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200px;
		font-size: x-large;
		cursor: pointer;
	}
</style>
