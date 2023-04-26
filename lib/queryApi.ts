import openai from "./chatgpt";

export const query = async (prompt: string, model: string) => {
    const res = await openai
        .createCompletion({
            model,
            prompt,
            temperature: 0.9,
    }).then(res => res.data.choices[0].text)
   
    return res;
}

