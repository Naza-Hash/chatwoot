class Widget::ChatController < ApplicationController
  protect_from_forgery with: :null_session

  def reply
    message = params[:message]

    # Виклик твого сервісу GPT
    response = ChatGptService.new.generate_reply(message)

    render json: { reply: response }, status: :ok
  end
end
