import fetch from 'node-fetch'
jest.mock('node-fetch', ()=>jest.fn())

describe('fetch-mock test', () => {
    it('check fetch mock test', async () => {

        var makeRequest = require('https://www.breakingbadapi.com/api/characters');


         const response = Promise.resolve({
                ok: true,
                status,
                json: () => {
                    return returnBody ? returnBody : {};
                },
               })
        fetch.mockImplementation(()=> response)
        await response
        makeRequest().then(function (data) {
            console.log('data recieved', data);
        }).catch((e) => {
            console.log(e.message)
        });

    });
});