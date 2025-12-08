class ChatGptService
  require 'net/http'
  require 'json'

  OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"

  def ask(user_message)
    uri = URI(OPENAI_API_URL)

    headers = {
      "Content-Type" => "application/json",
      "Authorization" => "Bearer #{ENV['OPENAI_API_KEY']}"
    }

    body = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful chatbot assistant." },
        { role: "user", content: user_message }
      ]
    }.to_json

    response = Net::HTTP.post(uri, body, headers)
    json = JSON.parse(response.body)

    json["choices"][0]["message"]["content"].strip rescue "Error: AI unavailable"
  end
end
