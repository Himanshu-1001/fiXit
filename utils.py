import openai

openai.api_key = "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"  # Add your OpenAI API key here

def generate_response(input):
    messages = [
        {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."}
    ]

    messages.append({"role": "user", "content": f"{input}"})
    completion = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    reply = completion.choices[0].message.content
    return reply
