exports.startRent = (req, res) => {
    // Simula envio para fila RentProcess
    res.status(200).send({ message: 'Rent process started!' });
};
