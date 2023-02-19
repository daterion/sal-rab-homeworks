function sendRequest(name, phone, address, goods, sum) {
    
    let clientString = `${name} ${phone}`;
    let addressString = `ул. ${address.street}, `+
                        `дом ${address.house}, `+
                        `${address.entrance} подъезд, `+
                        `${address.floor} этаж, `+
                        `кв. ${address.flat}`;

    let data = {client: clientString,
                order: {address: addressString, sum}, 
                goods: []};

    for (let good of goods) {
        data.goods.push({title: good.title, count: good.count});
    }

    let jsonData = JSON.stringify({data});

    return jsonData;
}
