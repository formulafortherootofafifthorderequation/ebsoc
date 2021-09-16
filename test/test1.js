const api = require('../dist/index');

(async() => {
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJPbmxpbmUgQ2xhc3MiLCJtZW1iZXJOYW1lIjoi67CV6riI7ZiBIiwibWVtYmVyU2Nob29sQ29kZSI6IkgwMDI4NSIsImV4cCI6MTYzMjAzNTAwNCwiaWF0IjoxNjMxNzc1ODA0LCJtZW1iZXJJZCI6InJtYWd1cjEyMDMyIn0.IThNsmpyfqMP5eOUSDs59rieDZxdxzF_MRLU-Eg3NWk";
    api.Wrapper.fetchCourse(token, "totaldesign2021", {
        
    })
})();