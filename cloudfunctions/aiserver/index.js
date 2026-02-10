// 添加 ReadableStream polyfill（兼容旧版 Node.js）
if (typeof ReadableStream === 'undefined') {
  global.ReadableStream = require('web-streams-polyfill').ReadableStream;
}

const { ChatOpenAI } = require("@langchain/openai");
const { HumanMessage } = require("@langchain/core/messages");

exports.main = async (event, context) => {
  const model = new ChatOpenAI({
    baseURL: process.env.OPENAI_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY,
    modelName: process.env.OPENAI_MODEL,
    temperature: 0.7,
  });

  const res = await model.invoke([new HumanMessage("介绍一下你自己,你是一只胡萝卜")]);
  console.log(res);
  return {
    content: res,
    inner: '123456',
    event,
    context,
  };
};
