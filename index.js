// 引入所需的模块
const axios = require('axios');

// 用户输入的位置
const location = 'New York';

// API密钥
const apiKey = 'YOUR_API_KEY';

// 构建API请求URL
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

// 发起API请求
axios.get(apiUrl)
  .then(response => {
    // 处理API响应
    const weatherData = response.data;
    const currentTemperature = weatherData.current.temp_c;
    const condition = weatherData.current.condition.text;

    // 打印天气信息
    console.log(`Current temperature in ${location}: ${currentTemperature}°C`);
    console.log(`Condition: ${condition}`);
  })
  .catch(error => {
    // 处理请求错误
    console.error('Error fetching weather data:', error);
  });
