const getAllCustomers = async () => {
    try {
        const url = 'http://localhost:8080/customers/';
        let response = await fetch((url))
        return await response.json()
    } catch (err) {
        console.log(err)
    }
};

const getOneCustomer = async (id) => {
    try {
        const url = `http://localhost:8080/customers/${id}`;
        let response = await fetch((url))
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const createCustomer = async (customer) => {
    const url = 'http://localhost:8080/customers/';
    const init = {
        method: POST,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(customer)
    };
    try {
        let response = await fetch((url, init))
        console.log(response);
        return response;
    } catch (err) {
        console.log(err)
    }

}

const updateCustomer = async (customer) => {
    const url = `http://localhost:8080/customers/${customer.id}`;
    const init = {
        method: PUT,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(customer)
    };
    try {
        let response = await fetch((url, init))
        console.log(response);
        return customer;
    } catch (err) {
        console.log(err)
    }

}

const deleteCustomer = async (id) => {
    const url = `http://localhost:8080/customers/${id}`;
    // const init = {
    //     method: DELETE,
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     }
    // };
    try {
        let response = await fetch((url, { method: "DELETE" }))
        console.log(response);
        return customer;
    } catch (err) {
        console.log(err);
    }

}

const getAddress = async (customer) => {
    const url = `http://localhost:8080/address/${customer.address}`;
    try {
        let response = await fetch((url));
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}



export default { 
    getAllCustomers, 
    getOneCustomer, 
    createCustomer, 
    updateCustomer, 
    deleteCustomer,
    getAddress,
};