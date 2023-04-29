from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
import openai
import os

openai.api_key = os.environ["OPENAI_API_KEY"] = "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"
llm = OpenAI(temperature=0.5)
prompt = PromptTemplate(
    input_variables=["message"],
    template="{message}",
)
chain = LLMChain(llm=llm, prompt=prompt)

def generate_completion(message):
    try:
        response = chain.run(message)
        return response
    except Exception as error:
        print(f"Error generating completion: {error}")
        return "Error generating completion"
