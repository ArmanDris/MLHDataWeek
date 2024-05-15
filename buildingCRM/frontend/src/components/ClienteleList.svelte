<script>
    let customers = [];
    getCustomers();

    function getCustomers() {
        fetch("http://localhost:3000/getCustomers")
            .then((response) => response.json())
            .then((data) => {
                customers = data;
            })
            .catch((error) => {
                console.error("Error fetching customers:", error);
            });
    }

    async function removeCustomer(customer) {
        const { name, email, address, leads } = customer;
        const response = await fetch("http://localhost:3000/removeCustomer", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, address, leads }),
        });

        if (response.ok) {
            console.log("Removed " + name + email + address + leads);
        } else {
            console.error("Error removing " + name + response.status);
        }

        customers = customers.filter((c) => c !== customer);
    }
</script>

<div id="list">
    {#each customers as customer}
        <div class="item">
            <span class="name">{customer.name}</span>
            <span class="email">{customer.email}</span>
            <span class="address">{customer.address}</span>
            <span class="leads">{customer.leads}</span>
            <button on:click={() => removeCustomer(customer)}><b>-</b></button>
        </div>
    {/each}
</div>

<style>
    #list {
        width: 100%;
        border: 1px solid #073642;
        border-top: 0;
        border-radius: 0 0 1rem 1rem;
    }

    .item {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .item span {
        height: 1.1rem;
        overflow: scroll;
        text-align: center;
        font-size: large;
    }

    .item > * {
        width: 100%;
        padding: 14px;
    }

    #list .item button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        font-size: x-large;
        cursor: pointer;
        background: inherit;
        border: 0;
    }
</style>
