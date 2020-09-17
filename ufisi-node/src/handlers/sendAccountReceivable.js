const send = (producer, topicName, accountReceivable) => {
    producer.on('ready', function () {
        const data = [
            { topic: topicName, messages: JSON.stringify(accountReceivable) }
        ];

        producer.send(data, function (err, resp) {
            console.log(resp);
        });
    });
    producer.on('error', function (err) {
        console.log(err);
    });
}

module.exports = send;