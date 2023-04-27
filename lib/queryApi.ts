import openai from "./chatgpt";

const query = async (prompt: string, chatId: string) => {
    const res = await openai
        .createCompletion({
            model: "gpt-3.5-turbo",
            prompt,
            temperature: 0.9,
            top_p: 1,
    }).then(res => res.data.choices[0].text).catch(err => console.log(err));
   
    return res;
}

export default query;